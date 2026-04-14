import { motion } from "framer-motion";
import { jobs } from "../constants";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" },
  }),
};

const TimelineItem = ({ job, index, isLast }) => (
  <motion.div
    className="relative flex gap-6 pb-12"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    variants={fadeUp}
    custom={index}
  >
    {!isLast && (
      <div className="absolute left-[19px] top-12 w-0.5 h-full bg-gradient-to-b from-orange-500/50 to-transparent" />
    )}

    <div className="relative z-10 flex-shrink-0">
      <div className="w-10 h-10 rounded-full bg-orange-500/20 border-2 border-orange-500 flex items-center justify-center">
        <span className="text-lg">{job.icon || "💼"}</span>
      </div>
    </div>

    <div className="flex-1 card hover:glow-orange group">
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

      <p className="text-slate-400 leading-relaxed mb-4">{job.description}</p>

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
  </motion.div>
);

const Parcours = () => {
  return (
    <section id="parcours" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <h2 className="section-title">📚 Mon Parcours</h2>
          <p className="mt-6 text-slate-400 max-w-2xl mx-auto">
            Mes expériences professionnelles et stages qui m&apos;ont permis de
            développer mes compétences en entreprise.
          </p>
        </motion.div>

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

        <motion.div
          className="mt-12 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeUp}
        >
          <div className="inline-flex items-center gap-4 p-6 rounded-2xl glass">
            <span className="text-4xl">🎯</span>
            <div className="text-left">
              <p className="text-white font-semibold">
                À la recherche d&apos;une alternance
              </p>
              <p className="text-slate-400 text-sm">
                Disponible pour mars 2026
              </p>
            </div>
            <a href="#contact" className="btn-primary ml-4">
              Me contacter
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Parcours;
