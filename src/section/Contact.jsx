import { useState } from "react";
import { contactInfo } from "../constants";

// Composant pour les informations de contact
const ContactInfo = ({ icon, label, value, href }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-4 p-4 rounded-xl border border-white/10 bg-white/5 
               hover:bg-white/10 hover:border-orange-400/50 transition-all duration-300 group"
  >
    <span className="text-2xl group-hover:scale-110 transition-transform">
      {icon}
    </span>
    <div className="flex flex-col">
      <span className="text-sm text-slate-400">{label}</span>
      <span className="text-white font-medium">{value}</span>
    </div>
  </a>
);

// Composant pour les champs de formulaire
const FormField = ({
  label,
  id,
  type = "text",
  placeholder,
  required = true,
  rows,
}) => {
  const isTextarea = type === "textarea";
  const InputComponent = isTextarea ? "textarea" : "input";

  return (
    <div className="space-y-1">
      <label htmlFor={id} className="field-label">
        {label} {required && <span className="text-orange-400">*</span>}
      </label>
      <InputComponent
        id={id}
        name={id}
        type={isTextarea ? undefined : type}
        placeholder={placeholder}
        required={required}
        rows={rows}
        autoComplete={id}
        className="field-input"
      />
    </div>
  );
};

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulation d'envoi (à remplacer par votre logique d'envoi réelle)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitStatus("success");
      e.target.reset();
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      // Reset du statut après 3 secondes
      setTimeout(() => setSubmitStatus(null), 3000);
    }
  };

  return (
    <section id="contact" className="py-16 px-6">
      <div className="max-w-5xl mx-auto">
        {/* En-tête */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-orange-400">
            📬 Contactez-moi
          </h2>
          <p className="mt-3 text-slate-400 max-w-xl mx-auto">
            Que ce soit pour un projet web, une collaboration ou une opportunité
            d'alternance, n'hésitez pas à me contacter.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Colonne gauche - Informations de contact */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white mb-4">
              Mes coordonnées
            </h3>

            <div className="space-y-4">
              {contactInfo.map((info) => (
                <ContactInfo key={info.label} {...info} />
              ))}
            </div>

            {/* Message supplémentaire */}
            <div className="mt-8 p-6 rounded-xl bg-gradient-to-br from-orange-900/20 to-slate-800/50 border border-orange-400/20">
              <p className="text-slate-300 text-sm leading-relaxed">
                💡 <strong className="text-orange-400">Disponibilité :</strong>{" "}
                Je suis actuellement à la recherche d'une alternance en
                développement web. Je réponds généralement sous 24-48h.
              </p>
            </div>
          </div>

          {/* Colonne droite - Formulaire */}
          <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
            <h3 className="text-xl font-semibold text-white mb-6">
              Envoyez-moi un message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <FormField
                label="Nom complet"
                id="name"
                placeholder="Albert Camus"
              />

              <FormField
                label="Email"
                id="email"
                type="email"
                placeholder="albert@email.com"
              />

              <FormField
                label="Sujet"
                id="subject"
                placeholder="Proposition de collaboration"
                required={false}
              />

              <FormField
                label="Message"
                id="message"
                type="textarea"
                placeholder="Bonjour, je vous contacte au sujet de..."
                rows={5}
              />

              {/* Bouton d'envoi */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 rounded-xl font-semibold transition-all duration-300
                  ${
                    isSubmitting
                      ? "bg-slate-700 text-slate-400 cursor-not-allowed"
                      : "bg-orange-600 hover:bg-orange-500 text-white hover:shadow-lg hover:shadow-orange-600/30"
                  }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Envoi en cours...
                  </span>
                ) : (
                  "Envoyer le message"
                )}
              </button>

              {/* Messages de statut */}
              {submitStatus === "success" && (
                <div className="p-4 rounded-xl bg-green-900/30 border border-green-500/30 text-green-400 text-center">
                  ✅ Message envoyé avec succès ! Je vous répondrai rapidement.
                </div>
              )}

              {submitStatus === "error" && (
                <div className="p-4 rounded-xl bg-red-900/30 border border-red-500/30 text-red-400 text-center">
                  ❌ Une erreur est survenue. Veuillez réessayer.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
