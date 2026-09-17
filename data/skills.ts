import type { Language } from "@/lib/translations";

export interface SkillGroup {
  category: string;
  items: string[];
}

const frontend = ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux"];
const backend = ["Node.js", "NestJS", "Express.js", "REST APIs"];
const databases = ["MongoDB", "PostgreSQL", "MySQL", "Prisma", "Mongoose"];
const devops = ["Docker", "OCI", "GitHub Actions", "CI/CD", "Nginx", "Linux", "PM2"];
const security = ["OWASP", "SAST", "DAST", "Snyk", "Semgrep", "CodeQL", "Trivy", "Gitleaks"];
const infra = ["cPanel/WHM", "CSF/LFD", "Fail2ban", "Falco", "ClamAV", "SSL/TLS"];

export const skills: Record<Language, SkillGroup[]> = {
  en: [
    { category: "Frontend", items: frontend },
    { category: "Backend", items: backend },
    { category: "Databases", items: databases },
    { category: "DevOps / Cloud", items: devops },
    { category: "Application Security", items: security },
    { category: "Infrastructure", items: infra },
  ],
  ar: [
    { category: "الواجهة الأمامية", items: frontend },
    { category: "الواجهة الخلفية", items: backend },
    { category: "قواعد البيانات", items: databases },
    { category: "DevOps والحوسبة السحابية", items: devops },
    { category: "أمن التطبيقات", items: security },
    { category: "البنية التحتية", items: infra },
  ],
};
