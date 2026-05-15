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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass border-black/5 mb-6 md:mb-8"
            >
              <Sparkles className="w-4 h-4 text-accent-primary" />
              <span className="text-xs font-semibold tracking-wider uppercase text-slate-500">
                {t.hero.badge}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1] mb-5 md:mb-6 text-slate-900"
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

          {/* RIGHT — képek */}
          {/* MOBIL + TABLET: egymás mellé, középre igazítva */}
          {/* DESKTOP: egymásra csúsztatva, split layout */}

          {/* Mobil / Tablet nézet (lg alatt) */}
          <div className="flex lg:hidden justify-center items-end gap-4 sm:gap-6 order-2 mt-4 sm:mt-8">
            {/* Dekoratív háttérkör */}
            <div className="absolute left-1/2 -translate-x-1/2 w-[260px] sm:w-[320px] h-[260px] sm:h-[320px] rounded-full bg-gradient-to-br from-slate-100 to-slate-200 opacity-50 pointer-events-none" />

            {/* Hajni — kisebb, bal */}
            <motion.div
             initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="relative w-[160px] sm:w-[210px] md:w-[240px] aspect-[4/5] z-20"
            >
              <div className="w-full h-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl ring-1 ring-black/5">
                <Image
                  src="/avatars/avatar.png"
                  alt="Maró Hajnalka - Frontend Developer"
                  width={240}
                  height={300}
                  quality={95}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </motion.div>

            {/* Jocó — nagyobb, jobb, lejjebb */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="relative w-[160px] sm:w-[210px] md:w-[240px] aspect-[4/5] z-20"
            >
              <div className="w-full h-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl ring-1 ring-black/5">
                <Image
                  src="/avatars/Jocó.png"
                  alt="Tar József - Fullstack Developer"
                  width={240}
                  height={300}
                  quality={95}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </motion.div>
          </div>

          {/* Desktop nézet (lg+): egymásra csúsztatva */}
          <div className="relative hidden lg:flex justify-center items-center h-[540px] order-2">

            {/* Dekoratív háttérkör */}
            <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
              <div className="w-[380px] h-[380px] rounded-full bg-gradient-to-br from-slate-100 to-slate-200 opacity-60" />
            </div>

            {/* Hajni — háttérben, bal fent, kisebb */}
            <motion.div
              initial={{ opacity: 0, x: 40, y: -20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
              className="absolute top-0 left-[-24px] w-[290px] h-[360px] z-10"
            >
              <div className="w-full h-full rounded-3xl overflow-hidden shadow-2xl ring-1 ring-black/5">
                <Image
                  src="/avatars/avatar.png"
                  alt="Maró Hajnalka - Frontend Developer"
                  width={480} 
                  height={600} 
                  quality={95}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </motion.div>

            {/* Jocó — előtérben, jobb lent, nagyobb */}
            <motion.div
              initial={{ opacity: 0, x: -40, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              className="absolute bottom-0 right-4 w-[290px] h-[360px] z-20"
            >
              <div className="w-full h-full rounded-3xl overflow-hidden shadow-2xl ring-1 ring-black/5">
                <Image
                  src="/avatars/Jocó.png"
                  alt="Tar József - Fullstack Developer"
                  width={290}
                  height={360}
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