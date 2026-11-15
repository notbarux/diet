# diet — personal meal planner

Applicazione client-side per organizzare i pasti quotidiani e settimanali. Stack: Vue 3, TypeScript, Vite, Firebase Authentication (Google) e Cloud Firestore. Non è previsto un backend applicativo: autenticazione, autorizzazione e persistenza sono gestite direttamente da Firebase.

## Funzionalità

- Login Google e allowlist Firestore per abilitare manualmente un solo account.
- Sezioni **Home** (Today e Tomorrow), **Meals**, **Plan** e **Shopping**.
- CRUD dei piatti basato su nome e ingredienti, con quantità in grammi o unità e associazione a più negozi.
- Nella libreria piatti: utilizzo nella settimana corrente e media settimanale storica, calcolata dalla prima settimana in cui il piatto compare.
- Pianificazione per colazione, pranzo, merenda e cena; navigazione settimanale con focus sul giorno selezionato e indicazione del giorno corrente.
- Tema scuro predefinito e tema chiaro; preferenze salvate localmente.
- Inglese predefinito e italiano selezionabile.
- Build Vite in `docs/`, pronta per GitHub Pages.

## Requisiti

- Node.js 20 o superiore (consigliato).
- Un progetto Firebase con Authentication e Cloud Firestore.

## 1. Installazione locale

```bash
npm install
cp .env.example .env.local
```

Apri `.env.local` e inserisci i valori della Firebase Web App (Firebase Console → Project settings → General → Your apps). Le variabili necessarie sono riportate in `.env.example`.

## 2. Configurazione Firebase

1. Crea un progetto in [Firebase Console](https://console.firebase.google.com/).
2. In **Authentication → Sign-in method**, abilita **Google** e configura il supporto richiesto da Firebase.
3. In **Authentication → Settings → Authorized domains**, aggiungi il dominio locale `localhost` e il dominio GitHub Pages previsto (es. `username.github.io`).
4. Crea un database **Cloud Firestore** in modalità produzione.
5. Pubblica le regole contenute in `firestore.rules` (Firestore → Rules). Le regole negano ogni scrittura alla raccolta `users` dal client.

### Abilitare l'unico utente

Dopo il primo accesso Google, l'utente non abilitato vedrà il proprio UID nella schermata di accesso negato. Copia quell'UID e, dalla **Firebase Console → Firestore Database → Data**, crea manualmente:

- Collection: `users`
- Document ID: `<UID_GOOGLE_AUTORIZZATO>`
- Field: `enabled` — Boolean — `true`

Il documento è la allowlist. Per revocare l'accesso imposta `enabled` a `false` o elimina il documento. Il client non può creare, modificare o eliminare documenti in `users`; l'operazione è riservata alla console Firebase (o ad ambienti amministrativi fidati). Non usare email o UID hardcoded nel bundle.

## 3. Schema Firestore

- `users/{uid}`: `{ enabled: boolean }` — gestito manualmente dall'amministratore.
- `meals/{mealId}`: `{ name, ingredients: MealIngredient[], createdAt, updatedAt }`; le proprietà legacy `description` e `tags` non sono più utilizzate e vengono eliminate quando salvi un piatto esistente.
- `plan/{YYYY-MM-DD}`: `{ date: string, meals: { breakfast?: { mealId, mealName }, lunch?: ..., snack?: ..., dinner?: ... } }`.
- `stores/{storeId}`: `{ name: string, createdAt }`.
- `shoppingLists/current`: `{ statuses: Record<string, ShoppingStatus>, storePriorityOrder: string[] }`; l'ordine dei negozi è globale e determina a quale negozio assegnare gli ingredienti disponibili in più posti.
- `stores/{storeId}`: `{ name: string, createdAt }` — shop catalog managed from the ingredient editor.
- `shoppingLists/current`: `{ statuses: Record<string, ShoppingStatus>, storePriorityOrder: string[] }` — shopping statuses and one global shop-priority order shared by all ingredients.

Il piano conserva anche il nome del piatto come snapshot per mantenere leggibili i piani storici se un piatto viene rinominato o rimosso.

## 4. Avvio e build

```bash
npm run dev
npm run build
npm run preview
```

La build di produzione viene generata in `docs/`. Dopo il type-check, `npm run build` incrementa automaticamente la versione patch (ad esempio `1.6.0` → `1.6.1`), aggiorna `package.json` e `package-lock.json` e avvia Vite: la nuova versione viene quindi inclusa anche nell'interfaccia compilata. Se Vite fallisce, i due file di versione vengono ripristinati. Dopo una build riuscita, lo script post-build ripristina `docs/CNAME` al contenuto di `HEAD`, mette in stage tutte le altre modifiche e crea il commit `chore: build for v<versione>`, usando la versione aggiornata. Il commit usa l'identità `notbarux <336620935+notbarux@users.noreply.github.com>`. Controlla le altre modifiche presenti nel working tree prima di lanciare la build.

Il file `.env.local` non va committato: configura le stesse variabili `VITE_FIREBASE_*` nell'ambiente in cui esegui la build. Le chiavi Firebase Web sono identificatori pubblici; la protezione dei dati è demandata alle regole Firestore e alla allowlist, non alla segretezza delle chiavi.

## 5. Pubblicazione su GitHub Pages

1. Esegui `npm run build` dalla root: Vite genera `docs/`.
2. Fai commit e push del progetto includendo la cartella `docs/` generata.
3. In GitHub → repository → **Settings → Pages**, seleziona **Deploy from a branch**, scegli il branch desiderato e la cartella `/docs`.
4. Aggiungi il dominio GitHub Pages agli Authorized domains di Firebase Authentication.
5. Se il repository è pubblicato sotto `https://username.github.io/nome-repo/`, il `base: './'` già configurato permette di usare percorsi relativi per gli asset.

Ogni `npm run build` aggiorna `docs/` e, se il build riesce, committa e pusha automaticamente le modifiche, escluso `docs/CNAME`.

## Note di sicurezza e limiti

- Le regole Firestore sono il controllo effettivo: nascondere le schermate nel frontend non è una misura di sicurezza.
- La regola `allowed()` richiede un utente autenticato e un documento allowlist con `enabled == true` per leggere/scrivere `meals` e `plan`.
- Il client non può modificare `users`. Le regole non consentono accesso anonimo.
- L'app non include API server, funzioni Cloud o servizi backend personalizzati.
- Il campo `rating` rappresenta una valutazione manuale della frequenza di scelta: 1 = scelta rara (verde), 5 = scelta frequente (rosso).

agentic ready
