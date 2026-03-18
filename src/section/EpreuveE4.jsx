import { useState } from "react";

const EpreuveE4 = () => {
  const [showPdf, setShowPdf] = useState(false);

  return (
    <section id="epreuve-e4" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-title">📋 Épreuve E4</h2>
          <p className="mt-6 text-slate-400 max-w-2xl mx-auto">
            Tableau de synthèse de l&apos;épreuve E4 du BTS SIO SLAM,
            récapitulant les situations professionnelles et compétences
            associées.
          </p>
        </div>

        <div className="flex justify-center">
          <button
            onClick={() => setShowPdf(true)}
            className="btn-primary flex items-center gap-3 text-lg"
          >
            <span>📄</span>
            Voir le tableau de synthèse
          </button>
        </div>

        {showPdf && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={() => setShowPdf(false)}
          >
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
            <div
              className="relative max-w-5xl w-full max-h-[90vh] overflow-auto rounded-2xl glass-strong p-2"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowPdf(false)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-slate-800 border border-white/20 flex items-center justify-center text-white hover:bg-orange-500 transition-colors"
              >
                ✕
              </button>
              <embed
                src="./e4/Tableau-synthese-comaravel.pdf"
                type="application/pdf"
                className="w-full h-[80vh] rounded-xl"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default EpreuveE4;
