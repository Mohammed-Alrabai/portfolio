"use client";

import { certifications } from "@/data/certifications";
import SectionTitle from "@/components/ui/SectionTitle";
import Reveal from "@/components/ui/Reveal";
import { useLanguage } from "@/lib/language-context";
import { t } from "@/lib/translations";

export default function Certifications() {
  const { language } = useLanguage();

  return (
    <section id="certifications" className="section">
      <div className="container">
        <Reveal>
          <SectionTitle title={t[language].sections.certifications} />
          <ul className="cert-list">
            {certifications[language].map((cert) => (
              <li key={cert.name} className="cert-item flex flex-wrap items-baseline justify-between">
                <span className="cert-name">{cert.name}</span>
                <span className="cert-meta flex flex-wrap items-baseline">
                  <span className="cert-issuer meta">
                    {cert.issuer}
                    {cert.issued ? ` · ${cert.issued}` : ""}
                  </span>
                  {cert.expired && (
                    <span className="cert-expired">
                      {t[language].certifications.expired} {cert.expired}
                    </span>
                  )}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
