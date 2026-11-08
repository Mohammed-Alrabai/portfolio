"use client";

import Image from "next/image";
import { FiExternalLink, FiGithub } from "react-icons/fi";
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
              <article
                key={project.name}
                className={`project-card flex flex-col${project.featured ? " project-card--featured" : ""}`}
              >
                {project.featured && project.logo && (
                  <div className="project-logo flex items-center justify-center">
                    <Image
                      className="project-logo-dark"
                      src={project.logo.dark}
                      width={project.logo.width}
                      height={project.logo.height}
                      alt={project.name}
                    />
                    <Image
                      className="project-logo-light"
                      src={project.logo.light}
                      width={project.logo.width}
                      height={project.logo.height}
                      alt={project.name}
                    />
                  </div>
                )}
                <div className="project-body flex flex-col">
                  <div>
                    <h3 className="project-name h3">{project.name}</h3>
                    {project.release && (
                      <p className="project-release meta">{project.release}</p>
                    )}
                  </div>
                  <p className="project-desc">{project.description}</p>
                  {project.featured && project.details && (
                    <p className="project-details">{project.details}</p>
                  )}
                  <div className="project-tech flex flex-wrap">
                    {project.tech.map((tech) => (
                      <Badge key={tech}>{tech}</Badge>
                    ))}
                  </div>
                  {project.linkType === "private" ? (
                    <p className="project-status meta">{t[language].projects.private}</p>
                  ) : (
                    <div className="project-status project-links meta flex flex-wrap items-center">
                      {project.url && (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="link-underline inline-flex items-center"
                        >
                          <FiExternalLink aria-hidden="true" />
                          {t[language].projects.live}
                        </a>
                      )}
                      {project.repoUrl && (
                        <a
                          href={project.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="link-underline inline-flex items-center"
                        >
                          <FiGithub aria-hidden="true" />
                          {t[language].projects.source}
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
