"use client";

import { motion } from "framer-motion";
import { Award, Code2, Users2, Zap } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  const stats = [
    { icon: Award, label: t.about.stats.experience, value: t.about.stats.exp_value },
    { icon: Users2, label: t.about.stats.collab, value: t.about.stats.collab_value },
    { icon: Zap, label: t.about.stats.perf, value: t.about.stats.perf_value },
    { icon: Code2, label: t.about.stats.reliability, value: t.about.stats.rel_value },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-accent-secondary font-bold tracking-widest uppercase text-sm mb-4 md:text-center lg:text-left">
              {t.about.badge}
            </p>
            <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight text-slate-900 md:text-center lg:text-left">
              {t.about.title_part1} <br />
              <span className="text-slate-400">{t.about.title_accent}</span>
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed md:text-center lg:text-left">
              {t.about.description1}
            </p>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="p-4 sm:p-6 rounded-2xl bg-white border border-slate-100 hover:border-accent-primary/30 transition-all duration-300 shadow-sm hover:shadow-xl group relative overflow-hidden min-w-0"
                >
                  <div className="absolute top-0 left-0 w-1 h-0 bg-accent-primary group-hover:h-full transition-all duration-500" />
                  <stat.icon className={`w-5 h-5 sm:w-6 sm:h-6 mb-2 sm:mb-3 ${i % 2 === 0 ? 'text-accent-primary' : 'text-accent-secondary'} group-hover:scale-110 transition-transform`} />
                  <div className="text-base sm:text-2xl font-bold text-slate-900 mb-1 break-words leading-tight">{stat.value}</div>
                  <div className="text-[10px] sm:text-xs text-slate-500 uppercase tracking-widest font-medium leading-tight">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square max-h-[420px] lg:max-h-none rounded-3xl overflow-hidden bg-white border border-black/5 shadow-inner relative z-10 p-8 flex flex-col justify-center items-center text-center group">
              {/* Running border animation */}
              <div className="absolute top-0 left-0 w-0 h-[2px] bg-accent-primary group-hover:w-full transition-all duration-300 ease-in-out" />
              <div className="absolute top-0 right-0 w-[2px] h-0 bg-accent-primary group-hover:h-full transition-all duration-300 delay-300 ease-in-out" />
              <div className="absolute bottom-0 right-0 w-0 h-[2px] bg-accent-primary group-hover:w-full transition-all duration-300 delay-600 ease-in-out" />
              <div className="absolute bottom-0 left-0 w-[2px] h-0 bg-accent-primary group-hover:h-full transition-all duration-300 delay-900 ease-in-out" />

              <div className="w-24 h-24 bg-gradient-to-br from-accent-primary to-accent-secondary rounded-full blur-3xl opacity-10 absolute top-10 left-10" />
              
              <h4 className="text-2xl font-bold mb-4 italic text-slate-800">"{t.about.quote}"</h4>
              <div className="w-12 h-1 bg-accent-primary mb-6 group-hover:w-24 transition-all duration-500" />
              <p className="text-slate-600 max-w-sm">
                {t.about.subquote}
              </p>
            </div>

            {/* Decorative elements */}
            <div className="hidden lg:block absolute -top-6 -right-6 w-32 h-32 bg-white border border-black/5 rounded-2xl -z-0 rotate-12 shadow-sm" />
            <div className="hidden lg:block absolute -bottom-8 -left-8 w-48 h-48 bg-white border border-black/5 rounded-full -z-0 opacity-50 shadow-sm" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
