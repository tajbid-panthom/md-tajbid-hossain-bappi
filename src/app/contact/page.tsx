import type { Metadata } from "next";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { ContactForm } from "@/components/contact-form";
import { SectionHeader } from "@/components/section-header";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
      <AnimateOnScroll>
        <SectionHeader
          title="Get in touch"
          intro="Feel free to reach out for collaboration, project inquiries, or just to say hello. I'm always open to new opportunities and meaningful connections."
        />
      </AnimateOnScroll>
      <ContactForm />
    </section>
  );
}
