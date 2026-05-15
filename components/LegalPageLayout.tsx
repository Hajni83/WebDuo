"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import React from "react";

type Section = {
  title: string;
  content?: string[];
  list?: string[];
};

type LegalPageProps = {
  title: string;
  lastUpdated: string;
  sections: Section[];
};

export default function LegalPageLayout({ title, lastUpdated, sections }: LegalPageProps) {
  return (
    <main className="relative min-h-screen bg-white">
      <Navbar />
      
      <div className="pt-32 pb-24 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-black mb-4 text-slate-900">
              {title}
            </h1>
            <p className="text-slate-500 font-medium">
              {lastUpdated}
            </p>
          </div>

          <div className="space-y-12">
            {sections.map((section, index) => (
              <div key={index} className="prose prose-slate max-w-none">
                <h2 className="text-2xl font-bold text-slate-800 mb-4">
                  {section.title}
                </h2>
                {section.content && section.content.map((p, i) => (
                  <p key={i} className="text-slate-600 leading-relaxed text-lg mb-4 last:mb-0">
                    {p.split('<br />').map((line, j) => (
                      <React.Fragment key={j}>
                        {line}
                        {j < p.split('<br />').length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </p>
                ))}
                {section.list && (
                  <ul className="list-disc list-outside ml-5 space-y-2 mt-4">
                    {section.list.map((item, i) => (
                      <li key={i} className="text-slate-600 leading-relaxed text-lg pl-1">
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
      
      {/* Subtle global background noise/grid if needed */}
      <div className="fixed inset-0 pointer-events-none z-[-1] opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
    </main>
  );
}
