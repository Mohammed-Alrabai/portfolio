"use client";

import ThemeToggle from "@/components/ui/ThemeToggle";
import LanguageToggle from "@/components/ui/LanguageToggle";
import { profile } from "@/data/profile";
import { useLanguage } from "@/lib/language-context";
import { t } from "@/lib/translations";

export default function Navbar() {
  const { language } = useLanguage();
  const nav = t[language].nav;
  const name = profile[language].name;

  const navLinks = [
    { href: "#about", label: nav.about },
    { href: "#skills", label: nav.skills },
    { href: "#experience", label: nav.experience },
    { href: "#projects", label: nav.projects },
    { href: "#certifications", label: nav.certifications },
    { href: "#contact", label: nav.contact },
  ];

  return (
    <header className="navbar">
      <div className="container flex items-center justify-between">
        <a href="#top" className="navbar-logo mono">
          {name}
        </a>
        <nav className="nav-links hidden md:flex items-center">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="meta link-underline">
              {link.label}
            </a>
          ))}
        </nav>
        <div className="navbar-controls flex items-center">
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
