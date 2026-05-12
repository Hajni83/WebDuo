export type Language = "en" | "hu";

export const translations = {
  en: {
    nav: {
      services: "Services",
      about: "About",
      portfolio: "Portfolio",
      contact: "Contact",
      cta: "Start a Project",
    },
    hero: {
      badge: "Enterprise Grade Development Duo",
      title_part1: "",
      title_gradient: "Enterprise Experience",
      title_part2: " Modern Web Solutions",
      description: "We build digital products that don't just look good, but deliver real business results.",
      cta_primary: "View Our Work",
      cta_secondary: "Talk to Us",
    },
    about: {
      badge: "Our Story",
      title_part1: "Digital Expertise Built on ",
      title_accent: "Partnership",
      description1: "As a development duo, we bring years of enterprise experience to the world of modern web development. Building on our professional foundation in large-scale corporate systems, we now create digital solutions that are simultaneously fast, reliable, and visually sophisticated.",
      quote: "Code is our language, excellence is our standard.",
      subquote: "Bringing decades of enterprise-level discipline to the creative world of modern web development.",
      stats: {
        experience: "Foundations",
        exp_value: "Stable Tech Background",
        collab: "Synergy",
        collab_value: "Coordinated Dev Skills",
        perf: "Quality",
        perf_value: "Superior Web Performance",
        reliability: "Guarantee",
        rel_value: "Solutions Designed for Longevity",
      },
    },
    services: {
      badge: "Capabilities",
      title_part1: "Full-Stack ",
      title_accent: "Excellence",
      items: [
        {
          title: "Enterprise Web Apps",
          desc: "Robust, scalable internal systems and customer-facing platforms built with Next.js and TypeScript.",
        },
        {
          title: "Custom SaaS Development",
          desc: "End-to-end development of subscription-based platforms with seamless API integrations.",
        },
        {
          title: "Premium Landing Pages",
          desc: "High-conversion, pixel-perfect landing pages designed to wow and convert visitors.",
        },
        {
          title: "UI/UX Implementation",
          desc: "Translating complex designs into fluid, responsive, and accessible user interfaces.",
        },
        {
          title: "Mobile-First Design",
          desc: "Fully responsive experiences that feel native on every device and screen size.",
        },
        {
          title: "Performance Audits",
          desc: "Deep-dive optimization for Core Web Vitals, speed, and enterprise-level SEO.",
        },
      ],
    },
    portfolio: {
      badge: "Selected Work",
      title_part1: "Proven ",
      title_accent: "Track Record",
      projects: [
        {
          title: "VibeVaults Feedback Tool",
          category: "SaaS Solution",
          description: "A modern platform that eliminates feedback chaos and accelerates web development workflows.",
        },
        {
          title: "Tar Engineering",
          category: "Industrial Website",
          description: "Modern, multilingual showcase platform for a manufacturing and technology company.",
        },
      ],
    },
    contact: {
      badge: "Get in Touch",
      title_part1: "Let's Build Something ",
      title_accent: "Exceptional",
      description: "Whether you're looking for an enterprise-level system or a premium custom web application, we're here to help you engineer success.",
      email_label: "Email Us",
      form: {
        name: "Name",
        email: "Email",
        subject: "Subject",
        message: "Message",
        choose: "Choose option",
        submit: "Send Message",
        options: ["Enterprise Web App", "Custom SaaS", "Premium Website", "Consultation"],
      },
    },
    footer: {
      description: "Engineering enterprise-grade web solutions and premium digital experiences through technical mastery and artisanal precision.",
      nav_title: "Navigation",
      connect_title: "Connect",
      built_with: "Built with",
      by: "by DevDuo",
    },
  },
  hu: {
    nav: {
      services: "Szolgáltatások",
      about: "Rólunk",
      portfolio: "Referenciák",
      contact: "Kapcsolat",
      cta: "Projekt indítása",
    },
    hero: {
      badge: "Enterprise Szintű Fejlesztő Páros",
      title_part1: "",
      title_gradient: "Enterprise tapasztalat",
      title_part2: " Modern webes megoldások",
      description: "Olyan digitális termékeket építünk, amelyek nemcsak jól néznek ki, hanem üzleti eredményeket is hoznak.",
      cta_primary: "Munkáink megtekintése",
      cta_secondary: "Beszélgessünk",
    },
    about: {
      badge: "Történetünk",
      title_part1: "Partnerségre épített ",
      title_accent: "digitális szakértelem",
      description1: "Fejlesztő párosként több éves enterprise tapasztalatot hozunk a modern webfejlesztés világába. Nagyvállalati rendszereken szerzett szakmai alapjainkra építve ma olyan digitális megoldásokat készítünk, amelyek egyszerre gyorsak, megbízhatóak és vizuálisan kifinomultak.",
      quote: "A kód a nyelvünk, a kiválóság a mércénk.",
      subquote: "Több évtizedes enterprise-szintű fegyelmet hozunk a modern webfejlesztés kreatív világába.",
      stats: {
        experience: "Alapok",
        exp_value: "Stabil Technológiai Háttér",
        collab: "Szinergia",
        collab_value: "Összehangolt Fejlesztői Tudás",
        perf: "Minőség",
        perf_value: "Kimagasló Webes Teljesítmény",
        reliability: "Garancia",
        rel_value: "Hosszú Távra Tervezett Megoldások",
      },
    },
    services: {
      badge: "Képességek",
      title_part1: "Full-Stack ",
      title_accent: "Kiválóság",
      items: [
        {
          title: "Vállalati Webalkalmazások",
          desc: "Robusztus, skálázható belső rendszerek és ügyféloldali platformok Next.js és TypeScript alapokon.",
        },
        {
          title: "Egyedi SaaS Fejlesztés",
          desc: "Előfizetéses platformok teljes körű fejlesztése, zökkenőmentes API integrációkkal.",
        },
        {
          title: "Prémium Landing Oldalak",
          desc: "Magas konverziójú, pixel-tökéletes érkező oldalak, amelyek lenyűgözik a látogatókat.",
        },
        {
          title: "UI/UX Megvalósítás",
          desc: "Komplex tervek átültetése folyékony, reszponzív és akadálymentes felhasználói felületekre.",
        },
        {
          title: "Mobile-First Design",
          desc: "Teljesen reszponzív élmények, amelyek natív érzetet nyújtanak minden eszközön.",
        },
        {
          title: "Teljesítmény Audit",
          desc: "Mélyreható optimalizálás Core Web Vitals, sebesség és enterprise SEO szempontok szerint.",
        },
      ],
    },
    portfolio: {
      badge: "Válogatott Munkáink",
      title_part1: "Bizonyított ",
      title_accent: "Eredmények",
      projects: [
        {
          title: "VibeVaults Feedback Tool",
          category: "SaaS Megoldás",
          description: "Egy modern platform, amely megszünteti a visszajelzési káoszt és felgyorsítja a webfejlesztési folyamatokat.",
        },
        {
          title: "Tar Engineering",
          category: "Ipari Weboldal",
          description: "Gépgyártással és technológiai megoldásokkal foglalkozó vállalat modern, többnyelvű bemutatkozó oldala.",
        },
      ],
    },
    contact: {
      badge: "Kapcsolatfelvétel",
      title_part1: "Építsünk Valami ",
      title_accent: "Kivételeset",
      description: "Akár vállalati szintű rendszert, akár egyedi prémium webalkalmazást keres, mi segítünk a siker megtervezésében.",
      email_label: "Írjon Nekünk",
      form: {
        name: "Név",
        email: "Email",
        subject: "Tárgy",
        message: "Üzenet",
        choose: "Válassz opciót",
        submit: "Üzenet Küldése",
        options: ["Vállalati Webalkalmazás", "Egyedi SaaS", "Prémium Weboldal", "Konzultáció"],
      },
    },
    footer: {
      description: "Vállalati szintű webes megoldások és prémium digitális élmények tervezése technikai tudással és művészi precizitással.",
      nav_title: "Navigáció",
      connect_title: "Kapcsolat",
      built_with: "Készült",
      by: "által - DevDuo",
    },
  },
};
