import type { Language } from "@/lib/translations";

export interface Project {
  name: string;
  description: string;
  tech: string[];
  linkType: "private" | "public";
  url?: string;
}

const intranetTech = ["Next.js", "NestJS", "MongoDB", "Docker", "Microsoft Entra ID"];
const permitTech = ["React", "Node.js", "PostgreSQL", "CI/CD"];
const ociTech = ["OCI", "Docker", "Nginx", "SSL/TLS", "Fail2ban", "CSF/LFD"];
const correspondenceTech = ["Node.js", "MongoDB", "React"];
const licenseTech = ["React", "Node.js", "MongoDB", "CI/CD"];
const assetTech = ["React", "Node.js", "MongoDB", "Express.js"];
const ehssTech = ["React", "Node.js", "MongoDB", "Docker"];

export const projects: Record<Language, Project[]> = {
  en: [
    {
      name: "Enterprise Intranet Portal",
      description:
        "Unified platform serving SCCH and 4 subsidiaries — RBAC, Microsoft Entra ID integration, and cross-office modules in a single full-stack system.",
      tech: intranetTech,
      linkType: "private",
    },
    {
      name: "Permit Management System",
      description:
        "Industrial access permit workflow — digital card generation, multi-stage approval pipeline, and PNG/PDF output for operational compliance.",
      tech: permitTech,
      linkType: "private",
    },
    {
      name: "OCI Migration — 7 Production Sites",
      description:
        "Zero-downtime migration of 7 websites from shared VPS to Oracle Cloud Infrastructure. Containerised, hardened, and NCA ECC compliant from day one.",
      tech: ociTech,
      linkType: "private",
    },
    {
      name: "Correspondence Management System",
      description:
        "Cross-office reference numbering system with structured workflows, audit trail, and role-based visibility across business units.",
      tech: correspondenceTech,
      linkType: "private",
    },
    {
      name: "License Management System",
      description:
        "Centralized corporate license register with automated expiry tracking and renewal alerting. Covers regulatory, commercial, and software licenses — with document attachment, renewal history, department-level visibility, and a dashboard for active, expiring, and lapsed licenses across the organization.",
      tech: licenseTech,
      linkType: "private",
    },
    {
      name: "Asset Management System",
      description:
        "End-to-end IT and facility asset lifecycle system spanning registration, issuance, transfer, and retirement workflows. Tracks assets across 56 branches and multiple subsidiaries with transfer approval pipelines, audit trail, and location-based inventory views.",
      tech: assetTech,
      linkType: "private",
    },
    {
      name: "EHSS Portal",
      description:
        "Environment, Health, Safety & Security compliance portal for industrial operations — incident reporting, safety inspections, regulatory compliance tracking, and HSE dashboards aligned with Saudi industrial safety standards.",
      tech: ehssTech,
      linkType: "private",
    },
  ],
  ar: [
    {
      name: "بوابة الإنترانت المؤسسية",
      description:
        "منصة موحدة تخدم SCCH و4 شركات تابعة — تحكم بالصلاحيات (RBAC)، وربط مع Microsoft Entra ID، ووحدات متعددة المكاتب ضمن نظام Full-Stack واحد.",
      tech: intranetTech,
      linkType: "private",
    },
    {
      name: "نظام إدارة التصاريح",
      description:
        "نظام سير عمل لتصاريح الدخول الصناعية — إصدار بطاقات رقمية، ومسار موافقات متعدد المراحل، وإخراج بصيغة PNG/PDF للامتثال التشغيلي.",
      tech: permitTech,
      linkType: "private",
    },
    {
      name: "ترحيل البنية التحتية إلى OCI — 7 مواقع إنتاج",
      description:
        "ترحيل 7 مواقع إلكترونية من استضافة VPS مشتركة إلى Oracle Cloud Infrastructure دون توقف للخدمة، مع أتمتة الحاويات والتحصين الأمني والامتثال لضوابط NCA ECC منذ اليوم الأول.",
      tech: ociTech,
      linkType: "private",
    },
    {
      name: "نظام إدارة المراسلات",
      description:
        "نظام ترقيم مرجعي للمراسلات بين المكاتب مع مسارات عمل منظمة، وسجل تدقيق، وصلاحيات عرض حسب الدور لكل وحدة أعمال.",
      tech: correspondenceTech,
      linkType: "private",
    },
    {
      name: "نظام إدارة التراخيص",
      description:
        "سجل مركزي لتراخيص الشركة مع تتبع آلي لتواريخ الانتهاء وتنبيهات التجديد. يغطي التراخيص التنظيمية والتجارية وتراخيص البرمجيات — مع إرفاق المستندات، وسجل التجديدات، ورؤية على مستوى الإدارات، ولوحة تحكم للتراخيص السارية والقريبة من الانتهاء والمنتهية على مستوى المؤسسة.",
      tech: licenseTech,
      linkType: "private",
    },
    {
      name: "نظام إدارة الأصول",
      description:
        "نظام متكامل لدورة حياة أصول تقنية المعلومات والمرافق، يشمل التسجيل والتسليم والنقل والإخراج من الخدمة. يتتبع الأصول عبر 56 فرعًا وعدة شركات تابعة مع مسار موافقات لنقل الأصول، وسجل تدقيق، وعرض المخزون حسب الموقع.",
      tech: assetTech,
      linkType: "private",
    },
    {
      name: "بوابة الصحة والسلامة والبيئة والأمن (EHSS)",
      description:
        "بوابة امتثال للصحة والسلامة والبيئة والأمن للعمليات الصناعية — تشمل الإبلاغ عن الحوادث، وتفتيش السلامة، وتتبع الامتثال التنظيمي، ولوحات مؤشرات HSE متوافقة مع معايير السلامة الصناعية السعودية.",
      tech: ehssTech,
      linkType: "private",
    },
  ],
};
