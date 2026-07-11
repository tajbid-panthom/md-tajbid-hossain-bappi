import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <section className="border-y border-white/5 bg-card/30 py-16 md:py-20">
      <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
        <h2 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
          Discover how a website can
          <br className="hidden sm:block" /> help your business
        </h2>
        <Button asChild size="lg" className="mt-8">
          <Link href="/contact">Contact Me</Link>
        </Button>
      </div>
    </section>
  );
}
