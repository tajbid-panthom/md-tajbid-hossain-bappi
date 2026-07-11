import type { Metadata } from "next";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { CtaSection } from "@/components/cta-section";
import { SectionHeader } from "@/components/section-header";
import { SkillBar } from "@/components/skill-bar";
import { SkillCards } from "@/components/sections";
import { skillCards, skillCategories } from "@/data/site-data";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        <AnimateOnScroll>
          <SectionHeader
            title="Skills & Experience"
            intro="Proficient in full-stack development with Next.js, FastAPI, and Drizzle ORM. Skilled in creating responsive web interfaces and intuitive user experiences with solid UI/UX design knowledge."
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
      </section>

      <CtaSection />
    </>
  );
}
