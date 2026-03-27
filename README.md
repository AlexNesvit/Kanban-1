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
