const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* En-tête de section */}
        <div className="text-center mb-16">
          <h2 className="section-title">👤 À propos de moi</h2>
          <p className="mt-6 text-slate-400 max-w-2xl mx-auto">
            Découvrez mon parcours, ma formation et mes aspirations
            professionnelles.
          </p>
        </div>

        {/* Présentation personnelle */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Avatar / Illustration */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Cercle décoratif */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-transparent rounded-full blur-3xl" />

              {/* Avatar placeholder */}
              <div className="relative w-64 h-64 rounded-full glass flex items-center justify-center glow-orange">
                <span className="text-8xl">👨‍💻</span>
              </div>

              {/* Badges flottants */}
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
          </div>

          {/* Texte de présentation */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-white">
              Salut, moi c&apos;est{" "}
              <span className="text-orange-400">Narayanasamy</span> !
            </h3>

            <p className="text-lg text-slate-300 leading-relaxed">
              Étudiant passionné en BTS SIO option SLAM, je me spécialise dans
              le développement d&apos;applications web modernes. Mon objectif
              est de créer des solutions innovantes et performantes.
            </p>

            <p className="text-slate-400 leading-relaxed">
              Actuellement à la recherche d&apos;une alternance, je suis motivé
              à apprendre et à contribuer au sein d&apos;une équipe dynamique.
              Ma curiosité et ma rigueur me poussent à toujours améliorer mes
              compétences.
            </p>

            {/* Stats rapides */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="text-center p-4 rounded-xl glass">
                <div className="text-3xl font-bold text-orange-400">2</div>
                <div className="text-sm text-slate-400">Années BTS</div>
              </div>
              <div className="text-center p-4 rounded-xl glass">
                <div className="text-3xl font-bold text-orange-400">5+</div>
                <div className="text-sm text-slate-400">Projets</div>
              </div>
              <div className="text-center p-4 rounded-xl glass">
                <div className="text-3xl font-bold text-orange-400">2</div>
                <div className="text-sm text-slate-400">Stages</div>
              </div>
            </div>
          </div>
        </div>

        {/* Section BTS SIO */}
        <div className="mt-20">
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

          {/* Cartes SISR / SLAM */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* SISR */}
            <div className="card group hover:border-blue-500/30">
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
            </div>

            {/* SLAM */}
            <div className="card group hover:border-orange-500/30 relative overflow-hidden">
              {/* Badge "Mon option" */}
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
