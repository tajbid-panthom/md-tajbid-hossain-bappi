import Image from "next/image";
import type { Metadata } from "next";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { CtaSection } from "@/components/cta-section";
import { DesignProcess } from "@/components/design-process";
import { SectionHeader } from "@/components/section-header";
import { SkillBar } from "@/components/skill-bar";
import { EducationList, ExperienceList, SkillCards } from "@/components/sections";
import {
  aboutProfile,
  designProcess,
  education,
  experiences,
  siteConfig,
  skillCards,
  skillCategories,
} from "@/data/site-data";

export const metadata: Metadata = {
  title: "About",
  description: `Learn about ${siteConfig.name} — full-stack web developer specializing in Next.js, e-commerce, and SaaS platforms.`,
};

export default function AboutPage() {
  return (
    <>
      {/* Profile Hero */}
      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
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
              <p className="text-sm font-semibold uppercase tracking-wider text-accent">
                About Me
              </p>
              <h1 className="mt-3 text-3xl font-extrabold leading-tight text-primary md:text-4xl lg:text-5xl">
                {aboutProfile.headline}
              </h1>
              <p className="mt-6 leading-relaxed text-muted-foreground">
                {aboutProfile.bio}
              </p>
              <p className="mt-4 text-sm text-muted-foreground">
                Business:{" "}
                <a
                  href={siteConfig.businessWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-accent underline-offset-2 hover:underline"
                >
                  {siteConfig.business} — gonimia.com
                </a>
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {aboutProfile.highlights.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-xl border border-white/5 bg-card/40 px-4 py-3 text-center"
                  >
                    <p className="text-2xl font-bold text-accent">{item.value}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Work Experience */}
      <section className="border-y border-white/5 bg-card/20 py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <AnimateOnScroll>
            <SectionHeader
              title="Experience"
              intro="Professional roles and ventures — founding Gonimia, shipping CRA-compliant donor management at GlaceIT, and building education and corporate systems at Troyee Associates."
            />
          </AnimateOnScroll>
          <ExperienceList experiences={experiences} />
        </div>
      </section>

      {/* Education */}
      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        <AnimateOnScroll>
          <SectionHeader
            title="Education"
            intro="Academic foundation in computer science, building the skills behind the products I ship."
          />
        </AnimateOnScroll>
        <EducationList education={education} />
      </section>

      {/* Skills */}
      <section className="border-y border-white/5 bg-card/20 py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <AnimateOnScroll>
            <SectionHeader
              title="Skills"
              intro="Experienced full-stack developer who has shipped production platforms for e-commerce, nonprofit SaaS, and corporate clients. Proficient in Next.js, TypeScript, PostgreSQL, and Drizzle ORM."
            />
          </AnimateOnScroll>

          <div className="space-y-14">
            {skillCategories.map((category, categoryIndex) => (
              <AnimateOnScroll key={category.title} delay={categoryIndex * 50}>
                <div>
                  <h3 className="mb-6 text-xl font-bold text-accent md:text-2xl">
                    {category.title}
                  </h3>
                  <div className="grid gap-5 sm:grid-cols-2">
                    {category.skills.map((skill, skillIndex) => (
                      <SkillBar
                        key={skill.name}
                        name={skill.name}
                        percentage={skill.percentage}
                        delay={skillIndex * 80}
                      />
                    ))}
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          <div className="mt-20">
            <SkillCards cards={skillCards} />
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <AnimateOnScroll>
          <SectionHeader
            title="Design & Development Process"
            intro="A structured, collaborative approach — from initial discovery to launch and beyond. Steps advance automatically as you scroll through the workflow."
          />
        </AnimateOnScroll>
        <DesignProcess steps={designProcess} />
      </section>

      <CtaSection />
    </>
  );
}
