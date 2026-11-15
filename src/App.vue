<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { onAuthStateChanged, signInWithPopup, signOut as firebaseSignOut, type User } from 'firebase/auth'
import { collection, doc, getDoc, onSnapshot, setDoc, deleteDoc, query, orderBy, serverTimestamp } from 'firebase/firestore'
import { auth, db, googleProvider, firebaseConfigured } from './lib/firebase'
import type { Meal, MealType, DayPlan } from './types'
import { CalendarDays, ChefHat, Utensils, Plus, ChevronLeft, ChevronRight, Sun, Moon, Languages, Search, LogOut, X, Trash2, Pencil, Sparkles, ShoppingBasket, Check, Minus } from '@lucide/vue'

const { t, locale } = useI18n()
const user = ref<User | null>(null)
const access = ref(false), checking = ref(true), authError = ref('')
const meals = ref<Meal[]>([]), plans = ref<Record<string, DayPlan>>({})
const activeTab = ref<'today'|'meals'|'plan'|'shopping'>('today')
const theme = ref<'dark'|'light'>((localStorage.getItem('diet-theme') as 'dark'|'light') || 'dark')
const search = ref(''), modal = ref(false), editing = ref<Meal|null>(null), selectedDate = ref(new Date())
const form = ref({ name:'', description:'', tags:[] as string[], ingredientsText:'' })
const shoppingChecked = ref<Record<string, boolean>>({})
const manualItems = ref<string[]>([])
const manualInput = ref('')
const types: MealType[] = ['breakfast','lunch','snack','dinner']
const mealTimes = ['10:00','13:00','16:00','20:00']
const sortedMeals = computed(() => meals.value.filter(m => m.name.toLowerCase().includes(search.value.toLowerCase())).sort((a,b) => a.name.localeCompare(b.name)))
const dateKey = (d:Date) => `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`
const todayKey = dateKey(new Date())
const currentKey = computed(() => dateKey(selectedDate.value))
const todayPlan = computed(() => plans.value[todayKey] || {id:todayKey,date:todayKey,meals:{}} as DayPlan)
const weekDays = computed(() => { const d=new Date(selectedDate.value); d.setDate(d.getDate()-((d.getDay()+6)%7)); return Array.from({length:7},(_,i)=>{const x=new Date(d);x.setDate(d.getDate()+i);return x}) })
const dateLabel = (d:Date) => new Intl.DateTimeFormat(locale.value==='it'?'it-IT':'en-US',{weekday:'short',day:'numeric',month:'short'}).format(d)
const fullDate = (d:Date) => new Intl.DateTimeFormat(locale.value==='it'?'it-IT':'en-US',{weekday:'long',day:'numeric',month:'long'}).format(d)
const frequencyFor = (mealId:string) => Object.values(plans.value).reduce((sum, day) => sum + Object.values(day.meals || {}).filter(item => item?.mealId===mealId).length, 0)
const generatedIngredients = computed(() => {
  const map = new Map<string,string>()
  for (const [dayKey, day] of Object.entries(plans.value)) {
    if (dayKey < todayKey) continue
    for (const planned of Object.values(day.meals || {})) {
      if (!planned) continue
      const meal = meals.value.find(m => m.id===planned.mealId)
      for (const ingredient of meal?.ingredients || []) {
        const clean = ingredient.trim()
        if (clean) map.set(clean.toLocaleLowerCase(), clean)
      }
    }
  }
  for (const item of manualItems.value) if(item.trim()) map.set(`manual:${item.toLocaleLowerCase()}`, item)
  return [...map.entries()].map(([key,name]) => ({key,name}))
})
let stopMeals:(()=>void)|undefined, stopPlans:(()=>void)|undefined, stopShopping:(()=>void)|undefined
function subscribe() {
  if (!db) return
  stopMeals?.(); stopPlans?.(); stopShopping?.()
  stopMeals = onSnapshot(query(collection(db,'meals'),orderBy('name')), snap => meals.value=snap.docs.map(d=>({id:d.id,...d.data()} as Meal)))
  stopPlans = onSnapshot(collection(db,'plan'), snap => { const next:Record<string,DayPlan>={}; snap.docs.forEach(d=>next[d.id]={id:d.id,...d.data()} as DayPlan); plans.value=next })
  stopShopping = onSnapshot(doc(db,'shoppingLists','current'), snap => { const data=snap.data(); shoppingChecked.value=data?.checked || {}; manualItems.value=data?.manualItems || [] })
}
async function checkAccess(u:User) {
  if (!db) { checking.value=false; return }
  try { const snap=await getDoc(doc(db,'users',u.uid)); access.value=snap.exists()&&snap.data().enabled===true; if(access.value) subscribe() }
  catch(e) { console.error('Unable to verify user access:',e); access.value=false }
  finally { checking.value=false }
}
let unsubscribeAuth:(()=>void)|undefined
onMounted(() => {
  if(!auth||!db){checking.value=false;return}
  unsubscribeAuth=onAuthStateChanged(auth,async u=>{user.value=u;access.value=false;checking.value=true;stopMeals?.();stopPlans?.();stopShopping?.();meals.value=[];plans.value={};if(u)await checkAccess(u);else checking.value=false})
})
onUnmounted(()=>{unsubscribeAuth?.();stopMeals?.();stopPlans?.();stopShopping?.()})
watch(theme,v=>{document.documentElement.dataset.theme=v;localStorage.setItem('diet-theme',v)},{immediate:true})
watch(locale,v=>localStorage.setItem('diet-language',v))
async function login(){if(!auth)return;authError.value='';try{await signInWithPopup(auth,googleProvider)}catch(e){authError.value=e instanceof Error?e.message:'Authentication failed'}}
async function logout(){if(auth)await firebaseSignOut(auth)}
function openMeal(meal?:Meal){editing.value=meal||null;form.value=meal?{name:meal.name,description:meal.description||'',tags:[...(meal.tags||[])],ingredientsText:(meal.ingredients||[]).join('\n')}:{name:'',description:'',tags:[],ingredientsText:''};modal.value=true}
async function saveMeal(){if(!db||!form.value.name.trim())return;const ingredients=form.value.ingredientsText.split(/[\n,;]/).map(x=>x.trim()).filter(Boolean);const payload={name:form.value.name.trim(),description:form.value.description.trim(),tags:form.value.tags,ingredients,updatedAt:serverTimestamp()};if(editing.value)await setDoc(doc(db,'meals',editing.value.id),payload,{merge:true});else await setDoc(doc(db,'meals',crypto.randomUUID()),{...payload,createdAt:serverTimestamp()});modal.value=false}
async function removeMeal(m:Meal){if(!db||!confirm(t('confirmDelete')))return;await deleteDoc(doc(db,'meals',m.id))}
async function setPlan(date:Date,type:MealType,mealId:string){if(!db)return;const key=dateKey(date),chosen=meals.value.find(m=>m.id===mealId),day=plans.value[key]||{id:key,date:key,meals:{}};const next={...day.meals};if(chosen)next[type]={mealId:chosen.id,mealName:chosen.name};else delete next[type];await setDoc(doc(db,'plan',key),{date:key,meals:next},{merge:true})}
function shiftWeek(delta:number){const d=new Date(selectedDate.value);d.setDate(d.getDate()+delta*7);selectedDate.value=d}
function tagLabel(tag:string){return t(tag)}
async function persistShopping(){if(!db)return;await setDoc(doc(db,'shoppingLists','current'),{checked:shoppingChecked.value,manualItems:manualItems.value,updatedAt:serverTimestamp()},{merge:true})}
async function toggleShopping(key:string){shoppingChecked.value={...shoppingChecked.value,[key]:!shoppingChecked.value[key]};await persistShopping()}
async function addManualItem(){const value=manualInput.value.trim();if(!value)return;manualItems.value=[...manualItems.value,value];manualInput.value='';await persistShopping()}
async function removeManualItem(name:string){manualItems.value=manualItems.value.filter(x=>x!==name);await persistShopping()}
function onWeekWheel(event:WheelEvent){const el=event.currentTarget as HTMLElement;if(event.shiftKey&&Math.abs(event.deltaY)>0){event.preventDefault();el.scrollLeft+=event.deltaY}}
</script>
<template>
  <div v-if="!firebaseConfigured" class="auth-screen center-state"><div class="state-icon"><Sparkles/></div><h1>{{t('welcome')}}</h1><p>{{t('setup')}}</p><code>cp .env.example .env.local</code></div>
  <div v-else-if="checking" class="auth-screen center-state"><div class="loader"/><p>Loading…</p></div>
  <div v-else-if="!user" class="auth-screen login-state"><div class="hero-orbit"><div class="hero-plate"><Utensils :size="34"/></div></div><p class="eyebrow">A MORE MINDFUL ROUTINE</p><h1>{{t('welcome')}}</h1><p class="muted">Plan ahead. Eat well. Find your rhythm.</p><button class="primary-btn google-btn" @click="login"><span class="google-g">G</span>{{t('signIn')}}</button><p v-if="authError" class="error-text">{{authError}}</p></div>
  <div v-else-if="!access" class="auth-screen center-state"><div class="state-icon"><X/></div><h2>{{t('accessDenied')}}</h2><p class="muted">Ask the administrator to enable your UID in Firestore.</p><code>{{user.uid}}</code><button class="text-btn" @click="logout">{{t('signOut')}}</button></div>
  <div v-else class="app-shell">
    <header class="topbar app-topbar">
      <div class="brand top-brand"><div class="brand-mark"><Utensils :size="18"/></div><span>diet<span class="brand-dot">.</span></span></div>
      <div class="top-actions"><span class="today-pill"><span></span>{{dateLabel(new Date())}}</span><button class="icon-btn" @click="theme=theme==='dark'?'light':'dark'" :title="t(theme==='dark'?'light':'dark')"><Sun v-if="theme==='dark'"/><Moon v-else/></button><button class="icon-btn" @click="locale=locale==='en'?'it':'en'" :title="t('language')"><Languages/></button><button class="icon-btn" @click="logout" :title="t('signOut')"><LogOut/></button></div>
      <nav class="top-nav"><button v-for="tab in ['today','meals','plan','shopping'] as const" :key="tab" :class="['top-nav-item',{active:activeTab===tab}]" @click="activeTab=tab"><Sun v-if="tab==='today'"/><ChefHat v-else-if="tab==='meals'"/><CalendarDays v-else-if="tab==='plan'"/><ShoppingBasket v-else/><span>{{t(tab)}}</span></button></nav>
    </header>
    <main class="main-content">
      <section v-if="activeTab==='today'" class="page"><div class="page-heading"><div><p class="eyebrow">{{fullDate(new Date()).toUpperCase()}}</p><h1>{{t('todayTitle')}}<span class="heading-period">.</span></h1><p class="muted">{{t('todaySub')}}</p></div></div><div class="selected-day-heading today-section-heading"><div><p class="eyebrow">{{t('todayFocus').toUpperCase()}}</p><h2>{{fullDate(new Date())}}</h2></div><span class="day-count">{{Object.keys(todayPlan.meals||{}).length}} / 4</span></div><div class="plan-list today-plan-list"><article v-for="(type,i) in types" :key="type" class="plan-row"><div class="plan-time"><span>{{mealTimes[i]}}</span><div class="timeline-dot"/></div><div class="plan-card"><div><small>{{t(type)}}</small><h3>{{todayPlan.meals[type]?.mealName||t('emptyDay')}}</h3><p v-if="todayPlan.meals[type]" class="plan-ingredients">{{(meals.find(m=>m.id===todayPlan.meals[type]?.mealId)?.ingredients||[]).join(' · ')}}</p></div><select :value="todayPlan.meals[type]?.mealId||''" @change="setPlan(new Date(),type,($event.target as HTMLSelectElement).value)"><option value="">{{t('selectDish')}}</option><option v-for="m in meals" :key="m.id" :value="m.id">{{m.name}}</option></select></div></article></div></section>
      <section v-else-if="activeTab==='meals'" class="page"><div class="page-heading compact"><div><p class="eyebrow">YOUR PERSONAL COLLECTION</p><h1>{{t('allMeals')}}<span class="heading-period">.</span></h1><p class="muted">{{t('mealCount',{count:meals.length})}}</p></div><button class="primary-btn" @click="openMeal()"><Plus :size="17"/>{{t('addMeal')}}</button></div><div class="list-toolbar"><div class="search-box"><Search :size="17"/><input v-model="search" :placeholder="t('search')"/></div><span class="sort-label">{{t('alphabetical')}} ↕</span></div><div v-if="sortedMeals.length" class="meals-list"><article v-for="(m,i) in sortedMeals" :key="m.id" class="meal-row"><div class="meal-row-number">{{String(i+1).padStart(2,'0')}}</div><div class="meal-row-main"><h3>{{m.name}}</h3><p v-if="m.description">{{m.description}}</p><div class="tag-list"><span v-for="tag in m.tags||[]" :key="tag" class="nutrition-tag" :class="tag">{{tagLabel(tag)}}</span></div><p v-if="m.ingredients?.length" class="ingredient-preview">{{t('ingredients')}}: {{m.ingredients.join(' · ')}}</p></div><div class="frequency"><div class="frequency-label">{{t('timesPlanned')}}</div><strong>{{frequencyFor(m.id)}}</strong></div><div class="row-actions"><button class="icon-btn" @click="openMeal(m)"><Pencil/></button><button class="icon-btn danger" @click="removeMeal(m)"><Trash2/></button></div></article></div><div v-else class="empty-collection"><div class="state-icon"><ChefHat/></div><h3>{{t('noMeals')}}</h3><button class="text-btn" @click="openMeal()">{{t('addMeal')}} +</button></div></section>
      <section v-else-if="activeTab==='plan'" class="page"><div class="page-heading compact"><div><p class="eyebrow">MAKE ROOM FOR VARIETY</p><h1>{{t('plan')}}<span class="heading-period">.</span></h1><p class="muted">{{t('weekOf')}} {{dateLabel(weekDays[0])}}</p></div><div class="week-controls"><button class="icon-btn" @click="shiftWeek(-1)"><ChevronLeft/></button><button class="icon-btn" @click="selectedDate=new Date()">{{t('todayFocus')}}</button><button class="icon-btn" @click="shiftWeek(1)"><ChevronRight/></button></div></div><div class="week-strip" @wheel="onWeekWheel"><button v-for="d in weekDays" :key="dateKey(d)" :class="['day-tab',{selected:dateKey(d)===currentKey,istoday:dateKey(d)===todayKey}]" @click="selectedDate=d"><small>{{new Intl.DateTimeFormat(locale==='it'?'it-IT':'en-US',{weekday:'short'}).format(d)}}</small><b>{{d.getDate()}}</b><i/></button></div><div class="selected-day-heading"><div><p class="eyebrow">{{dateKey(selectedDate)===todayKey?t('todayFocus').toUpperCase():'DAILY OVERVIEW'}}</p><h2>{{fullDate(selectedDate)}}</h2></div><span class="day-count">{{Object.keys((plans[currentKey]?.meals)||{}).length}} / 4</span></div><div class="plan-list"><article v-for="(type,i) in types" :key="type" class="plan-row"><div class="plan-time"><span>{{mealTimes[i]}}</span><div class="timeline-dot"/></div><div class="plan-card"><div><small>{{t(type)}}</small><h3>{{plans[currentKey]?.meals[type]?.mealName||t('emptyDay')}}</h3></div><select :value="plans[currentKey]?.meals[type]?.mealId||''" @change="setPlan(selectedDate,type,($event.target as HTMLSelectElement).value)"><option value="">{{t('selectDish')}}</option><option v-for="m in meals" :key="m.id" :value="m.id">{{m.name}}</option></select></div></article></div></section>
      <section v-else class="page"><div class="page-heading compact"><div><p class="eyebrow">{{t('shoppingSubtitle')}}</p><h1>{{t('shopping')}}<span class="heading-period">.</span></h1><p class="muted">{{t('shoppingFromPlan')}}</p></div></div><form class="shopping-add" @submit.prevent="addManualItem"><input v-model="manualInput" :placeholder="t('addShoppingItem')"/><button class="primary-btn" type="submit"><Plus :size="16"/>{{t('add')}}</button></form><div class="shopping-progress"><span>{{generatedIngredients.filter(x=>shoppingChecked[x.key]).length}} / {{generatedIngredients.length}} {{t('completed')}}</span><button class="text-btn" @click="shoppingChecked={};persistShopping()">{{t('resetChecks')}}</button></div><div v-if="generatedIngredients.length" class="shopping-list"><label v-for="item in generatedIngredients" :key="item.key" class="shopping-item" :class="{done:shoppingChecked[item.key]}"><input type="checkbox" :checked="!!shoppingChecked[item.key]" @change="toggleShopping(item.key)"/><span class="shopping-check"><Check :size="13"/></span><span>{{item.name}}</span><button v-if="item.key.startsWith('manual:')" class="icon-btn shopping-remove" type="button" @click.prevent="removeManualItem(item.name)"><X :size="15"/></button></label></div><div v-else class="empty-collection"><ShoppingBasket :size="30"/><h3>{{t('shoppingEmpty')}}</h3><p class="muted">{{t('shoppingEmptyHint')}}</p></div></section>
    </main>
    <div v-if="modal" class="modal-backdrop" @click.self="modal=false"><section class="meal-modal"><div class="modal-header"><div><p class="eyebrow">MEAL LIBRARY</p><h2>{{editing?t('editMeal'):t('addMeal')}}</h2></div><button class="icon-btn" @click="modal=false"><X/></button></div><form @submit.prevent="saveMeal"><label>{{t('mealName')}}<input v-model="form.name" required maxlength="90" autofocus/></label><label>{{t('description')}}<textarea v-model="form.description" rows="3" maxlength="300"/></label><label>{{t('ingredientsHelp')}}<textarea v-model="form.ingredientsText" rows="5" :placeholder="t('ingredientsPlaceholder')"/></label><fieldset><legend>{{t('tags')}}</legend><label v-for="tag in ['carbs','protein','fat']" :key="tag" class="check-label"><input v-model="form.tags" type="checkbox" :value="tag"/><span>{{t(tag)}}</span></label></fieldset><div class="modal-actions"><button type="button" class="secondary-btn" @click="modal=false">{{t('cancel')}}</button><button class="primary-btn" type="submit">{{t('save')}}</button></div></form></section></div>
  </div>
</template>
