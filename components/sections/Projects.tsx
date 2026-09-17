"use client";

import { projects } from "@/data/projects";
import SectionTitle from "@/components/ui/SectionTitle";
import Badge from "@/components/ui/Badge";
import Reveal from "@/components/ui/Reveal";
import { useLanguage } from "@/lib/language-context";
import { t } from "@/lib/translations";

export default function Projects() {
  const { language } = useLanguage();

  return (
    <section id="projects" className="section">
      <div className="container">
        <Reveal>
          <SectionTitle title={t[language].sections.projects} />
          <div className="projects-grid grid">
            {projects[language].map((project) => (
              <article key={project.name} className="project-card flex flex-col">
                <h3 className="project-name h3">{project.name}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="project-tech flex flex-wrap">
                  {project.tech.map((tech) => (
                    <Badge key={tech}>{tech}</Badge>
                  ))}
                </div>
                <p className="project-status meta">
                  {project.linkType === "private" ? t[language].projects.private : project.url}
                </p>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
