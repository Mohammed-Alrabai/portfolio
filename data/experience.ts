import type { Language } from "@/lib/translations";

export interface ExperienceEntry {
  company: string;
  role: string;
  start: string;
  end: string;
  description: string;
}

export const experience: Record<Language, ExperienceEntry[]> = {
  en: [
    {
      company: "Saudi Chemical Company Holding (SCCH)",
      role: "Full-Stack Engineer · DevOps & Application Security",
      start: "November 2023",
      end: "Present",
      description:
        "Design, develop, and maintain enterprise full-stack web applications serving SCCH and its subsidiaries. Lead DevOps automation and application security practices aligned with OWASP and NCA ECC.",
    },
    {
      company: "Intelligent Technology Company",
      role: "Front-End Web Developer",
      start: "February 2021",
      end: "November 2023",
      description:
        "Developed responsive web applications and reusable frontend components. Integrated frontends with RESTful APIs and participated in production releases.",
    },
  ],
  ar: [
    {
      company: "Saudi Chemical Company Holding (SCCH)",
      role: "مهندس Full-Stack · DevOps وأمن التطبيقات",
      start: "نوفمبر 2023",
      end: "حتى الآن",
      description:
        "تصميم وتطوير وصيانة تطبيقات ويب متكاملة على مستوى المؤسسة تخدم SCCH وشركاتها التابعة، مع قيادة أتمتة DevOps وممارسات أمن التطبيقات وفق معايير OWASP وضوابط الأمن السيبراني NCA ECC.",
    },
    {
      company: "Intelligent Technology Company",
      role: "مطور واجهات أمامية (Front-End)",
      start: "فبراير 2021",
      end: "نوفمبر 2023",
      description:
        "تطوير تطبيقات ويب متجاوبة ومكونات واجهة أمامية قابلة لإعادة الاستخدام، وربط الواجهات الأمامية بخدمات RESTful API، والمشاركة في إصدارات الإنتاج.",
    },
  ],
};
