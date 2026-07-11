"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { Card, CardContent } from "@/components/ui/card";
import type { Project } from "@/data/site-data";

function ProjectImage({ project }: { project: Project }) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#4f064f]/90 to-[#190019] p-6">
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
