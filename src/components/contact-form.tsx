"use client";

import { useState } from "react";
import { ExternalLink, Mail, MapPin, MessageCircle } from "lucide-react";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { siteConfig } from "@/data/site-data";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = formData.get("name");
    const email = formData.get("email");
    const subject = formData.get("subject");
    const message = formData.get("message");

    const mailSubject = encodeURIComponent(
      (subject as string) || `Portfolio Contact from ${name}`
    );
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    );

    window.location.href = `mailto:${siteConfig.email}?subject=${mailSubject}&body=${body}`;
    setStatus("success");
    form.reset();
  };

  return (
    <div className="mx-auto max-w-3xl">
      <AnimateOnScroll>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-primary">
                Name
              </label>
              <Input id="name" name="name" placeholder="Enter your name" required />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-primary">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                required
              />
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="subject" className="text-sm font-medium text-primary">
              Subject (Optional)
            </label>
            <Input id="subject" name="subject" placeholder="Enter your subject" />
          </div>
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium text-primary">
              Message
            </label>
            <Textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Enter your message"
              required
            />
          </div>
          <Button type="submit" size="lg">
            Send Message
          </Button>
          {status === "success" && (
            <p className="text-sm text-accent">
              Your email client should open shortly. If it doesn&apos;t, email me
              directly at {siteConfig.email}.
            </p>
          )}
        </form>
      </AnimateOnScroll>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <AnimateOnScroll delay={100}>
          <a
            href={`mailto:${siteConfig.email}`}
            className="flex flex-col items-center gap-3 rounded-xl border border-white/5 bg-card/50 p-6 text-center transition-colors hover:border-accent/30"
          >
            <Mail className="h-6 w-6 text-accent" />
            <span className="text-sm text-primary">{siteConfig.email}</span>
          </a>
        </AnimateOnScroll>
        <AnimateOnScroll delay={150}>
          <a
            href={siteConfig.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-3 rounded-xl border border-white/5 bg-card/50 p-6 text-center transition-colors hover:border-accent/30"
          >
            <MessageCircle className="h-6 w-6 text-accent" />
            <span className="text-sm text-primary">{siteConfig.phone}</span>
          </a>
        </AnimateOnScroll>
        <AnimateOnScroll delay={200}>
          <a
            href={siteConfig.businessWebsite}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-3 rounded-xl border border-white/5 bg-card/50 p-6 text-center transition-colors hover:border-accent/30"
          >
            <ExternalLink className="h-6 w-6 text-accent" />
            <span className="text-sm text-primary">{siteConfig.business}</span>
            <span className="text-xs text-muted-foreground">gonimia.com</span>
          </a>
        </AnimateOnScroll>
        <AnimateOnScroll delay={250}>
          <div className="flex flex-col items-center gap-3 rounded-xl border border-white/5 bg-card/50 p-6 text-center">
            <MapPin className="h-6 w-6 text-accent" />
            <span className="text-sm text-primary">{siteConfig.location}</span>
          </div>
        </AnimateOnScroll>
      </div>
    </div>
  );
}
