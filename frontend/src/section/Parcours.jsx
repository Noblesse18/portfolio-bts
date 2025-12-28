import { jobs } from "../constants";

// Composant Timeline Item
const TimelineItem = ({ job, index, isLast }) => (
  <div className="relative flex gap-6 pb-12">
    {/* Ligne verticale */}
    {!isLast && (
      <div className="absolute left-[19px] top-12 w-0.5 h-full bg-gradient-to-b from-orange-500/50 to-transparent" />
    )}

    {/* Point de la timeline */}
    <div className="relative z-10 flex-shrink-0">
      <div className="w-10 h-10 rounded-full bg-orange-500/20 border-2 border-orange-500 flex items-center justify-center">
        <span className="text-lg">{job.icon || "💼"}</span>
      </div>
    </div>

    {/* Contenu */}
    <div className="flex-1 card hover:glow-orange group">
      {/* En-tête */}
      <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
        <div>
          <h4 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors">
            {job.poste}
          </h4>
          <p className="text-orange-400 font-medium">{job.entreprise}</p>
        </div>
        <span className="px-4 py-1.5 rounded-full glass text-sm text-slate-300">
          📅 {job.duree}
        </span>
      </div>

      {/* Description */}
      <p className="text-slate-400 leading-relaxed mb-4">{job.description}</p>

      {/* Technologies utilisées */}
      {job.technologies && (
        <div className="flex flex-wrap gap-2">
          {job.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs rounded-full bg-white/5 text-slate-300 border border-white/10"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
    </div>
  </div>
);

const Parcours = () => {
  return (
    <section id="parcours" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* En-tête */}
        <div className="text-center mb-16">
          <h2 className="section-title">📚 Mon Parcours</h2>
          <p className="mt-6 text-slate-400 max-w-2xl mx-auto">
            Mes expériences professionnelles et stages qui m&apos;ont permis de
            développer mes compétences en entreprise.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {jobs.map((job, index) => (
            <TimelineItem
              key={job.poste}
              job={job}
              index={index}
              isLast={index === jobs.length - 1}
            />
          ))}
        </div>

        {/* Call to action */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-4 p-6 rounded-2xl glass">
            <span className="text-4xl">🎯</span>
            <div className="text-left">
              <p className="text-white font-semibold">
                À la recherche d&apos;une alternance
              </p>
              <p className="text-slate-400 text-sm">
                Disponible pour septembre 2025
              </p>
            </div>
            <a href="#contact" className="btn-primary ml-4">
              Me contacter
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Parcours;
