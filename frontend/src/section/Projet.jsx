import { useState } from "react";
import { projets } from "../constants";

// Filtres disponibles
const FILTERS = [
  { id: "all", label: "Tous", icon: "🎯" },
  { id: "web", label: "Web", icon: "🌐" },
  { id: "mobile", label: "Mobile", icon: "📱" },
  { id: "other", label: "Autres", icon: "🔧" },
];

// Carte de projet
const ProjectCard = ({ projet }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="card group relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image / Placeholder */}
      <div className="relative h-48 rounded-xl overflow-hidden mb-4 bg-gradient-to-br from-slate-800 to-slate-700">
        {projet.image ? (
          <img
            src={projet.image}
            alt={projet.titre}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-6xl opacity-50">{projet.icon || "💻"}</span>
          </div>
        )}

        {/* Overlay au hover */}
        <div
          className={`absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent 
            flex items-end justify-center pb-4 transition-opacity duration-300
            ${isHovered ? "opacity-100" : "opacity-0"}`}
        >
          <div className="flex gap-3">
            {projet.github && (
              <a
                href={projet.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg glass hover:bg-white/20 transition-colors text-sm"
              >
                🐙 GitHub
              </a>
            )}
            {projet.demo && (
              <a
                href={projet.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg bg-orange-500 hover:bg-orange-600 transition-colors text-sm text-white"
              >
                🚀 Démo
              </a>
            )}
          </div>
        </div>

        {/* Badge catégorie */}
        <div className="absolute top-3 right-3 px-3 py-1 rounded-full glass text-xs">
          {projet.categorie === "web" && "🌐 Web"}
          {projet.categorie === "mobile" && "📱 Mobile"}
          {projet.categorie === "other" && "🔧 Autre"}
        </div>
      </div>

      {/* Contenu */}
      <h4 className="text-lg font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
        {projet.titre}
      </h4>

      <p className="text-slate-400 text-sm mb-4 line-clamp-2">
        {projet.description}
      </p>

      {/* Technologies */}
      <div className="flex flex-wrap gap-2">
        {projet.technologies?.map((tech) => (
          <span
            key={tech}
            className="px-2 py-1 text-xs rounded-md bg-orange-500/10 text-orange-300 border border-orange-500/20"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

const Projet = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  // Filtrer les projets
  const filteredProjets =
    activeFilter === "all"
      ? projets
      : projets.filter((p) => p.categorie === activeFilter);

  return (
    <section id="projets" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* En-tête */}
        <div className="text-center mb-12">
          <h2 className="section-title">💼 Mes Projets</h2>
          <p className="mt-6 text-slate-400 max-w-2xl mx-auto">
            Découvrez les projets que j&apos;ai réalisés durant ma formation et
            mes expériences professionnelles.
          </p>
        </div>

        {/* Filtres */}
        <div className="flex justify-center gap-2 mb-12 flex-wrap">
          {FILTERS.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300
                ${
                  activeFilter === filter.id
                    ? "bg-orange-500 text-white shadow-lg shadow-orange-500/30"
                    : "glass text-slate-300 hover:text-white hover:bg-white/10"
                }`}
            >
              <span className="mr-2">{filter.icon}</span>
              {filter.label}
            </button>
          ))}
        </div>

        {/* Grille de projets */}
        {filteredProjets.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjets.map((projet) => (
              <ProjectCard key={projet.titre} projet={projet} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <span className="text-6xl mb-4 block">🔍</span>
            <p className="text-slate-400">
              Aucun projet trouvé dans cette catégorie.
            </p>
          </div>
        )}

        {/* Message */}
        <div className="mt-16 text-center">
          <div className="inline-block p-6 rounded-2xl glass">
            <p className="text-slate-300">
              🚀{" "}
              <span className="text-orange-400 font-semibold">
                Plus de projets à venir
              </span>{" "}
              — Je travaille continuellement sur de nouveaux projets
              passionnants !
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projet;
