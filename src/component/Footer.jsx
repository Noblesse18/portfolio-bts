import { contactInfo } from "../constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 px-6 border-t border-white/10">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        {/* Section principale */}
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Logo et description */}
          <div className="space-y-4">
            <a
              href="#hero"
              className="text-2xl font-bold tracking-tight group flex items-center gap-2"
            >
              <span className="text-orange-500 group-hover:scale-110 transition-transform duration-300">
                &lt;
              </span>
              <span className="text-white">CNSAMY</span>
              <span className="text-orange-500 group-hover:scale-110 transition-transform duration-300">
                /&gt;
              </span>
            </a>
            <p className="text-slate-400 text-sm leading-relaxed">
              Étudiant en BTS SIO option SLAM, passionné par le développement
              web et les nouvelles technologies.
            </p>
          </div>

          {/* Navigation rapide */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold">Navigation</h4>
            <nav className="grid grid-cols-2 gap-2">
              {[
                { href: "#hero", label: "Accueil" },
                { href: "#about", label: "À propos" },
                { href: "#skills", label: "Compétences" },
                { href: "#parcours", label: "Parcours" },
                { href: "#projets", label: "Projets" },
                { href: "#veille", label: "Veille" },
                { href: "#contact", label: "Contact" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-slate-400 text-sm hover:text-orange-400 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold">Me contacter</h4>
            <div className="space-y-3">
              {contactInfo.map((info) => (
                <a
                  key={info.label}
                  href={info.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-slate-400 text-sm hover:text-orange-400 transition-colors group"
                >
                  <span className="text-lg group-hover:scale-110 transition-transform">
                    {info.icon}
                  </span>
                  <span>{info.value}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Séparateur */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6" />

        {/* Copyright et liens sociaux */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm text-center md:text-left">
            © {currentYear} Narayanasamy COMARAVEL. Tous droits réservés.
          </p>

          {/* Icônes sociales */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/Noblesse18"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-orange-500/20 hover:border-orange-500/30 transition-all group"
              aria-label="GitHub"
            >
              <span className="text-lg group-hover:scale-110 transition-transform">
                🐙
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/narayanasamy-comaravel-28b66232a/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-orange-500/20 hover:border-orange-500/30 transition-all group"
              aria-label="LinkedIn"
            >
              <span className="text-lg group-hover:scale-110 transition-transform">
                💼
              </span>
            </a>
            <a
              href="mailto:comaravel.narayanasamy@gmail.com"
              className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-orange-500/20 hover:border-orange-500/30 transition-all group"
              aria-label="Email"
            >
              <span className="text-lg group-hover:scale-110 transition-transform">
                📧
              </span>
            </a>
          </div>
        </div>

        {/* Petit message */}
        <p className="text-center text-slate-600 text-xs mt-6">
          Fait avec ❤️ et React + Tailwind CSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;
