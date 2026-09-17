import type { Language } from "@/lib/translations";

export interface ContactInfo {
  email: string;
  linkedin: string;
  github: string;
  website: string;
  location: Record<Language, string>;
}

export const contact: ContactInfo = {
  email: "m.alrabai4@gmail.com",
  linkedin: "linkedin.com/in/mohammed-alrabai",
  github: "github.com/Mohammed-Alrabai",
  website: "mohammed-alrabai.netlify.app",
  location: {
    en: "Riyadh, Saudi Arabia",
    ar: "الرياض، المملكة العربية السعودية",
  },
};
