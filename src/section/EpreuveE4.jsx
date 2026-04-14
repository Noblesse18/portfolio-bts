import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const EpreuveE4 = () => {
  const [showPdf, setShowPdf] = useState(false);

  return (
    <section id="epreuve-e4" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <h2 className="section-title">📋 Épreuve E4</h2>
          <p className="mt-6 text-slate-400 max-w-2xl mx-auto">
            Tableau de synthèse de l&apos;épreuve E4 du BTS SIO SLAM,
            récapitulant les situations professionnelles et compétences
            associées.
          </p>
        </motion.div>

        <motion.div
          className="flex justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeUp}
        >
          <button
            onClick={() => setShowPdf(true)}
            className="btn-primary flex items-center gap-3 text-lg"
          >
            <span>📄</span>
            Voir le tableau de synthèse
          </button>
        </motion.div>

        <AnimatePresence>
          {showPdf && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowPdf(false)}
            >
              <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
              <motion.div
                className="relative max-w-5xl w-full max-h-[90vh] overflow-auto rounded-2xl glass-strong p-2"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3 }}
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
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default EpreuveE4;
