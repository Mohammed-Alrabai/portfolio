"use client";

import { FiDownload, FiGithub, FiLinkedin, FiMail, FiMapPin } from "react-icons/fi";
import { profile } from "@/data/profile";
import { contact } from "@/data/contact";
import { useLanguage } from "@/lib/language-context";
import { t } from "@/lib/translations";

export default function Hero() {
  const { language } = useLanguage();
  const p = profile[language];

  return (
    <section id="top" className="hero">
      <div className="container">
        <p className="hero-status meta flex items-center">
          <span className="status-dot" aria-hidden="true" />
          {t[language].hero.available}
        </p>
        <h1 className="h1">{p.name}</h1>
        <p className="hero-role">{p.title}</p>
        <p className="hero-tagline lead">{p.tagline}</p>
        <div className="hero-actions">
          <a href="/Mohammed_Alrabai_CV.pdf" download className="btn btn-accent flex items-center">
            <FiDownload aria-hidden="true" />
            {t[language].hero.downloadCV}
          </a>
        </div>
        <div className="hero-meta flex flex-wrap items-center">
          <span className="meta flex items-center">
            <FiMapPin aria-hidden="true" />
            {p.location}
          </span>
          <a href={`mailto:${contact.email}`} className="meta link-underline flex items-center">
            <FiMail aria-hidden="true" />
            {contact.email}
          </a>
          <a
            href={`https://${contact.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            className="meta link-underline flex items-center"
          >
            <FiLinkedin aria-hidden="true" />
            LinkedIn
          </a>
          <a
            href={`https://${contact.github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="meta link-underline flex items-center"
          >
            <FiGithub aria-hidden="true" />
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
