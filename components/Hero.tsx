"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, Sparkles } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import Image from "next/image";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-12 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] glow-effect opacity-50 animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] glow-effect opacity-30 animate-pulse delay-700" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* LEFT — szöveg + CTA */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left order-1">


            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl font-black tracking-tight leading-[1.1] mb-5 md:mb-6 text-slate-900"
            >
              {t.hero.title_part1}{" "}
              <span className="text-gradient">{t.hero.title_gradient}</span>{" "}
              {t.hero.title_part2}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-slate-600 mb-8 md:mb-10 leading-relaxed max-w-lg"
            >
              {t.hero.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-3 sm:space-y-0 sm:space-x-4 w-full"
            >
              <a
                href="#portfolio"
                className="group w-full sm:w-auto px-7 py-4 bg-slate-900 text-white font-bold rounded-2xl flex items-center justify-center space-x-2 hover:bg-accent-primary transition-all duration-300 shadow-xl shadow-accent-primary/20"
              >
                <span>{t.hero.cta_primary}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="group w-full sm:w-auto px-7 py-4 glass border-black/5 font-bold rounded-2xl flex items-center justify-center space-x-2 hover:bg-slate-200 transition-all duration-300 text-slate-700"
              >
                <span>{t.hero.cta_secondary}</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>

          {/* RIGHT — képek (minden nézetben reszponzív, egymás mellett, nincs átfedés) */}
          <div className="relative flex justify-center items-end gap-4 sm:gap-6 lg:gap-8 order-2 mt-8 lg:mt-0 w-full z-10">
            {/* Dekoratív háttérkör */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[260px] sm:w-[320px] lg:w-[420px] h-[260px] sm:h-[320px] lg:h-[420px] rounded-full bg-gradient-to-br from-slate-100 to-slate-200 opacity-50 pointer-events-none z-0" />

            {/* Hajni — bal oldali kép */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="relative w-[140px] sm:w-[180px] md:w-[220px] lg:w-[240px] xl:w-[280px] aspect-[4/5] z-10 hover:scale-105 transition-transform duration-300 mb-6 sm:mb-8 md:mb-10"
            >
              <div className="w-full h-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl ring-4 ring-white hover:ring-accent-primary transition-all duration-300">
                <Image
                  src="/avatars/avatar.png"
                  alt="Maró Hajnalka - Frontend Developer"
                  width={350}
                  height={437}
                  quality={95}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </motion.div>

            {/* Jocó — jobb oldali kép */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55 }}
              className="relative w-[140px] sm:w-[180px] md:w-[220px] lg:w-[240px] xl:w-[280px] aspect-[4/5] z-10 hover:scale-105 transition-transform duration-300"
            >
              <div className="w-full h-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl ring-4 ring-white hover:ring-accent-secondary transition-all duration-300">
                <Image
                  src="/avatars/Jocó.png"
                  alt="Tar József - Fullstack Developer"
                  width={350}
                  height={437}
                  quality={95}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}