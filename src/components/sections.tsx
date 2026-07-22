"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { Card, CardContent } from "@/components/ui/card";
import type { Education, Experience, Project } from "@/data/site-data";

function ProjectImage({ project }: { project: Project }) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className="flex h-full w-full items-center justify-center bg-linear-to-br from-[#4f064f]/90 to-background p-6">
        <span className="text-center text-xl font-bold text-primary">{project.title}</span>
      </div>
    );
  }

  return (
    <Image
      src={project.image}
      alt={project.title}
      fill
      className="object-cover transition-transform duration-500 group-hover:scale-105"
      sizes="(max-width: 768px) 100vw, 50vw"
      onError={() => setHasError(true)}
    />
  );
}

export function ProjectGrid({ projects }: { projects: Project[] }) {
  return (
    <div className="grid gap-8 sm:grid-cols-2">
      {projects.map((project, index) => (
        <AnimateOnScroll key={project.id} delay={index * 100}>
          <article className="group">
            <Link
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block overflow-hidden rounded-xl border border-white/5 bg-card/50 shadow-lg transition-all duration-300 hover:border-accent/30 hover:shadow-xl"
            >
              <div className="relative aspect-video overflow-hidden">
                <ProjectImage project={project} />
                <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/40 group-hover:opacity-100">
                  <ExternalLink className="h-8 w-8 text-white" />
                </div>
              </div>
            </Link>
            <h3 className="mt-4 text-lg font-bold tracking-wide text-primary">
              {project.title}
            </h3>
          </article>
        </AnimateOnScroll>
      ))}
    </div>
  );
}

export function ProjectDetailList({ projects }: { projects: Project[] }) {
  return (
    <div className="space-y-16 md:space-y-24">
      {projects.map((project, index) => (
        <AnimateOnScroll key={project.id} delay={index * 80}>
          <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
            <div className={index % 2 === 1 ? "md:order-2" : ""}>
              <Link
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block overflow-hidden rounded-xl border border-white/5 shadow-lg transition-all duration-300 hover:border-accent/30"
              >
                <div className="relative aspect-video overflow-hidden">
                  <ProjectImage project={project} />
                </div>
              </Link>
            </div>
            <div className={index % 2 === 1 ? "md:order-1" : ""}>
              <h3 className="text-2xl font-bold text-primary">{project.title}</h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-xs font-medium text-accent"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <p className="mt-5 text-sm text-muted-foreground">
                <strong className="text-primary">
                  {project.github ? "Live:" : "Website:"}
                </strong>{" "}
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent underline-offset-2 hover:underline"
                >
                  {project.url.replace(/^https?:\/\//, "")}
                </a>
              </p>
              {project.github && (
                <p className="mt-2 text-sm text-muted-foreground">
                  <strong className="text-primary">GitHub:</strong>{" "}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="break-all text-accent underline-offset-2 hover:underline"
                  >
                    {project.github.replace(/^https?:\/\//, "")}
                  </a>
                </p>
              )}
            </div>
          </div>
        </AnimateOnScroll>
      ))}
    </div>
  );
}

export function ExperienceList({ experiences }: { experiences: Experience[] }) {
  return (
    <div className="relative space-y-8 before:absolute before:left-2.75 before:top-3 before:hidden before:h-[calc(100%-1.5rem)] before:w-px before:bg-accent/20 md:before:block">
      {experiences.map((job, index) => (
        <AnimateOnScroll key={`${job.company}-${job.role}`} delay={index * 100}>
          <article className="relative md:pl-10">
            <span
              aria-hidden
              className="absolute left-0 top-2 hidden h-6 w-6 items-center justify-center rounded-full border-2 border-accent/40 bg-background md:flex"
            >
              <span className="h-2 w-2 rounded-full bg-accent" />
            </span>
            <Card className="border-white/5 bg-card/60">
              <CardContent className="p-6 md:p-8">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                  <div>
                    <h3 className="text-xl font-bold text-primary">{job.company}</h3>
                    <p className="mt-1 font-medium text-accent">{job.role}</p>
                  </div>
                  <p className="shrink-0 text-sm text-muted-foreground sm:pt-1">
                    {job.period}
                  </p>
                </div>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  {job.summary}
                </p>
                <ul className="mt-5 space-y-3">
                  {job.highlights.map((item) => (
                    <li
                      key={item}
                      className="flex gap-2 text-sm leading-relaxed text-muted-foreground before:mt-2 before:h-1.5 before:w-1.5 before:shrink-0 before:rounded-full before:bg-accent"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                {job.urls && job.urls.length > 0 && (
                  <div className="mt-5 flex flex-wrap gap-3">
                    {job.urls.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-accent underline-offset-2 hover:underline"
                      >
                        {link.label}
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </article>
        </AnimateOnScroll>
      ))}
    </div>
  );
}

export function EducationList({ education }: { education: Education[] }) {
  return (
    <div className="space-y-6">
      {education.map((item, index) => (
        <AnimateOnScroll key={`${item.institution}-${item.degree}`} delay={index * 100}>
          <Card className="border-white/5 bg-card/60">
            <CardContent className="p-6 md:p-8">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                <div>
                  <h3 className="text-xl font-bold text-primary">
                    {item.institution}
                    <span className="font-normal text-muted-foreground">
                      , {item.location}
                    </span>
                  </h3>
                  <p className="mt-1 font-medium text-accent">{item.degree}</p>
                </div>
                <p className="shrink-0 text-sm text-muted-foreground sm:pt-1">
                  {item.period}
                </p>
              </div>
              {item.details && item.details.length > 0 && (
                <ul className="mt-5 space-y-2">
                  {item.details.map((detail) => (
                    <li
                      key={detail}
                      className="flex gap-2 text-sm leading-relaxed text-muted-foreground before:mt-2 before:h-1.5 before:w-1.5 before:shrink-0 before:rounded-full before:bg-accent"
                    >
                      {detail}
                    </li>
                  ))}
                </ul>
              )}
            </CardContent>
          </Card>
        </AnimateOnScroll>
      ))}
    </div>
  );
}

export function SkillCards({ cards }: { cards: { title: string; items: string[] }[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {cards.map((card, index) => (
        <AnimateOnScroll key={card.title} delay={index * 100}>
          <Card className="h-full">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-accent">{card.title}</h3>
              <ul className="mt-4 space-y-3">
                {card.items.map((item) => (
                  <li
                    key={item}
                    className="flex gap-2 text-sm leading-relaxed text-muted-foreground before:mt-2 before:h-1.5 before:w-1.5 before:shrink-0 before:rounded-full before:bg-accent"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </AnimateOnScroll>
      ))}
    </div>
  );
}

export function ResponsibilityCards({
  cards,
}: {
  cards: { title: string; items: string[] }[];
}) {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {cards.map((card, index) => (
        <AnimateOnScroll key={card.title} delay={index * 100}>
          <Card className="h-full border-white/5 bg-card/60">
            <CardContent className="p-6 md:p-8">
              <h3 className="whitespace-pre-line text-xl font-bold leading-snug text-primary">
                {card.title}
              </h3>
              <ul className="mt-5 space-y-3">
                {card.items.map((item) => (
                  <li
                    key={item}
                    className="flex gap-2 text-sm leading-relaxed text-muted-foreground before:mt-2 before:h-1.5 before:w-1.5 before:shrink-0 before:rounded-full before:bg-accent"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </AnimateOnScroll>
      ))}
    </div>
  );
}

export function TestimonialCards({
  testimonials,
}: {
  testimonials: {
    quote: string;
    name: string;
    title: string;
    affiliation: string;
  }[];
}) {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {testimonials.map((item, index) => (
        <AnimateOnScroll key={item.name} delay={index * 100}>
          <Card className="relative h-full overflow-hidden">
            <CardContent className="flex h-full flex-col p-6 md:p-8">
              <span className="text-5xl font-serif leading-none text-accent/40">
                &ldquo;
              </span>
              <blockquote className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {item.quote}
              </blockquote>
              <footer className="mt-6 border-t border-white/5 pt-4">
                <p className="font-semibold text-primary">{item.name}</p>
                <p className="text-sm text-muted-foreground">{item.title}</p>
                <p className="text-sm text-muted-foreground">{item.affiliation}</p>
              </footer>
            </CardContent>
          </Card>
        </AnimateOnScroll>
      ))}
    </div>
  );
}
