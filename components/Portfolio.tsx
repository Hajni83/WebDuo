"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Globe, Link2 } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export default function Portfolio() {
  const { t } = useLanguage();

  const projects = t.portfolio.projects.map((project, i) => ({
    ...project,
    image: i === 0 ? "/portfolio/vibevaults.png" : "/portfolio/tar.png",
    tags: i === 0 ? ["Next.js", "Typescript", "Tailwindcss"] : ["Next.js", "TypeScript", "Tailwind CSS"],
    link: i === 0 ? "https://www.vibe-vaults.com/" : "https://www.tarengineering.hu/",
  }));

  return (
    <section id="portfolio" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-start md:items-center lg:items-end mb-16 gap-8">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-accent-secondary font-bold tracking-widest uppercase text-sm mb-4 md:text-center lg:text-left"
            >
              {t.portfolio.badge}
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-black text-slate-900 md:text-center lg:text-left"
            >
              {t.portfolio.title_part1} <span className="text-slate-400">{t.portfolio.title_accent}</span>
            </motion.h3>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-md text-slate-600 text-lg"
          >
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="group relative"
            >
              <a 
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative aspect-[16/10] overflow-hidden rounded-3xl bg-white border border-black/5 mb-6 group-hover:border-accent-primary/20 transition-all shadow-md group-hover:shadow-xl cursor-pointer"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-wider text-slate-900 border border-white/50">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </a>

              <div className="flex justify-between items-start">
                <div>
                  <span className={`text-xs font-bold uppercase tracking-widest mb-2 block ${i % 2 === 0 ? 'text-accent-primary' : 'text-accent-secondary'}`}>
                    {project.category}
                  </span>
                  <h4 className="text-2xl font-bold mb-3 group-hover:text-accent-primary transition-colors text-slate-900">
                    {project.title}
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed max-w-sm">
                    {project.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a 
            href="https://jozseftar.netlify.app/works"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-accent-primary to-accent-secondary text-white font-black rounded-xl shadow-lg shadow-accent-primary/20 hover:opacity-90 transition-all"
          >
            <span>További munkáink</span>
          </a>
        </div>
      </div>
    </section>
  );
}
