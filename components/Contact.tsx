"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import { useLanguage } from "@/lib/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();

  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error || "Hiba történt. Kérjük, próbáld újra.");
        setStatus("error");
      } else {
        setStatus("success");
        setForm({ name: "", email: "", subject: "", message: "" });
      }
    } catch {
      setErrorMsg("Hálózati hiba. Kérjük, próbáld újra.");
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-accent-secondary font-bold tracking-widest uppercase text-sm mb-4 md:text-center lg:text-left">
              {t.contact.badge}
            </h2>
            <h3 className="text-4xl md:text-5xl font-black mb-8 leading-tight text-slate-900 md:text-center lg:text-left">
              {t.contact.title_part1} <br />
              <span className="text-slate-400">{t.contact.title_accent}</span>
            </h3>
            <p className="text-lg text-slate-600 mb-12 leading-relaxed max-w-md md:text-center lg:text-left md:max-w-none lg:max-w-md">
              {t.contact.description}
            </p>

            <div className="space-y-6">
              {/* Jocó */}
              <div className="flex items-center space-x-4 group">
                <a
                  href="https://www.linkedin.com/in/jozseftar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative flex-shrink-0"
                  title="LinkedIn"
                >
                  <img
                    src="/avatars/Jocó.jpg"
                    alt="Jocó"
                    className="w-16 h-16 rounded-2xl object-cover border-2 border-accent-primary/20 hover:border-accent-primary transition-all shadow-sm"
                  />
                  <span className="absolute -bottom-1.5 -right-1.5 w-6 h-6 bg-[#0A66C2] rounded-full flex items-center justify-center shadow-md">
                    <FaLinkedin className="w-3.5 h-3.5 text-white" size={13} />
                  </span>
                </a>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-accent-primary uppercase tracking-widest mb-1">Írj nekünk</span>
                  <a href="mailto:szurilo@gmail.com" className="text-md font-medium text-slate-900 hover:text-accent-primary transition-colors break-all">szurilo@gmail.com</a>
                </div>
              </div>

              {/* Hajnalka */}
              <div className="flex items-center space-x-4 group">
                <a
                  href="https://www.linkedin.com/in/hajnalka-maro/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative flex-shrink-0"
                  title="LinkedIn"
                >
                  <img
                    src="/avatars/avatar.png"
                    alt="Hajnalka"
                    className="w-16 h-16 rounded-2xl object-cover border-2 border-accent-secondary/20 hover:border-accent-secondary transition-all shadow-sm"
                  />
                  <span className="absolute -bottom-1.5 -right-1.5 w-6 h-6 bg-[#0A66C2] rounded-full flex items-center justify-center shadow-md">
                    <FaLinkedin className="w-3.5 h-3.5 text-white" size={13} />
                  </span>
                </a>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-accent-secondary uppercase tracking-widest mb-1">Írj nekünk</span>
                  <a href="mailto:maro.hajnalka@gmail.com" className="text-md font-medium text-slate-900 hover:text-accent-secondary transition-colors break-all">maro.hajnalka@gmail.com</a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-10 rounded-3xl bg-white border border-black/5 relative overflow-hidden shadow-xl"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent-primary/5 rounded-full blur-3xl" />

            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center py-12 relative z-10"
              >
                <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                <h4 className="text-2xl font-black text-slate-900 mb-2">Elküldve!</h4>
                <p className="text-slate-600 mb-6">Köszönjük az üzeneted! Hamarosan felvesszük veled a kapcsolatot.</p>
                <button
                  onClick={() => setStatus("idle")}
                  className="px-6 py-3 bg-accent-primary text-white font-bold rounded-xl hover:bg-accent-primary/90 transition-colors"
                >
                  Új üzenet küldése
                </button>
              </motion.div>
            ) : (
              <form className="space-y-6 relative z-10" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">{t.contact.form.name}</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:border-accent-primary transition-colors placeholder:text-slate-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">{t.contact.form.email}</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:border-accent-primary transition-colors placeholder:text-slate-400"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">{t.contact.form.subject}</label>
                  <select
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:border-accent-primary transition-colors appearance-none"
                  >
                    <option value="">{t.contact.form.choose}</option>
                    {t.contact.form.options.map((opt) => (
                      <option key={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">{t.contact.form.message}</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:border-accent-primary transition-colors placeholder:text-slate-400 resize-none"
                  />
                </div>

                {status === "error" && (
                  <div className="flex items-center space-x-2 p-3 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full py-4 bg-gradient-to-r from-accent-primary to-accent-secondary text-white font-black rounded-xl flex items-center justify-center space-x-2 hover:opacity-90 transition-all shadow-lg shadow-accent-primary/20 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Küldés...</span>
                    </>
                  ) : (
                    <>
                      <span>{t.contact.form.submit}</span>
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
