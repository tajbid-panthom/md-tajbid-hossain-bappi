import type { Metadata } from "next";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { CtaSection } from "@/components/cta-section";
import { SectionHeader } from "@/components/section-header";
import { ResponsibilityCards } from "@/components/sections";
import { responsibilities } from "@/data/site-data";

export const metadata: Metadata = {
  title: "Services",
};

export default function ServicesPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        <AnimateOnScroll>
          <SectionHeader title="What I do" />
        </AnimateOnScroll>
        <ResponsibilityCards cards={responsibilities} />
      </section>
      <CtaSection />
    </>
  );
}
