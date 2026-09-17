import type { Language } from "@/lib/translations";

export interface Profile {
  name: string;
  title: string;
  tagline: string;
  location: string;
  summary: string;
}

export const profile: Record<Language, Profile> = {
  en: {
    name: "Mohammed Alrabai",
    title: "Full-Stack Engineer · DevOps & Application Security",
    tagline:
      "Building and securing enterprise systems in production — React · Next.js · Node.js · NestJS · Docker · Oracle Cloud",
    location: "Riyadh, Saudi Arabia",
    summary:
      "Full-stack software engineer with 5+ years designing, developing, deploying, and maintaining production web applications and backend services — with a focus on cloud infrastructure, DevOps automation, and application security aligned with OWASP and NCA ECC.",
  },
  ar: {
    name: "محمد الربعي",
    title: "مهندس Full-Stack · DevOps وأمن التطبيقات",
    tagline:
      "بناء وتأمين أنظمة المؤسسات في بيئة الإنتاج — React · Next.js · Node.js · NestJS · Docker · Oracle Cloud",
    location: "الرياض، المملكة العربية السعودية",
    summary:
      "مهندس برمجيات Full-Stack بخبرة تتجاوز 5 سنوات في تصميم وتطوير ونشر وصيانة تطبيقات ويب وخدمات خلفية في بيئة الإنتاج، مع تركيز على البنية التحتية السحابية وأتمتة DevOps وأمن التطبيقات وفق معايير OWASP وضوابط الأمن السيبراني NCA ECC.",
  },
};
