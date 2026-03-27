# Exercice 3 - Initialisation de l'environnement technique

Deux projets distincts ont été créés comme demandé :

- `backend` : Node.js + Express (JavaScript)
- `frontend` : React (Vite)

## Capture d'écran de l'arborescence (vue terminal)

```text
.
├── .gitignore
├── README.md
├── backend
│   ├── package.json
│   └── src
│       ├── app.js
│       ├── controllers
│       │   └── taskController.js
│       ├── middlewares
│       ├── routes
│       │   └── taskRoutes.js
│       ├── services
│       │   └── taskService.js
│       └── server.js
└── frontend
    ├── index.html
    ├── package.json
    ├── src
    │   ├── App.jsx
    │   ├── assets
    │   ├── components
    │   │   └── TaskList.jsx
    │   ├── main.jsx
    │   ├── pages
    │   │   └── HomePage.jsx
    │   ├── services
    │   │   └── taskService.js
    │   └── styles
    │       └── global.css
    └── vite.config.js
```

## Extrait `package.json` - Back-end (`backend/package.json`)

```json
{
  "name": "kanban-backend",
  "version": "1.0.0",
  "main": "src/server.js",
  "type": "module",
  "scripts": {
    "dev": "nodemon src/server.js",
    "start": "node src/server.js"
  },
  "dependencies": {
    "cors": "^2.8.5",
    "dotenv": "^16.4.5",
    "express": "^4.21.2"
  },
  "devDependencies": {
    "nodemon": "^3.1.10"
  }
}
```

## Extrait `package.json` - Front-end (`frontend/package.json`)

```json
{
  "name": "kanban-frontend",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.3.4",
    "vite": "^5.4.11"
  }
}
```

## Lancement

```bash
cd backend && npm install && npm run dev
```

```bash
cd frontend && npm install && npm run dev
```

## Question 4 - Vérification de l'environnement de développement

### 1) Capture - Démarrage du serveur Node.js (Express)

```text
> kanban-backend@1.0.0 start
> node src/server.js

Server listening on http://localhost:5001
```

Note: le port `5000` était déjà occupé dans l'environnement local, donc le test a été effectué sur `5001`.

### 2) Capture - Lancement de l'application React

```text
> kanban-frontend@1.0.0 dev
> vite --port 5174

VITE v5.4.21  ready in 147 ms
➜ Local:   http://localhost:5174/
```

Extrait de réponse HTTP de l'app React (`curl http://localhost:5174/`) :

```html
<!doctype html>
<html lang="en">
  <head>
    <script type="module">import { injectIntoGlobalHook } from "/@react-refresh";
```

### 3) Capture - Test de communication front-end <-> API

Le front-end appelle `/api/tasks` (proxy Vite vers Express) :

```js
// frontend/src/services/taskService.js
fetch('/api/tasks')
```

Résultat du test via le serveur front-end (`curl http://localhost:5174/api/tasks`) :

```json
[{"id":1,"title":"Configurer le projet","status":"done"},{"id":2,"title":"Créer les routes API","status":"in-progress"},{"id":3,"title":"Préparer le front React","status":"todo"}]
```

Vérification directe de l'API (`curl http://localhost:5001/api/health`) :

```json
{"message":"API is running"}
```
