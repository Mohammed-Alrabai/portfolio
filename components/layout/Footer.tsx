"use client";

import { profile } from "@/data/profile";
import { useLanguage } from "@/lib/language-context";

export default function Footer() {
  const { language } = useLanguage();

  return (
    <footer className="footer">
      <div className="container flex flex-wrap items-center justify-between">
        <span className="meta">
          © {new Date().getFullYear()} {profile[language].name}
        </span>
      </div>
    </footer>
  );
}
