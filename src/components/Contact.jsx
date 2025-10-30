import { useState } from "react";

export default function Contact({ darkMode }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!name.trim()) newErrors.name = "Ad zorunludur.";
    if (!email.trim()) newErrors.email = "E-posta zorunludur.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      newErrors.email = "Geçerli bir e-posta girin.";
    if (!message.trim() || message.trim().length < 10)
      newErrors.message = "En az 10 karakterlik bir mesaj girin.";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess(false);
    const newErrors = validate();
    if (Object.keys(newErrors).length) {
      setErrors(newErrors);
      return;
    }
    setErrors({});
    setSubmitting(true);

    try {
      // Örnek: gerçek uygulamada burada fetch ile backend'e gönderin
      await new Promise((r) => setTimeout(r, 900));
      setSuccess(true);
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("Form submission error:", error);
      setErrors({ submit: "Gönderim sırasında hata oluştu. Tekrar deneyin." });
    } finally {
      setSubmitting(false);
    }
  };

  const bg = darkMode ? "bg-gray-900" : "bg-gray-100";
  const cardBg = darkMode ? "bg-gray-800" : "bg-white";
  const text = darkMode ? "text-white" : "text-gray-800";
  const inputBase =
    "w-full p-4 rounded-xl border focus:outline-none focus:ring-4 transition-shadow duration-150";

  return (
    <section id="contact" className={`py-20 px-6 ${bg}`}>
      <div className="max-w-2xl mx-auto">
        <div className={`p-8 rounded-2xl shadow-md ${cardBg} ${text}`}>
          <h2 className="text-3xl font-semibold mb-2">İletişime Geçin</h2>
          <p className="text-sm mb-6 text-gray-400">
            Sorularınız veya iş birlikleri için kısa bir mesaj bırakın.
          </p>

          <form onSubmit={handleSubmit} noValidate className="space-y-4">
            <label className="block">
              <span className="sr-only">Adınız</span>
              <input
                aria-label="Adınız"
                aria-invalid={!!errors.name}
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Adınız"
                required
                className={`${inputBase} ${
                  darkMode
                    ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                    : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
                } ${
                  errors.name ? "ring-2 ring-red-400" : "focus:ring-blue-400"
                }`}
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-400">{errors.name}</p>
              )}
            </label>

            <label className="block">
              <span className="sr-only">E-posta</span>
              <input
                aria-label="E-posta"
                aria-invalid={!!errors.email}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="E-posta"
                required
                className={`${inputBase} ${
                  darkMode
                    ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                    : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
                } ${
                  errors.email ? "ring-2 ring-red-400" : "focus:ring-blue-400"
                }`}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-400">{errors.email}</p>
              )}
            </label>

            <label className="block">
              <span className="sr-only">Mesajınız</span>
              <textarea
                aria-label="Mesajınız"
                aria-invalid={!!errors.message}
                rows="6"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Mesajınız (en az 10 karakter)"
                required
                className={`${inputBase} resize-y ${
                  darkMode
                    ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                    : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
                } ${
                  errors.message ? "ring-2 ring-red-400" : "focus:ring-blue-400"
                }`}
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-400">{errors.message}</p>
              )}
            </label>

            {errors.submit && (
              <p className="text-sm text-red-400">{errors.submit}</p>
            )}

            {success && (
              <p className="text-sm text-green-400">
                Mesajınız gönderildi. Teşekkürler!
              </p>
            )}

            <button
              type="submit"
              disabled={submitting}
              className={`w-full py-3 rounded-xl font-semibold text-white shadow-lg transition-all duration-200 ${
                submitting
                  ? "opacity-60 cursor-not-allowed from-blue-400 to-purple-400"
                  : "bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-xl"
              }`}
            >
              {submitting ? "Gönderiliyor..." : "Gönder"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
