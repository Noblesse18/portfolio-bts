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
  { name: "React", icon: "./assets/react.svg", category: "frontend" },
  {
    name: "Tailwind CSS",
    icon: "./assets/tailwindcss.svg",
    category: "frontend",
  },

  // Backend
  { name: "PHP", icon: "./assets/php.svg", category: "backend" },
  { name: "Node.js", icon: "./assets/nodejs.svg", category: "backend" },
  { name: "MySQL", icon: "./assets/mysql.svg", category: "backend" },
  { name: "MongoDB", icon: "./assets/mongodb.svg", category: "backend" },

  // Outils & DevOps
  { name: "Git", icon: "./assets/git.svg", category: "tools" },
  { name: "GitHub", icon: "./assets/github.svg", category: "tools" },
  { name: "VS Code", icon: "./assets/visualstudiocode.svg", category: "tools" },
  { name: "Docker", icon: "./assets/docker.svg", category: "tools" },
  { name: "Linux", icon: "./assets/linux.svg", category: "tools" },
  { name: "VirtualBox", icon: "./assets/virtualbox.svg", category: "tools" },
  { name: "Ansible", icon: "./assets/ansible.svg", category: "tools" },
  { name: "Azure", icon: "./assets/azure.svg", category: "tools" },
  { name: "AWS", icon: "./assets/aws.svg", category: "tools" },
];

// Alias pour la compatibilité
export const skill = skills;

// ===== EXPÉRIENCES PROFESSIONNELLES =====
export const jobs = [
  {
    poste: "Stage 2ème année BTS SIO",
    entreprise: "Inside Runway",
    duree: "15 décembre 2025 - 26 janvier 2026",
    description:
      "Création et amélioration des composants du site web de mise en relation de Stylistes et Marques. Travail sur le frontend (React) et backend pour optimiser l'expérience utilisateur.",
    icon: "👔",
    technologies: [
      "React",
      "Node.js",
      "Tailwindcss",
      "API REST",
      "Mongodb",
      "Websocket",
    ],
  },
  {
    poste: "Stage 1ère année BTS SIO",
    entreprise: "SAS Guerfi",
    duree: "23 juin - 4 août 2025",
    description:
      "Création d'une application mobile avec React Native/Expo permettant aux touristes de découvrir les musées à proximité de leur emplacement grâce à la géolocalisation.",
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
    technologies: ["React", "Tailwindcss", "Vite", "Javascript"],
    github: "https://noblesse18.github.io/portfolio-bts/",
    demo: "#",
  },
  {
    titre: "Application Musées",
    description:
      "Application mobile permettant aux touristes de découvrir les musées à proximité grâce à la géolocalisation. Développée durant mon stage chez SAS Guerfi.",
    categorie: "mobile",
    icon: "🏛️",
    technologies: ["React Native", "Expo", "Maps API"],
    github: "https://github.com/",
  },
  {
    titre: "Site Inside Runway",
    description:
      "Contribution au développement du site de mise en relation entre stylistes et marques de mode. Amélioration des composants et de l'UX.",
    categorie: "web",
    icon: "👗",
    technologies: [
      "React",
      "Node.js",
      "tailwindcss",
      "MongoDB",
      "Python",
      "Javascript",
    ],
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
