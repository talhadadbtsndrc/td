# Site Web - Taif ALHADAD

Site web de présentation des travaux dirigés Excel, converti en React avec Tailwind CSS.

## 🚀 Installation

1. Installer les dépendances :
```bash
npm install
```

## 📦 Dépendances

- **React** : Framework JavaScript pour l'interface utilisateur
- **React Router DOM** : Gestion de la navigation
- **Tailwind CSS** : Framework CSS utilitaire
- **Vite** : Outil de build moderne et rapide

## 🏃 Développement

Lancer le serveur de développement :
```bash
npm run dev
```

Le site sera accessible sur `http://localhost:5173`

## 🏗️ Build

Créer une version de production :
```bash
npm run build
```

## 👀 Prévisualisation

Prévisualiser la version de production :
```bash
npm run preview
```

## 📁 Structure du projet

```
src/
├── components/      # Composants réutilisables
│   └── Navbar.jsx
├── contexts/        # Contextes React
│   └── DarkModeContext.jsx
├── pages/          # Pages de l'application
│   ├── Home.jsx
│   ├── Sommaire.jsx
│   ├── Projets.jsx
│   └── APropos.jsx
├── App.jsx         # Composant principal
├── main.jsx        # Point d'entrée
└── index.css       # Styles Tailwind
```

## ✨ Fonctionnalités

- ✅ Navigation entre les pages avec React Router
- ✅ Mode sombre/clair avec persistance dans localStorage
- ✅ Design responsive avec Tailwind CSS
- ✅ Intégration des Google Sheets
- ✅ Animations et transitions fluides
