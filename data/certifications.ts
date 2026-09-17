import type { Language } from "@/lib/translations";

export interface Certification {
  name: string;
  issuer: string;
  issued?: string;
  expired?: string;
}

export const certifications: Record<Language, Certification[]> = {
  en: [
    {
      name: "Application Security for Developers & DevOps Professionals",
      issuer: "IBM",
    },
    { name: "ITIL® 4 Foundation", issuer: "PeopleCert" },
    {
      name: "Full Stack JavaScript Bootcamp",
      issuer: "Tuwaiq Academy · 200 hours",
    },
    { name: "Digital Transformation Professional", issuer: "80 hours" },
    {
      name: "Secure Coding Essentials Training",
      issuer: "The Knowledge Academy",
    },
  ],
  ar: [
    {
      name: "أمن التطبيقات للمطورين ومختصي DevOps",
      issuer: "IBM",
    },
    { name: "أساسيات ITIL® 4", issuer: "PeopleCert" },
    {
      name: "معسكر Full Stack JavaScript",
      issuer: "أكاديمية تُقنية · 200 ساعة",
    },
    { name: "التحول الرقمي الاحترافي", issuer: "80 ساعة" },
    {
      name: "دورة أساسيات الترميز الآمن",
      issuer: "The Knowledge Academy",
    },
  ],
};
