"use client";

import Link from "next/link";
import { Code2, ExternalLink, Globe, Link2 } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="py-20 bg-white border-t border-black/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <div className="bg-accent-primary p-1.5 rounded-lg shadow-lg shadow-accent-primary/20">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900">
                Dev<span className="text-accent-primary">Duo</span>
              </span>
            </Link>
            <p className="text-slate-500 text-sm max-w-xs leading-relaxed">
              {t.footer.description}
            </p>
          </div>

          <div>
            <h4 className="text-slate-900 font-bold mb-6 text-sm uppercase tracking-widest">{t.footer.nav_title}</h4>
            <ul className="flex flex-wrap gap-x-6 gap-y-3">
              <li><Link href="#services" className="text-slate-600 hover:text-accent-primary text-sm transition-colors">{t.nav.services}</Link></li>
              <li><Link href="#about" className="text-slate-600 hover:text-accent-primary text-sm transition-colors">{t.nav.about}</Link></li>
              <li><Link href="#portfolio" className="text-slate-600 hover:text-accent-primary text-sm transition-colors">{t.nav.portfolio}</Link></li>
              <li><Link href="#contact" className="text-slate-600 hover:text-accent-primary text-sm transition-colors">{t.nav.contact}</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-black/5 flex flex-col md:flex-row justify-center items-center gap-6 text-center">
          <p className="text-slate-500 text-xs">
            © {new Date().getFullYear()} DevDuo Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
