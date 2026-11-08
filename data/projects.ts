import type { Language } from "@/lib/translations";

export interface ProjectLogo {
  /** Logo for dark backgrounds (dark colour scheme). */
  dark: string;
  /** Logo for light backgrounds (light colour scheme). */
  light: string;
  width: number;
  height: number;
}

export interface Project {
  name: string;
  description: string;
  /** Longer second paragraph, shown on featured cards only. */
  details?: string;
  tech: string[];
  linkType: "private" | "public";
  /** Live site (public projects). */
  url?: string;
  /** Source code repository (public projects). */
  repoUrl?: string;
  /** Short release line shown under the title, e.g. version and date. */
  release?: string;
  /** Project logo; its alt text is the project name. */
  logo?: ProjectLogo;
  /** Featured cards span the full grid width and show the logo and details. */
  featured?: boolean;
}

const intranetTech = ["Next.js", "NestJS", "MongoDB", "Docker", "Microsoft Entra ID"];
const permitTech = ["React", "Node.js", "PostgreSQL", "CI/CD"];
const ociTech = ["OCI", "Docker", "Nginx", "SSL/TLS", "Fail2ban", "CSF/LFD"];
const correspondenceTech = ["Node.js", "MongoDB", "React"];
const licenseTech = ["React", "Node.js", "MongoDB", "CI/CD"];
const assetTech = ["React", "Node.js", "MongoDB", "Express.js"];
const ehssTech = ["React", "Node.js", "MongoDB", "Docker"];
const secheadersTech = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "next-intl",
  "Zod",
  "Vitest",
  "Playwright",
  "GitHub Actions",
  "Netlify",
];

const secheadersUrl = "https://secheaders-lab.netlify.app";
const secheadersRepo = "https://github.com/Mohammed-Alrabai/secheaders-lab";
const secheadersLogo: ProjectLogo = {
  dark: "/projects/secheaders-lab-logo-dark.svg",
  light: "/projects/secheaders-lab-logo-light.svg",
  width: 329,
  height: 64,
};

export const projects: Record<Language, Project[]> = {
  en: [
    {
      name: "SecHeaders Lab",
      description:
        "Bilingual (English/Arabic, full RTL) passive security review for public websites — checks HTTP security headers, HTTPS/TLS, cookies, and information disclosure, then returns a 0–100 score, an A+ to F grade, a plain-language explanation of every finding, and copy-ready fixes for Nginx, Apache, IIS, Next.js, Netlify, and Cloudflare. Reports are shareable by link and printable as PDF.",
      details:
        "SSRF-hardened scanner: strict URL policy, public-only DNS validation, IP-pinned connections against DNS rebinding, and re-validated redirects, with a per-request nonce CSP. Covered by 1,280 unit/integration and 75 Playwright end-to-end tests, with CodeQL, Semgrep, Gitleaks, and pnpm audit in CI. Scores A+ on its own scanner and on Mozilla Observatory, Lighthouse 99–100 in every category, WCAG 2.2 AA.",
      tech: secheadersTech,
      linkType: "public",
      url: secheadersUrl,
      repoUrl: secheadersRepo,
      release: "Open source · v1.0.0 · November 2026",
      logo: secheadersLogo,
      featured: true,
    },
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
      name: "SecHeaders Lab",
      description:
        "أداة ثنائية اللغة (العربية والإنجليزية مع دعم كامل للاتجاه من اليمين إلى اليسار) لفحص أمني سلبي (Passive) للمواقع العامة — تقيّم رؤوس الأمان في HTTP وإعدادات HTTPS/TLS وملفات تعريف الارتباط وتسريب المعلومات، وتعطي درجة من 0 إلى 100 وتقديرًا من A+ إلى F، مع شرح مبسّط لكل نتيجة وإعدادات إصلاح جاهزة للنسخ لـ Nginx وApache وIIS وNext.js وNetlify وCloudflare. يمكن مشاركة التقارير برابط وطباعتها بصيغة PDF.",
      details:
        "ماسح محصَّن ضد SSRF: سياسة صارمة للعناوين، وقبول عناوين DNS العامة فقط، وتثبيت الاتصال على عنوان IP لمنع DNS Rebinding، وإعادة التحقق من كل تحويل، مع CSP بقيمة nonce لكل طلب. مغطّى بـ 1,280 اختبار وحدة وتكامل و75 اختبارًا شاملًا (E2E) عبر Playwright، مع CodeQL وSemgrep وGitleaks وpnpm audit في CI. يحصل على A+ في ماسحه الخاص وفي Mozilla Observatory، و99–100 في جميع فئات Lighthouse، ومتوافق مع WCAG 2.2 AA.",
      tech: secheadersTech,
      linkType: "public",
      url: secheadersUrl,
      repoUrl: secheadersRepo,
      release: "مفتوح المصدر · الإصدار v1.0.0 · نوفمبر 2026",
      logo: secheadersLogo,
      featured: true,
    },
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
