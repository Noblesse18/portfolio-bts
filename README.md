# 🎓 Portfolio BTS SIO - Narayanasamy COMARAVEL

![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.3-646CFF?style=for-the-badge&logo=vite&logoColor=white)

Portfolio personnel présentant mon parcours, mes compétences et mes projets réalisés durant ma formation **BTS SIO option SLAM**.

## 🌐 Démo

➡️ [Voir le portfolio en ligne](https://votre-portfolio.vercel.app)

## 📸 Aperçu

Le portfolio comprend les sections suivantes :

- **Hero** - Présentation avec effet de machine à écrire
- **À propos** - Présentation personnelle et du BTS SIO
- **Compétences** - Technologies maîtrisées (Frontend, Backend, Outils)
- **Parcours** - Timeline des expériences professionnelles
- **Projets** - Galerie de projets avec filtres
- **Veille Technologique** - Flux RSS en direct (IT-Connect, Korben)
- **Contact** - Formulaire et coordonnées

## 🚀 Installation

### Prérequis

- [Node.js](https://nodejs.org/) (v18+)
- npm ou yarn

### Étapes

1. **Cloner le repository**

   ```bash
   git clone https://github.com/Noblesse18/portfolio-bts.git
   cd portfolio-bts
   ```

2. **Installer les dépendances**

   ```bash
   cd frontend
   npm install
   ```

3. **Lancer en développement**

   ```bash
   npm run dev
   ```

4. **Ouvrir dans le navigateur**
   ```
   http://localhost:5173
   ```

## 📦 Build pour la production

```bash
cd frontend
npm run build
```

Les fichiers de production seront générés dans le dossier `dist/`.

## 🌍 Déploiement sur Vercel

1. Connectez votre repository GitHub à [Vercel](https://vercel.com)
2. Configurez le projet :
   - **Root Directory** : `frontend`
   - **Framework** : Vite
   - **Build Command** : `npm run build`
   - **Output Directory** : `dist`
3. Déployez !

## 🛠️ Technologies utilisées

### Frontend

- **React 19** - Bibliothèque UI
- **Vite** - Build tool ultra-rapide
- **Tailwind CSS 4** - Framework CSS utility-first
- **tailwind-merge** - Gestion des classes CSS

### Fonctionnalités

- ✨ Design moderne avec effets glassmorphism
- 🎨 Animations CSS personnalisées
- 📱 Responsive design (mobile-first)
- 🌙 Thème sombre élégant
- 📰 Veille technologique via RSS (proxy rss2json)
- ⚡ Performance optimisée

## 📁 Structure du projet

```
portfolio-bts/
├── frontend/
│   ├── src/
│   │   ├── component/      # Composants réutilisables
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── Marquee.jsx
│   │   ├── section/        # Sections de la page
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Skill.jsx
│   │   │   ├── Parcours.jsx
│   │   │   ├── Projet.jsx
│   │   │   ├── Veille.jsx
│   │   │   └── Contact.jsx
│   │   ├── constants/      # Données statiques
│   │   ├── public/         # Assets (images, icônes)
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── vercel.json
│   └── package.json
├── start.sh                # Script de lancement (Bash)
├── start.bat               # Script de lancement (Windows)
└── README.md
```

## ✏️ Personnalisation

### Modifier les informations personnelles

Éditez le fichier `frontend/src/constants/index.js` pour :

- Vos compétences
- Vos expériences professionnelles
- Vos projets
- Vos coordonnées

### Modifier le style

- Couleurs et animations : `frontend/src/index.css`
- Variables CSS : `:root` dans `index.css`

## 📄 Licence

Ce projet est sous licence MIT. Vous êtes libre de l'utiliser et de le modifier.

## 👤 Auteur

**Narayanasamy COMARAVEL**

- 📧 Email : [comaravel.narayanasamy@gmail.com](mailto:comaravel.narayanasamy@gmail.com)
- 💼 LinkedIn : [narayanasamy-comaravel](https://www.linkedin.com/in/narayanasamy-comaravel-28b66232a/)
- 🐙 GitHub : [Noblesse18](https://github.com/Noblesse18)

---

