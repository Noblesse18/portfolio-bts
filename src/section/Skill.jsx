import { skills } from "../constants";

// Composant pour une carte de compétence
const SkillCard = ({ name, icon }) => (
  <div className="card group flex flex-col items-center p-6 hover:glow-orange">
    <div className="w-16 h-16 rounded-xl bg-white/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
      <img src={icon} alt={name} className="w-10 h-10" />
    </div>
    <h4 className="font-semibold text-white text-center">{name}</h4>
  </div>
);

// Composant pour une catégorie de compétences
const SkillCategory = ({ title, icon, skills: categorySkills, color }) => (
  <div className="space-y-6">
    <div className="flex items-center gap-3">
      <span className="text-2xl">{icon}</span>
      <h3 className="text-xl font-bold text-white">{title}</h3>
      <div
        className={`flex-1 h-px bg-gradient-to-r from-${color}-500/50 to-transparent`}
      />
    </div>
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      {categorySkills.map((skill) => (
        <SkillCard key={skill.name} {...skill} />
      ))}
    </div>
  </div>
);

const Skill = () => {
  // Grouper les skills par catégorie
  const frontendSkills = skills.filter((s) => s.category === "frontend");
  const backendSkills = skills.filter((s) => s.category === "backend");
  const toolsSkills = skills.filter((s) => s.category === "tools");
  const otherSkills = skills.filter(
    (s) => !s.category || s.category === "other"
  );

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* En-tête */}
        <div className="text-center mb-16">
          <h2 className="section-title">⚡ Mes Compétences</h2>
          <p className="mt-6 text-slate-400 max-w-2xl mx-auto">
            Toutes ces connaissances ont été acquises durant mes études en BTS
            SIO, mes projets personnels et mes expériences professionnelles.
          </p>
        </div>

        {/* Catégories de compétences */}
        <div className="space-y-12">
          {frontendSkills.length > 0 && (
            <SkillCategory
              title="Frontend"
              icon="🎨"
              skills={frontendSkills}
              color="orange"
            />
          )}

          {backendSkills.length > 0 && (
            <SkillCategory
              title="Backend"
              icon="⚙️"
              skills={backendSkills}
              color="blue"
            />
          )}

          {toolsSkills.length > 0 && (
            <SkillCategory
              title="Outils & DevOps"
              icon="🛠️"
              skills={toolsSkills}
              color="green"
            />
          )}

          {otherSkills.length > 0 && (
            <SkillCategory
              title="Autres"
              icon="📚"
              skills={otherSkills}
              color="purple"
            />
          )}
        </div>

        {/* Message motivationnel */}
        <div className="mt-16 text-center">
          <div className="inline-block p-6 rounded-2xl glass">
            <p className="text-slate-300">
              💡{" "}
              <span className="text-orange-400 font-semibold">
                Toujours en apprentissage
              </span>{" "}
              — Je continue d&apos;explorer de nouvelles technologies et
              d&apos;améliorer mes compétences chaque jour.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
