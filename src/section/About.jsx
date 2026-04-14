import { motion } from "framer-motion";
import { useCountUp } from "../hooks/useCountUp";

const STATS = [
  { value: 2, label: "Années BTS" },
  { value: 5, label: "Projets", suffix: "+" },
  { value: 2, label: "Stages" },
];

const StatCard = ({ value, label, suffix = "" }) => {
  const { count, ref } = useCountUp(value, 1500);
  return (
    <div ref={ref} className="text-center p-4 rounded-xl glass">
      <div className="text-3xl font-bold text-orange-400">
        {count}{suffix}
      </div>
      <div className="text-sm text-slate-400">{label}</div>
    </div>
  );
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" },
  }),
};

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <h2 className="section-title">👤 À propos de moi</h2>
          <p className="mt-6 text-slate-400 max-w-2xl mx-auto">
            Découvrez mon parcours, ma formation et mes aspirations
            professionnelles.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            className="flex justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-transparent rounded-full blur-3xl" />
              <div className="relative w-64 h-64 rounded-full glass flex items-center justify-center glow-orange">
                <span className="text-8xl">👨‍💻</span>
              </div>
              <div className="absolute -top-4 -right-4 px-4 py-2 rounded-full glass text-sm animate-float">
                💻 Full Stack
              </div>
              <div
                className="absolute -bottom-4 -left-4 px-4 py-2 rounded-full glass text-sm animate-float"
                style={{ animationDelay: "-2s" }}
              >
                🎓 BTS SIO
              </div>
            </div>
          </motion.div>

          <div className="space-y-6">
            <motion.h3
              className="text-3xl font-bold text-white"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
            >
              Salut, moi c&apos;est{" "}
              <span className="text-orange-400">Narayanasamy</span> !
            </motion.h3>

            <motion.p
              className="text-lg text-slate-300 leading-relaxed"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              custom={1}
            >
              Étudiant passionné en BTS SIO option SLAM, je me spécialise dans
              le développement d&apos;applications web modernes. Mon objectif
              est de créer des solutions innovantes et performantes.
            </motion.p>

            <motion.p
              className="text-slate-400 leading-relaxed"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              custom={2}
            >
              Actuellement à la recherche d&apos;une alternance, je suis motivé
              à apprendre et à contribuer au sein d&apos;une équipe dynamique.
              Ma curiosité et ma rigueur me poussent à toujours améliorer mes
              compétences.
            </motion.p>

            <motion.div
              className="grid grid-cols-3 gap-4 pt-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              custom={3}
            >
              {STATS.map((stat) => (
                <StatCard key={stat.label} {...stat} />
              ))}
            </motion.div>
          </div>
        </div>

        <motion.div
          className="mt-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-white mb-4">
              🎓 Qu&apos;est-ce que le BTS SIO ?
            </h3>
            <p className="text-slate-400 max-w-3xl mx-auto">
              Le Brevet de Technicien Supérieur aux Services Informatiques aux
              Organisations forme en deux ans aux métiers de
              l&apos;informatique, avec une insertion professionnelle rapide ou
              une poursuite d&apos;études.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              className="card group hover:border-blue-500/30"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-blue-500/10 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
                  🌐
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white">Option SISR</h4>
                  <p className="text-sm text-blue-400">
                    Solutions d&apos;Infrastructure
                  </p>
                </div>
              </div>

              <p className="text-slate-400 mb-6">
                Formation axée sur la conception, l&apos;installation,
                l&apos;administration et la sécurisation des infrastructures
                informatiques.
              </p>

              <div className="space-y-2">
                <p className="text-sm font-semibold text-slate-300">
                  Débouchés :
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Admin Réseaux",
                    "Technicien Infra",
                    "Support IT",
                    "DevOps",
                  ].map((job) => (
                    <span
                      key={job}
                      className="px-3 py-1 text-xs rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20"
                    >
                      {job}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              className="card group hover:border-orange-500/30 relative overflow-hidden"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              custom={1}
            >
              <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 text-xs font-semibold border border-orange-500/30">
                ⭐ Mon option
              </div>

              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-orange-500/10 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
                  💻
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white">Option SLAM</h4>
                  <p className="text-sm text-orange-400">
                    Solutions Logicielles
                  </p>
                </div>
              </div>

              <p className="text-slate-400 mb-6">
                Formation orientée développement d&apos;applications web,
                mobiles et métiers, gestion de bases de données et maintenance
                logicielle.
              </p>

              <div className="space-y-2">
                <p className="text-sm font-semibold text-slate-300">
                  Débouchés :
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Développeur Web",
                    "Développeur Mobile",
                    "Analyste",
                    "Full Stack",
                  ].map((job) => (
                    <span
                      key={job}
                      className="px-3 py-1 text-xs rounded-full bg-orange-500/10 text-orange-300 border border-orange-500/20"
                    >
                      {job}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
