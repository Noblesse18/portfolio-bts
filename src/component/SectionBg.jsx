const SectionBg = ({ variant = "default" }) => {
  const configs = {
    default: (
      <>
        <div className="absolute top-1/3 -left-32 w-72 h-72 bg-orange-500/5 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-1/4 -right-32 w-64 h-64 bg-orange-600/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "-3s" }}
        />
      </>
    ),
    dots: (
      <>
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(249,115,22,0.8) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div
          className="absolute top-1/2 -right-20 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "-4s" }}
        />
      </>
    ),
    grid: (
      <>
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(249,115,22,0.4) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(249,115,22,0.4) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute top-1/4 -left-20 w-60 h-60 bg-orange-500/5 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-1/3 -right-16 w-48 h-48 bg-orange-600/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "-2s" }}
        />
      </>
    ),
    glow: (
      <>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-orange-500/20 to-transparent" />
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-1/4 -right-32 w-72 h-72 bg-orange-600/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "-5s" }}
        />
      </>
    ),
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {configs[variant] || configs.default}
    </div>
  );
};

export default SectionBg;
