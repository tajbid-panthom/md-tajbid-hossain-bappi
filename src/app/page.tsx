import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { CtaSection } from "@/components/cta-section";
import { SectionHeader } from "@/components/section-header";
import {
  ProjectGrid,
  ResponsibilityCards,
  SkillCards,
  TestimonialCards,
} from "@/components/sections";
import { Button } from "@/components/ui/button";
import {
  projects,
  responsibilities,
  siteConfig,
  skillCards,
  testimonials,
} from "@/data/site-data";

export const metadata: Metadata = {
  title: "Md Tajbid Hossain Bappi | Portfolio",
  description: "A portfolio showcasing the work and skills of Md Tajbid Hossain Bappi.",
};

export default function HomePage() {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 4);

  return (
    <>
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-2 md:gap-16 md:px-8 md:py-24">
        <AnimateOnScroll>
          <div className="relative mx-auto aspect-square w-full max-w-sm overflow-hidden rounded-2xl border-2 border-accent/30 shadow-2xl shadow-accent/10 md:max-w-md">
            <Image
              src="/images/tajbid.jpeg"
              alt={siteConfig.name}
              fill
              className="object-cover object-top"
              priority
              sizes="(max-width: 768px) 100vw, 400px"
            />
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={150}>
          <div>
            <p className="text-lg text-muted-foreground">
              Hi, I am{" "}
              <span className="font-semibold text-primary">{siteConfig.name}</span>
            </p>
            <h1 className="mt-3 text-4xl font-extrabold leading-tight text-primary md:text-5xl lg:text-6xl">
              {siteConfig.title.split(" ").slice(0, 2).join(" ")}
              <br />
              {siteConfig.title.split(" ").slice(2).join(" ")}
            </h1>
            <p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">
              {siteConfig.description}
            </p>
            <Button asChild size="lg" className="mt-8">
              <Link href="/contact">Contact Me</Link>
            </Button>
          </div>
        </AnimateOnScroll>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        <AnimateOnScroll>
          <SectionHeader
            title="Skills & Experience"
            intro="Proficient in full-stack development with Next.js, React, and FastAPI. Skilled in creating responsive web interfaces, type-safe database layers with Drizzle ORM, and intuitive user experiences."
          />
        </AnimateOnScroll>
        <SkillCards cards={skillCards} />
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        <AnimateOnScroll>
          <SectionHeader
            title="Selected Works"
            intro="Production web applications and full-stack projects — from donor management platforms and corporate sites to e-learning and social media applications."
          />
        </AnimateOnScroll>
        <ProjectGrid projects={featuredProjects} />
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        <AnimateOnScroll>
          <SectionHeader title="What I do" />
        </AnimateOnScroll>
        <ResponsibilityCards cards={responsibilities} />
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        <AnimateOnScroll>
          <SectionHeader title="Testimonial" />
        </AnimateOnScroll>
        <TestimonialCards testimonials={testimonials} />
      </section>

      <CtaSection />
    </>
  );
}
