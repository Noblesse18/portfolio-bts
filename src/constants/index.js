// ===== NAVIGATION =====
export const navLinks = [
  { href: "#hero", label: "Accueil" },
  { href: "#about", label: "À propos" },
  { href: "#skills", label: "Compétences" },
  { href: "#parcours", label: "Parcours" },
  { href: "#projets", label: "Projets" },
  { href: "#veille", label: "Veille" },
  { href: "#contact", label: "Contact" },
];

// ===== COMPÉTENCES =====
export const skills = [
  // Frontend
  { name: "HTML5", icon: "./assets/html5.svg", category: "frontend" },
  { name: "CSS3", icon: "./assets/css3.svg", category: "frontend" },
  { name: "JavaScript", icon: "./assets/javascript.svg", category: "frontend" },
  { name: "TypeScript", icon: "./assets/typescript-official-svgrepo-com.svg", category: "frontend" },
  { name: "React", icon: "./assets/react.svg", category: "frontend" },
  { name: "Next.js", icon: "./assets/next-js-svgrepo-com.svg", category: "frontend" },
  { name: "Tailwind CSS", icon: "./assets/tailwindcss.svg", category: "frontend" },
  { name: "Framer Motion", icon: "./assets/framer.svg", category: "frontend" },
  { name: "Zustand", icon: "./assets/zustand.svg", category: "frontend" },
  { name: "Flutter", icon: "./assets/flutter-svgrepo-com.svg", category: "frontend" },

  // Mobile
  { name: "React Native", icon: "./assets/react.svg", category: "frontend" },
  { name: "Expo", icon: "./assets/expo.svg", category: "frontend" },
  { name: "NativeWind", icon: "./assets/nativewind.svg", category: "frontend" },
  { name: "Axios", icon: "./assets/axios.svg", category: "frontend" },

  // Backend
  { name: "Python", icon: "./assets/python.svg", category: "backend" },
  { name: "PHP", icon: "./assets/php.svg", category: "backend" },
  { name: "Node.js", icon: "./assets/nodejs.svg", category: "backend" },
  { name: "Express.js", icon: "./assets/nodejs.svg", category: "backend" },
  { name: "FastAPI", icon: "./assets/fastapi-svgrepo-com.svg", category: "backend" },
  { name: "MySQL", icon: "./assets/mysql.svg", category: "backend" },
  { name: "MongoDB", icon: "./assets/mongodb.svg", category: "backend" },
  { name: "ClickHouse", icon: "./assets/clickhouse.svg", category: "backend" },
  { name: "Drizzle ORM", icon: "./assets/drizzle.svg", category: "backend" },
  { name: "WebSocket", icon: "./assets/websocket.svg", category: "backend" },
  { name: "JWT", icon: "./assets/jwt.svg", category: "backend" },
  { name: "Stripe", icon: "./assets/stripe.svg", category: "backend" },
  { name: "Swagger", icon: "./assets/swagger.svg", category: "backend" },
  { name: "AppWrite", icon: "./assets/appwrite.svg", category: "backend" },

  // Outils & DevOps
  { name: "Git", icon: "./assets/git.svg", category: "tools" },
  { name: "GitHub", icon: "./assets/github.svg", category: "tools" },
  { name: "VS Code", icon: "./assets/visualstudiocode.svg", category: "tools" },
  { name: "Docker", icon: "./assets/docker.svg", category: "tools" },
  { name: "Linux", icon: "./assets/linux.svg", category: "tools" },
  { name: "VirtualBox", icon: "./assets/virtualbox.svg", category: "tools" },
  { name: "Kubernetes", icon: "./assets/kubernetes-svgrepo-com.svg", category: "tools" },
  { name: "Vite", icon: "./assets/vitejs.svg", category: "tools" },
  { name: "Ansible", icon: "./assets/ansible.svg", category: "tools" },
  { name: "Scaleway", icon: "./assets/scaleway.svg", category: "tools" },
  { name: "Vercel", icon: "./assets/vercel.svg", category: "tools" },
  { name: "Render", icon: "./assets/render.svg", category: "tools" },
  { name: "Azure", icon: "./assets/azure.svg", category: "tools" },
  { name: "AWS", icon: "./assets/aws.svg", category: "tools" },
  { name: "n8n", icon: "./assets/n8n.svg", category: "tools" },
  { name: "Supabase", icon: "./assets/supabase.svg", category: "backend" },
  { name: "Flask", icon: "./assets/flask.svg", category: "backend" },
  { name: "SQLite", icon: "./assets/sqlite.svg", category: "backend" },
];

// Alias pour la compatibilité
export const skill = skills;

// ===== EXPÉRIENCES PROFESSIONNELLES =====
export const jobs = [
  {
    poste: "Développeur Web Freelance",
    entreprise: "Bergens",
    domaine: "E-commerce / Distribution",
    type: "Mission freelance",
    duree: "10 février - 17 février 2026",
    description:
      "Développement d'un site d'administration et de soumission de commandes pour les produits MyCheckr.",
    icon: "🛒",
    technologies: [
      "Python",
      "Flask",
      "MySQL",
      "SQLite",
      "Azure",
      "OneDrive",
      "Scaleway",
      "Ubuntu",
    ],
  },
  {
    poste: "Stage 2ème année BTS SIO",
    entreprise: "Inside Runway",
    domaine: "Mode / Tech — Plateforme de mise en relation stylistes-marques",
    type: "Startup",
    duree: "15 décembre 2025 - 28 février 2026",
    description:
      "Contribution au développement du site web : amélioration des composants frontend et développement de fonctionnalités backend.",
    icon: "👔",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Docker",
      "FastAPI",
      "MongoDB",
      "WebSocket",
      "GitHub",
      "Scaleway",
      "Flutter",
      "Kubernetes",
      "Arch Linux",
      "ClickHouse",
    ],
  },
  {
    poste: "Stage 1ère année BTS SIO",
    entreprise: "SAS Guerfi",
    domaine: "Commerce et services",
    type: "TPE",
    duree: "23 juin - 4 août 2025",
    description:
      "Création d'une application mobile permettant aux touristes de découvrir les musées à proximité grâce à la géolocalisation.",
    icon: "📱",
    technologies: [
      "React Native",
      "Expo",
      "Géolocalisation",
      "API Google Maps",
      "AppWrite",
    ],
  },
];

// ===== PROJETS =====
export const projets = [
  {
    titre: "Portfolio BTS SIO",
    description:
      "Mon portfolio personnel présentant mon parcours, mes compétences et mes projets réalisés durant ma formation BTS SIO option SLAM.",
    categorie: "web",
    icon: "🎨",
    technologies: ["React", "Tailwind CSS", "Vite", "JavaScript"],
    github: "https://github.com/Noblesse18/portfolio-bts",
    demo: "https://noblesse18.github.io/portfolio-bts/",
    missions: [
      "Conception du design responsive et de l'identité visuelle",
      "Développement des animations avec Framer Motion",
      "Intégration d'un flux RSS pour la veille technologique",
      "Déploiement automatisé via GitHub Pages",
    ],
    competencesTechniques: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
    softSkills: ["Créativité", "Autonomie", "Présentation de soi"],
  },
  {
    titre: "Application Musées",
    description:
      "Application mobile permettant aux touristes de découvrir les musées à proximité grâce à la géolocalisation. Développée durant mon stage chez SAS Guerfi.",
    categorie: "mobile",
    icon: "🏛️",
    technologies: ["React Native", "Expo", "Maps API"],
    github: "https://github.com/Noblesse18/Museo",
    missions: [
      "Conception de l'architecture de l'application mobile",
      "Intégration de l'API Google Maps pour la cartographie",
      "Mise en place du système de géolocalisation temps réel",
      "Gestion de l'authentification utilisateur avec AppWrite",
    ],
    competencesTechniques: ["React Native", "Expo", "API REST", "Géolocalisation"],
    softSkills: ["Autonomie", "Adaptation (premier stage)", "Gestion du temps"],
  },
  {
    titre: "Site Inside Runway",
    description:
      "Contribution au développement du site de mise en relation entre stylistes et marques de mode. Amélioration des composants et de l'UX.",
    categorie: "web",
    icon: "👗",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Docker",
      "FastAPI",
      "MongoDB",
      "WebSocket",
      "GitHub",
      "Scaleway",
      "Flutter",
      "Kubernetes",
      "Arch Linux",
      "ClickHouse",
    ],
    site: "https://inside-runway.com/",
    missions: [
      "Amélioration et création de composants frontend (Next.js / TypeScript)",
      "Développement de fonctionnalités backend (FastAPI / MongoDB)",
      { text: "Algorithme de détection de tendances pour la partie Post et Discovery", highlight: true },
      { text: "Intégration de WebSocket pour le temps réel", highlight: true },
      "Travail avec Docker et Kubernetes pour le déploiement",
    ],
    competencesTechniques: ["Next.js", "TypeScript", "FastAPI", "MongoDB", "Docker", "Kubernetes", "Scaleway", "Redis", "ClickHouse"],
    softSkills: ["Travail en équipe", "Communication", "Montée en compétences rapide"],
  },
  {
    titre: "Evencia - Site Web",
    description:
      "Application web fullstack de gestion d'événements avec inscriptions, multi-rôles (participant, organisateur, admin), dashboard organisateur, paiement Stripe et documentation Swagger.",
    categorie: "web",
    icon: "🎫",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Express.js",
      "MySQL",
      "Drizzle ORM",
      "Zustand",
      "Framer Motion",
      "Docker",
      "JWT",
      "Stripe",
      "Swagger",
    ],
    github: "https://github.com/Noblesse18/evencia",
    site: "https://evencia-v2.vercel.app/",
    missions: [
      { text: "Conception de l'architecture fullstack (frontend + API REST)", highlight: true },
      { text: "Mise en place du système multi-rôles (participant, organisateur, admin)", highlight: true },
      "Intégration du paiement en ligne avec Stripe",
      "Documentation de l'API avec Swagger",
    ],
    competencesTechniques: ["Next.js", "Express.js", "MySQL", "Drizzle ORM", "JWT", "Stripe"],
    softSkills: ["Planification", "Conception d'architecture", "Rigueur"],
  },
  {
    titre: "Bergens - Admin & Commandes",
    description:
      "Site d'administration et de soumission de commandes pour les produits MyCheckr. Backend Python/Flask, stockage PDF sur OneDrive, migration Azure et déploiement sur VM Ubuntu (Scaleway).",
    categorie: "web",
    icon: "🛒",
    technologies: [
      "Python",
      "Flask",
      "MySQL",
      "SQLite",
      "Azure",
      "OneDrive",
      "Scaleway",
    ],
    site: "https://admin.bergens.fr/create_commande/",
    missions: [
      "Développement du backend avec Python/Flask",
      "Intégration du stockage de PDF sur OneDrive",
      { text: "Migration de la base de données vers Azure", highlight: true },
      { text: "Déploiement sur VM Ubuntu (Scaleway) avec Nginx", highlight: true },
    ],
    competencesTechniques: ["Python", "Flask", "MySQL", "Azure", "Déploiement Linux"],
    softSkills: ["Autonomie totale", "Relation client directe", "Gestion de projet"],
  },
  {
    titre: "Evencia - App Mobile",
    description:
      "Application mobile React Native connectée à l'API Evencia, permettant de consulter, rechercher et s'inscrire à des événements depuis un smartphone.",
    categorie: "mobile",
    icon: "📅",
    technologies: [
      "React Native",
      "Expo",
      "NativeWind",
      "React Navigation",
      "Axios",
      "AsyncStorage",
    ],
    github: "https://github.com/Noblesse18/evencia",
    missions: [
      "Développement de l'application mobile connectée à l'API existante",
      "Gestion de l'authentification mobile avec AsyncStorage",
      "Création de l'interface avec NativeWind (Tailwind pour React Native)",
      "Navigation multi-écrans avec React Navigation",
    ],
    competencesTechniques: ["React Native", "Expo", "NativeWind", "AsyncStorage"],
    softSkills: ["Réutilisation d'API existante", "Cohérence UX cross-platform"],
  },
];

// ===== INFORMATIONS DE CONTACT =====
export const contactInfo = [
  {
    icon: "📧",
    label: "Email",
    value: "comaravel.narayanasamy@gmail.com",
    href: "mailto:comaravel.narayanasamy@gmail.com",
  },
  {
    icon: "💼",
    label: "LinkedIn",
    value: "linkedin.com/in/narayanasamy-comaravel",
    href: "https://www.linkedin.com/in/narayanasamy-comaravel-28b66232a/",
  },
  {
    icon: "🐙",
    label: "GitHub",
    value: "github.com/Noblesse18",
    href: "https://github.com/Noblesse18",
  },
];
