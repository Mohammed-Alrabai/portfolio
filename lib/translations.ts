export type Language = "en" | "ar";

export const t = {
  en: {
    nav: {
      about: "About",
      skills: "Skills",
      experience: "Experience",
      projects: "Projects",
      certifications: "Certifications",
      contact: "Contact",
    },
    hero: {
      available: "Available for opportunities",
      downloadCV: "Download CV",
    },
    sections: {
      about: "About",
      skills: "Skills",
      experience: "Experience",
      projects: "Projects",
      certifications: "Certifications",
      contact: "Get in touch",
    },
    contact: {
      description: "Open to full-stack, DevOps, and application security roles.",
      website: "Website",
    },
    projects: {
      private: "Private — Internal System",
    },
    certifications: {
      expired: "Expired",
    },
    theme: {
      dark: "DARK",
      light: "LIGHT",
    },
  },
  ar: {
    nav: {
      about: "نبذة",
      skills: "المهارات",
      experience: "الخبرة",
      projects: "المشاريع",
      certifications: "الشهادات",
      contact: "تواصل",
    },
    hero: {
      available: "متاح لفرص عمل جديدة",
      downloadCV: "تحميل السيرة الذاتية",
    },
    sections: {
      about: "نبذة عني",
      skills: "المهارات",
      experience: "الخبرة العملية",
      projects: "المشاريع",
      certifications: "الشهادات",
      contact: "تواصل معي",
    },
    contact: {
      description: "متاح للانضمام في أدوار Full-Stack أو DevOps أو أمن التطبيقات.",
      website: "الموقع الإلكتروني",
    },
    projects: {
      private: "خاص — نظام داخلي",
    },
    certifications: {
      expired: "منتهية الصلاحية",
    },
    theme: {
      dark: "غامق",
      light: "فاتح",
    },
  },
} as const;
