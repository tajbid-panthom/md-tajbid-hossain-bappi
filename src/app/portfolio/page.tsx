import type { Metadata } from "next";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { CtaSection } from "@/components/cta-section";
import { SectionHeader } from "@/components/section-header";
import { ProjectDetailList } from "@/components/sections";
import { projects } from "@/data/site-data";

export const metadata: Metadata = {
  title: "Portfolio",
};

export default function PortfolioPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        <AnimateOnScroll>
          <SectionHeader
            title="Selected Works"
            intro="Production web applications and full-stack projects — from donor management platforms and corporate sites to e-learning and social media applications."
          />
        </AnimateOnScroll>
        <ProjectDetailList projects={projects} />
      </section>
      <CtaSection />
    </>
  );
}
