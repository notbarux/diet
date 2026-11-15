# diet — personal meal planner

Applicazione client-side per organizzare i pasti quotidiani e settimanali. Stack: Vue 3, TypeScript, Vite, Firebase Authentication (Google) e Cloud Firestore. Non è previsto un backend applicativo: autenticazione, autorizzazione e persistenza sono gestite direttamente da Firebase.

## Funzionalità

- Login Google e allowlist Firestore per abilitare manualmente un solo account.
- Sezioni **Today**, **Meals** e **Plan**.
- CRUD dei piatti con descrizione, tag nutrizionali e frequenza di scelta (1–5).
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
- `meals/{mealId}`: `{ name, description, tags: string[], rating: number, createdAt, updatedAt }`.
- `plan/{YYYY-MM-DD}`: `{ date: string, meals: { breakfast?: { mealId, mealName }, lunch?: ..., snack?: ..., dinner?: ... } }`.

Il piano conserva anche il nome del piatto come snapshot per mantenere leggibili i piani storici se un piatto viene rinominato o rimosso.

## 4. Avvio e build

```bash
npm run dev
npm run build
npm run preview
```

La build di produzione viene generata in `docs/`. Il file `.env.local` non va committato: configura le stesse variabili `VITE_FIREBASE_*` nell'ambiente in cui esegui la build. Le chiavi Firebase Web sono identificatori pubblici; la protezione dei dati è demandata alle regole Firestore e alla allowlist, non alla segretezza delle chiavi.

## 5. Pubblicazione su GitHub Pages

1. Esegui `npm run build` dalla root: Vite genera `docs/`.
2. Fai commit e push del progetto includendo la cartella `docs/` generata.
3. In GitHub → repository → **Settings → Pages**, seleziona **Deploy from a branch**, scegli il branch desiderato e la cartella `/docs`.
4. Aggiungi il dominio GitHub Pages agli Authorized domains di Firebase Authentication.
5. Se il repository è pubblicato sotto `https://username.github.io/nome-repo/`, il `base: './'` già configurato permette di usare percorsi relativi per gli asset.

Ogni modifica al codice richiede una nuova `npm run build` e il commit della cartella `docs/` aggiornata.

## Note di sicurezza e limiti

- Le regole Firestore sono il controllo effettivo: nascondere le schermate nel frontend non è una misura di sicurezza.
- La regola `allowed()` richiede un utente autenticato e un documento allowlist con `enabled == true` per leggere/scrivere `meals` e `plan`.
- Il client non può modificare `users`. Le regole non consentono accesso anonimo.
- L'app non include API server, funzioni Cloud o servizi backend personalizzati.
- Il campo `rating` rappresenta una valutazione manuale della frequenza di scelta: 1 = scelta rara (verde), 5 = scelta frequente (rosso).
