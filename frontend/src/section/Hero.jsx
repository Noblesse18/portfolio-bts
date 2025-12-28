import { useEffect, useState } from "react";

// Textes pour l'effet de typing
const ROLES = [
  "Développeur Web",
  "Étudiant BTS SIO",
  "Passionné de Tech",
  "Futur Alternant",
];

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Effet de machine à écrire
  useEffect(() => {
    const role = ROLES[currentRole];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < role.length) {
            setDisplayText(role.substring(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.substring(0, displayText.length - 1));
          } else {
            setIsDeleting(false);
            setCurrentRole((prev) => (prev + 1) % ROLES.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-orange-600/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "-3s" }}
        />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-fade-in-up">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span className="text-sm text-slate-300">
            Disponible pour une alternance
          </span>
        </div>

        {/* Greeting */}
        <p
          className="text-xl text-slate-400 mb-4 animate-fade-in-up"
          style={{ animationDelay: "0.1s" }}
        >
          👋 Bonjour, je suis
        </p>

        {/* Name */}
        <h1
          className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          <span className="text-white">Narayanasamy</span>
          <br />
          <span className="gradient-text">COMARAVEL</span>
        </h1>

        {/* Role with typing effect */}
        <div
          className="h-12 flex items-center justify-center mb-8 animate-fade-in-up"
          style={{ animationDelay: "0.3s" }}
        >
          <span className="text-2xl md:text-3xl text-slate-300">
            {displayText}
            <span className="animate-pulse text-orange-500">|</span>
          </span>
        </div>

        {/* Description */}
        <p
          className="text-lg text-slate-400 max-w-2xl mx-auto mb-10 animate-fade-in-up"
          style={{ animationDelay: "0.4s" }}
        >
          Étudiant en BTS SIO option SLAM, passionné par le développement web et
          les nouvelles technologies. Je crée des applications modernes et
          performantes.
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up"
          style={{ animationDelay: "0.5s" }}
        >
          <button onClick={scrollToContact} className="btn-primary">
            Me contacter
          </button>
          <button onClick={scrollToAbout} className="btn-outline">
            En savoir plus
          </button>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-fade-in-up"
          style={{ animationDelay: "0.8s" }}
        >
          <div className="flex flex-col items-center gap-2 text-slate-500">
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <div className="w-6 h-10 rounded-full border-2 border-slate-600 flex items-start justify-center p-2">
              <div className="w-1 h-2 bg-orange-500 rounded-full animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
