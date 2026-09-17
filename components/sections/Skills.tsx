"use client";

import { skills } from "@/data/skills";
import SectionTitle from "@/components/ui/SectionTitle";
import Badge from "@/components/ui/Badge";
import Reveal from "@/components/ui/Reveal";
import { useLanguage } from "@/lib/language-context";
import { t } from "@/lib/translations";

export default function Skills() {
  const { language } = useLanguage();

  return (
    <section id="skills" className="section">
      <div className="container">
        <Reveal>
          <SectionTitle title={t[language].sections.skills} />
          <div className="skills-grid grid">
            {skills[language].map((group) => (
              <div key={group.category} className="skill-group">
                <h3 className="skill-group-title mono">{group.category}</h3>
                <div className="skill-tags flex flex-wrap">
                  {group.items.map((item) => (
                    <Badge key={item}>{item}</Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
