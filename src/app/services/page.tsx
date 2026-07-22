import type { Metadata } from "next";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { CtaSection } from "@/components/cta-section";
import { DesignProcess } from "@/components/design-process";
import { SectionHeader } from "@/components/section-header";
import { ResponsibilityCards } from "@/components/sections";
import { ServiceCards } from "@/components/service-cards";
import {
  designProcess,
  howIDo,
  services,
  siteConfig,
  whatIDo,
} from "@/data/site-data";

export const metadata: Metadata = {
  title: "Services",
  description: `Web development services by ${siteConfig.name} — custom apps, e-commerce, corporate sites, UI/UX design, and ongoing support.`,
};

export default function ServicesPage() {
  return (
    <>
      {/* Services Overview */}
      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        <AnimateOnScroll>
          <SectionHeader
            title="Services I Offer"
            intro="End-to-end web development services — from strategy and design to development, deployment, and ongoing support. Built on proven experience delivering production platforms for businesses across Bangladesh and beyond."
          />
        </AnimateOnScroll>
        <ServiceCards services={services} />
      </section>

      {/* What I Do */}
      <section className="border-y border-white/5 bg-card/20 py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <AnimateOnScroll>
            <SectionHeader
              title="What I Do"
              intro="End-to-end web development across e-commerce, SaaS, corporate sites, and custom applications — built with modern tools and a focus on real business outcomes."
            />
          </AnimateOnScroll>
          <ResponsibilityCards cards={whatIDo} />
        </div>
      </section>

      {/* Design & Development Process */}
      <section className="border-y border-white/5 bg-card/20 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <AnimateOnScroll>
            <SectionHeader
              title="Design & Development Process"
              intro="A structured, step-by-step workflow — from discovery and wireframing to development, launch, and ongoing support. Steps advance automatically so you can see how each project moves forward."
            />
          </AnimateOnScroll>
          <DesignProcess steps={designProcess} />
        </div>
      </section>

      {/* How I Do It */}
      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        <AnimateOnScroll>
          <SectionHeader
            title="How I Do It"
            intro="Beyond the process above, every engagement is built on clear communication, quality code, and a partnership mindset."
          />
        </AnimateOnScroll>
        <ResponsibilityCards cards={howIDo} />
      </section>

      <CtaSection />
    </>
  );
}
