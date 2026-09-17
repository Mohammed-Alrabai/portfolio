"use client";

import { FiExternalLink, FiGithub, FiLinkedin } from "react-icons/fi";
import { contact } from "@/data/contact";
import SectionTitle from "@/components/ui/SectionTitle";
import Reveal from "@/components/ui/Reveal";
import { useLanguage } from "@/lib/language-context";
import { t } from "@/lib/translations";

export default function Contact() {
  const { language } = useLanguage();

  return (
    <section id="contact" className="section">
      <div className="container">
        <Reveal>
          <SectionTitle
            title={t[language].sections.contact}
            description={t[language].contact.description}
          />
          <div className="contact-actions flex flex-wrap items-center">
            <a href={`mailto:${contact.email}`} className="btn btn-accent">
              {contact.email}
            </a>
            <a
              href={`https://${contact.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn flex items-center"
            >
              <FiLinkedin aria-hidden="true" />
              LinkedIn
            </a>
            <a
              href={`https://${contact.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn flex items-center"
            >
              <FiGithub aria-hidden="true" />
              GitHub
            </a>
            <a
              href={`https://${contact.website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn flex items-center"
            >
              <FiExternalLink aria-hidden="true" />
              {t[language].contact.website}
            </a>
          </div>
          <p className="contact-location meta">{contact.location[language]}</p>
        </Reveal>
      </div>
    </section>
  );
}
