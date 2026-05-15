export type Language = "en" | "hu";

export const translations = {
  en: {
    nav: {
      services: "Services",
      about: "About",
      portfolio: "Portfolio",
      contact: "Contact",
      cta: "Start a Project",
      privacy_policy: "Privacy Policy",
      terms_of_service: "Terms of Service",
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
      description1: "As a development duo, we bring years of experience in large and small companies to the world of modern web development. Building on our diverse professional foundations, we create digital solutions that are fast, reliable, and visually sophisticated.",
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
    terms_of_service: {
      title: "Terms of Service",
      last_updated: "Last updated: May 15, 2026",
      sections: [
        {
          title: "1. Acceptance of Terms",
          content: ["By using our website, you agree to these Terms of Service."]
        },
        {
          title: "2. Purpose of the Website",
          content: ["DEV DUO presents web development, design, and digital services."]
        },
        {
          title: "3. Intellectual Property",
          content: ["All content on the website, including texts, graphics, logos, and source code, is the property of DEV DUO."]
        },
        {
          title: "4. User Obligations",
          content: ["The user agrees not to:"],
          list: [
            "Use the website for illegal purposes",
            "Attempt to gain unauthorized access",
            "Distribute malicious software",
            "Copy or distribute the content on the site without permission"
          ]
        },
        {
          title: "5. Disclaimer of Warranties",
          content: ["The information on the website is for informational purposes. We do not guarantee its accuracy or completeness."]
        },
        {
          title: "6. Limitation of Liability",
          content: ["DEV DUO is not liable for any direct or indirect damages resulting from the use of the website."]
        },
        {
          title: "7. External Links",
          content: ["The website may contain external links for which we are not responsible."]
        },
        {
          title: "8. Modification of Terms",
          content: ["We reserve the right to modify the terms without prior notice."]
        },
        {
          title: "9. Governing Law",
          content: ["These terms are governed by the laws of Hungary and the European Union."]
        },
        {
          title: "10. Contact",
          content: ["For questions: maro.hajnalka@gmail.com, szurilo@gmail.com"]
        }
      ]
    },
    privacy_policy: {
      title: "Privacy Policy",
      last_updated: "Last updated: May 15, 2026",
      sections: [
        {
          title: "1. Introduction",
          content: ["DEV DUO is committed to protecting your personal data in compliance with the GDPR and applicable data protection laws."]
        },
        {
          title: "2. Data Controller Information",
          content: ["Service name: DEV DUO<br />Operator: Maró Hajnalka, Tar József<br />Contact: maro.hajnalka@gmail.com, szurilo@gmail.com <br />Location: European Union (Hungary)"]
        },
        {
          title: "3. Scope of Managed Data",
          list: [
            "Name",
            "Email address",
            "Message provided via the contact form",
            "IP address and browser data",
            "Analytics and usage data"
          ]
        },
        {
          title: "4. Purpose of Data Processing",
          list: [
            "Communication",
            "Providing services",
            "Website development and optimization",
            "Security purposes",
            "Fulfillment of legal obligations"
          ]
        },
        {
          title: "5. Legal Basis for Processing",
          list: [
            "Consent of the data subject",
            "Legitimate interest",
            "Legal obligation",
            "Contract fulfillment or offering"
          ]
        },
        {
          title: "6. Cookies",
          content: [
            "The website may use cookies to ensure proper operation and improve the user experience.",
            "Cookies can be disabled in the browser settings."
          ]
        },
        {
          title: "7. Third-Party Service Providers",
          content: ["Certain services may be provided by external partners, such as hosting, analytics, or email services."]
        },
        {
          title: "8. Data Retention Period",
          content: ["We only store data for the necessary time or as required by law."]
        },
        {
          title: "9. Rights of Data Subjects",
          list: [
            "Access to personal data",
            "Request data correction",
            "Request data deletion",
            "Restriction or prohibition of data processing",
            "Data portability",
            "Withdrawal of consent",
            "Lodging a complaint with the authority"
          ]
        },
        {
          title: "10. Data Security",
          content: ["We apply appropriate technical and organizational measures to protect your data."]
        },
        {
          title: "11. Contact",
          content: ["For questions: maro.hajnalka@gmail.com, szurilo@gmail.com"]
        }
      ]
    }
  },
  hu: {
    nav: {
      services: "Szolgáltatások",
      about: "Rólunk",
      portfolio: "Referenciák",
      contact: "Kapcsolat",
      cta: "Projekt indítása",
      privacy_policy: "Adatvédelmi tájékoztató",
      terms_of_service: "Általános Szerződési Feltételek",
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
      description1: "Fejlesztő párosként több éves nagy- és kisvállalati tapasztalatot hozunk a modern webfejlesztés világába. Sokrétű szakmai alapjainkra építve ma olyan digitális megoldásokat készítünk, amelyek egyszerre gyorsak, megbízhatóak és vizuálisan kifinomultak.",
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
          desc: "Magas konverziójú, pixel-pontos landing oldalak, amelyek lenyűgözik a látogatókat.",
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
          description: "Gépgyártással és technológiai megoldásokkal foglalkozó vállalat modern, többnyelvű, bemutatkozó oldala.",
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
        options: ["Vállalati Webalkalmazás", "Egyedi SaaS", "Prémium Weboldal", "Konzultáció", "Egyéb"],
      },
    },
    footer: {
      description: "Vállalati szintű webes megoldások és prémium digitális élmények tervezése technikai tudással és művészi precizitással.",
      nav_title: "Navigáció",
      connect_title: "Kapcsolat",
      built_with: "Készült",
      by: "által - DevDuo",
    },
    terms_of_service: {
      title: "Általános Szerződési Feltételek",
      last_updated: "Utolsó frissítés: 2026. május 15.",
      sections: [
        {
          title: "1. A feltételek elfogadása",
          content: ["A weboldal használatával Ön elfogadja a jelen Általános Szerződési Feltételeket."]
        },
        {
          title: "2. A weboldal célja",
          content: ["A DEV DUO webfejlesztési, design és digitális szolgáltatásokat mutat be."]
        },
        {
          title: "3. Szellemi tulajdon",
          content: ["A weboldalon található minden tartalom, beleértve a szövegeket, grafikákat, logókat és forráskódot, a DEV DUO tulajdonát képezi."]
        },
        {
          title: "4. Felhasználói kötelezettségek",
          content: ["A felhasználó vállalja, hogy nem:"],
          list: [
            "Használja a weboldalt jogellenes célokra",
            "Kísérel meg jogosulatlan hozzáférést szerezni",
            "Terjeszt rosszindulatú szoftvereket",
            "Másolja vagy terjeszti az oldalon található tartalmat engedély nélkül"
          ]
        },
        {
          title: "5. Felelősség kizárása",
          content: ["A weboldalon található információk tájékoztató jellegűek. Nem vállalunk garanciát azok pontosságára vagy teljességére."]
        },
        {
          title: "6. Felelősség korlátozása",
          content: ["A DEV DUO nem felelős semmilyen közvetlen vagy közvetett kárért, amely a weboldal használatából ered."]
        },
        {
          title: "7. Külső hivatkozások",
          content: ["A weboldal külső linkeket tartalmazhat, amelyek tartalmáért nem vállalunk felelősséget."]
        },
        {
          title: "8. Feltételek módosítása",
          content: ["Fenntartjuk a jogot a feltételek előzetes értesítés nélküli módosítására."]
        },
        {
          title: "9. Irányadó jog",
          content: ["A jelen feltételekre Magyarország és az Európai Unió jogszabályai az irányadók."]
        },
        {
          title: "10. Kapcsolat",
          content: ["Kérdés esetén: maro.hajnalka@gmail.com, szurilo@gmail.com"]
        }
      ]
    },
    privacy_policy: {
      title: "Adatvédelmi tájékoztató",
      last_updated: "Utolsó frissítés: 2026. május 15.",
      sections: [
        {
          title: "1. Bevezetés",
          content: ["A DEV DUO elkötelezett az Ön személyes adatainak védelme mellett, a GDPR és az alkalmazandó adatvédelmi jogszabályok betartásával."]
        },
        {
          title: "2. Adatkezelő adatai",
          content: ["Szolgáltatás neve: DEV DUO<br />Üzemeltető: Maró Hajnalka, Tar József<br />Kapcsolat: maro.hajnalka@gmail.com, szurilo@gmail.com <br />Helyszín: European Union (Hungary)"]
        },
        {
          title: "3. Kezelt adatok köre",
          list: [
            "Név",
            "E-mail cím",
            "Kapcsolatfelvételi űrlapon megadott üzenet",
            "IP cím és böngésző adatok",
            "Analitikai és használati adatok"
          ]
        },
        {
          title: "4. Az adatkezelés célja",
          list: [
            "Kapcsolattartás",
            "Szolgáltatások nyújtása",
            "Weboldal fejlesztése és optimalizálása",
            "Biztonsági célok",
            "Jogi kötelezettségek teljesítése"
          ]
        },
        {
          title: "5. Az adatkezelés jogalapja",
          list: [
            "Az érintett hozzájárulása",
            "Jogos érdek",
            "Jogi kötelezettség",
            "Szerződés teljesítése vagy ajánlatadás"
          ]
        },
        {
          title: "6. Sütik (Cookie-k)",
          content: [
            "A weboldal cookie-kat használhat a megfelelő működés és a felhasználói élmény javítása érdekében.",
            "A cookie-k letilthatók a böngésző beállításaiban."
          ]
        },
        {
          title: "7. Harmadik fél szolgáltatók",
          content: ["Bizonyos szolgáltatásokat külső partnerek biztosíthatnak, például tárhelyszolgáltatás, analitika vagy email szolgáltatás."]
        },
        {
          title: "8. Adatmegőrzési idő",
          content: ["Az adatokat csak a szükséges ideig tároljuk, illetve a jogszabályokban előírt időtartamig."]
        },
        {
          title: "9. Az érintettek jogai",
          list: [
            "Hozzáférés a személyes adatokhoz",
            "Adathelyesbítés kérése",
            "Adattörlés kérése",
            "Adatkezelés korlátozása vagy tiltása",
            "Adathordozhatóság",
            "Hozzájárulás visszavonása",
            "Panasztétel a NAIH-nál"
          ]
        },
        {
          title: "10. Adatbiztonság",
          content: ["Megfelelő technikai és szervezési intézkedéseket alkalmazunk az adatok védelme érdekében."]
        },
        {
          title: "11. Kapcsolat",
          content: ["Kérdés esetén: maro.hajnalka@gmail.com, szurilo@gmail.com"]
        }
      ]
    }
  },
};
