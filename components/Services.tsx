"use client";

import { motion } from "framer-motion";
import {
  Layout,
  Database,
  Zap,
  Smartphone,
  Search,
  Layers
} from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export default function Services() {
  const { t } = useLanguage();

  const icons = [Database, Layers, Layout, Zap, Smartphone, Search];

  const services = t.services.items.map((item, i) => ({
    ...item,
    icon: icons[i % icons.length]
  }));

  return (
    <section id="services" className="py-24 bg-white/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent-primary font-bold tracking-widest uppercase text-sm mb-4"
          >
            {t.services.badge}
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-slate-900"
          >
            {t.services.title_part1} <span className="text-slate-400">{t.services.title_accent}</span>
          </motion.h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className={`p-8 rounded-3xl bg-white border border-black/5 shadow-sm transition-all duration-300 group hover:shadow-xl ${i % 2 === 0 ? 'hover:border-accent-primary/30' : 'hover:border-accent-secondary/30'}`}
            >
              <div className={`w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 transition-colors ${i % 2 === 0 ? 'group-hover:bg-accent-primary/10' : 'group-hover:bg-accent-secondary/10'}`}>
                <service.icon className={`w-7 h-7 ${i % 2 === 0 ? 'text-accent-primary' : 'text-accent-secondary'}`} />
              </div>
              <h4 className="text-xl font-bold mb-4 text-slate-900">{service.title}</h4>
              <p className="text-slate-600 leading-relaxed text-sm">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
