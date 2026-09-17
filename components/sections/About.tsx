"use client";

import { profile } from "@/data/profile";
import SectionTitle from "@/components/ui/SectionTitle";
import Reveal from "@/components/ui/Reveal";
import { useLanguage } from "@/lib/language-context";
import { t } from "@/lib/translations";

export default function About() {
  const { language } = useLanguage();

  return (
    <section id="about" className="section">
      <div className="container">
        <Reveal>
          <SectionTitle title={t[language].sections.about} />
          <p className="about-summary lead">{profile[language].summary}</p>
        </Reveal>
      </div>
    </section>
  );
}
