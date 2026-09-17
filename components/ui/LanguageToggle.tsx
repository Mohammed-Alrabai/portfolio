"use client";

import { useLanguage } from "@/lib/language-context";

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      aria-label={language === "en" ? "Switch to Arabic" : "التبديل إلى الإنجليزية"}
      className="lang-toggle meta flex items-center"
    >
      <span className="mono">{language === "en" ? "عربي" : "EN"}</span>
    </button>
  );
}
