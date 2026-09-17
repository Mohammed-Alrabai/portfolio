"use client";

import { experience } from "@/data/experience";
import SectionTitle from "@/components/ui/SectionTitle";
import Reveal from "@/components/ui/Reveal";
import { useLanguage } from "@/lib/language-context";
import { t } from "@/lib/translations";

export default function Experience() {
  const { language } = useLanguage();

  return (
    <section id="experience" className="section">
      <div className="container">
        <Reveal>
          <SectionTitle title={t[language].sections.experience} />
          <div className="exp-list">
            {experience[language].map((entry) => (
              <div key={entry.company} className="exp-item grid">
                <div className="exp-dates meta">
                  {entry.start} — {entry.end}
                </div>
                <div className="exp-body">
                  <h3 className="exp-role h3">{entry.role}</h3>
                  <p className="exp-company meta">{entry.company}</p>
                  <p className="exp-desc">{entry.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
