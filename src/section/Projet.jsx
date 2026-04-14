import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projets } from "../constants";

const FILTERS = [
  { id: "all", label: "Tous", icon: "🎯" },
  { id: "web", label: "Web", icon: "🌐" },
  { id: "mobile", label: "Mobile", icon: "📱" },
  { id: "other", label: "Autres", icon: "🔧" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
  }),
};

function getPreviewUrl(projet) {
  const url = projet.site || projet.demo;
  if (!url) return null;
  return `https://s0.wp.com/mshots/v1/${encodeURIComponent(url)}?w=640&h=400`;
}

const ProjectCard = ({ projet, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);
  const previewUrl = projet.image || getPreviewUrl(projet);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="card group relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-48 rounded-xl overflow-hidden mb-4 bg-gradient-to-br from-slate-800 to-slate-700">
        {previewUrl && !imgError ? (
          <>
            {!imgLoaded && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-8 h-8 border-2 border-orange-500/30 border-t-orange-500 rounded-full animate-spin" />
              </div>
            )}
            <img
              src={previewUrl}
              alt={projet.titre}
              onLoad={() => setImgLoaded(true)}
              onError={() => setImgError(true)}
              className={`w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110 ${imgLoaded ? "opacity-100" : "opacity-0"}`}
            />
          </>
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-6xl opacity-50">{projet.icon || "💻"}</span>
          </div>
        )}

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
            {projet.site && (
              <a
                href={projet.site}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg bg-orange-500 hover:bg-orange-600 transition-colors text-sm text-white"
              >
                🌐 Site
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

        <div className="absolute top-3 right-3 px-3 py-1 rounded-full glass text-xs">
          {projet.categorie === "web" && "🌐 Web"}
          {projet.categorie === "mobile" && "📱 Mobile"}
          {projet.categorie === "other" && "🔧 Autre"}
        </div>
      </div>

      <h4 className="text-lg font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
        {projet.titre}
      </h4>

      <p className="text-slate-400 text-sm mb-4 line-clamp-2">
        {projet.description}
      </p>

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
    </motion.div>
  );
};

const Projet = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjets =
    activeFilter === "all"
      ? projets
      : projets.filter((p) => p.categorie === activeFilter);

  return (
    <section id="projets" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <h2 className="section-title">💼 Mes Projets</h2>
          <p className="mt-6 text-slate-400 max-w-2xl mx-auto">
            Découvrez les projets que j&apos;ai réalisés durant ma formation et
            mes expériences professionnelles.
          </p>
        </motion.div>

        <motion.div
          className="flex justify-center gap-2 mb-12 flex-wrap"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeUp}
        >
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
        </motion.div>

        {filteredProjets.length > 0 ? (
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredProjets.map((projet, index) => (
                <ProjectCard key={projet.titre} projet={projet} index={index} />
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <div className="text-center py-20">
            <span className="text-6xl mb-4 block">🔍</span>
            <p className="text-slate-400">
              Aucun projet trouvé dans cette catégorie.
            </p>
          </div>
        )}

        <motion.div
          className="mt-16 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeUp}
        >
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
        </motion.div>
      </div>
    </section>
  );
};

export default Projet;
