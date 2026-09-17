"use client";

import { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import { useLanguage } from "@/lib/language-context";
import { t } from "@/lib/translations";

type Scheme = "dark" | "light";

export default function ThemeToggle() {
  const { language } = useLanguage();
  const [scheme, setScheme] = useState<Scheme>("dark");

  useEffect(() => {
    const current = document.documentElement.dataset.scheme as Scheme | undefined;
    setScheme(current === "light" ? "light" : "dark");
  }, []);

  const toggle = () => {
    const next: Scheme = scheme === "dark" ? "light" : "dark";
    setScheme(next);
    document.documentElement.dataset.scheme = next;
    try {
      localStorage.setItem("cs", next);
    } catch {
      // localStorage unavailable — theme still applies for this session
    }
    const meta = document.querySelector('meta[name="color-scheme"]');
    if (meta) meta.setAttribute("content", next);
  };

  const label = scheme === "dark" ? t[language].theme.dark : t[language].theme.light;

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Switch to ${scheme === "dark" ? "light" : "dark"} mode`}
      className="theme-toggle meta flex items-center"
    >
      {scheme === "dark" ? <FiMoon aria-hidden="true" /> : <FiSun aria-hidden="true" />}
      <span className="mono">{label}</span>
    </button>
  );
}
