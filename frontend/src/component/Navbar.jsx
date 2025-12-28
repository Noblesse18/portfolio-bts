import { useState, useEffect } from "react";

const NAV_ITEMS = [
  { href: "#hero", label: "Accueil", icon: "🏠" },
  { href: "#about", label: "À propos", icon: "👤" },
  { href: "#skills", label: "Compétences", icon: "⚡" },
  { href: "#parcours", label: "Parcours", icon: "📚" },
  { href: "#projets", label: "Projets", icon: "💼" },
  { href: "#veille", label: "Veille", icon: "📰" },
  { href: "#contact", label: "Contact", icon: "✉️" },
];

const NavLink = ({ href, children, onClick, isActive }) => (
  <a
    href={href}
    onClick={onClick}
    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
      ${
        isActive
          ? "bg-orange-500 text-white shadow-lg shadow-orange-500/30"
          : "text-slate-300 hover:text-white hover:bg-white/10"
      }`}
  >
    {children}
  </a>
);

const MobileNavLink = ({ href, label, icon, onClick, isActive }) => (
  <a
    href={href}
    onClick={onClick}
    className={`flex items-center gap-3 px-6 py-3 rounded-xl transition-all duration-300 w-full
      ${
        isActive
          ? "bg-orange-500/20 text-orange-400 border border-orange-500/30"
          : "text-slate-300 hover:bg-white/5 hover:text-white"
      }`}
  >
    <span className="text-xl">{icon}</span>
    <span className="font-medium">{label}</span>
  </a>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#hero");

  // Effet de scroll pour le background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Détection de la section active
      const sections = NAV_ITEMS.map((item) => item.href.substring(1));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(`#${section}`);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500
          ${
            scrolled
              ? "glass-strong py-3 shadow-lg shadow-black/20"
              : "bg-transparent py-5"
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
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

          {/* Navigation Desktop */}
          <nav className="hidden lg:flex items-center gap-1 p-1 rounded-full glass">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.href}
                href={item.href}
                isActive={activeSection === item.href}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Bouton burger (mobile) */}
          <button
            className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-xl glass"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
          >
            <div className="flex flex-col justify-center items-center gap-1.5">
              <span
                className={`block w-5 h-0.5 bg-white transition-all duration-300
                  ${isOpen ? "rotate-45 translate-y-2" : ""}`}
              />
              <span
                className={`block w-5 h-0.5 bg-white transition-all duration-300
                  ${isOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block w-5 h-0.5 bg-white transition-all duration-300
                  ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
              />
            </div>
          </button>
        </div>
      </header>

      {/* Menu Mobile Overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500
          ${isOpen ? "visible opacity-100" : "invisible opacity-0"}`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={closeMenu}
        />

        {/* Menu Panel */}
        <nav
          className={`absolute right-0 top-0 h-full w-72 glass-strong p-6 pt-24 
            transition-transform duration-500 ease-out
            ${isOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="flex flex-col gap-2">
            {NAV_ITEMS.map((item, index) => (
              <div
                key={item.href}
                className={`transition-all duration-300 ${
                  isOpen
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-8"
                }`}
                style={{ transitionDelay: isOpen ? `${index * 50}ms` : "0ms" }}
              >
                <MobileNavLink
                  {...item}
                  onClick={closeMenu}
                  isActive={activeSection === item.href}
                />
              </div>
            ))}
          </div>

          {/* Social links dans le menu mobile */}
          <div className="absolute bottom-8 left-6 right-6">
            <div className="flex justify-center gap-4 pt-6 border-t border-white/10">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-orange-500/20 transition-colors"
              >
                🐙
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-orange-500/20 transition-colors"
              >
                💼
              </a>
              <a
                href="mailto:contact@exemple.com"
                className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-orange-500/20 transition-colors"
              >
                📧
              </a>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
