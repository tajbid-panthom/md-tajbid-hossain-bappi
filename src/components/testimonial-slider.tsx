"use client";

import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type Testimonial = {
  quote: string;
  name: string;
  title: string;
  affiliation: string;
};

const AUTO_SLIDE_MS = 5000;

function useVisibleCount() {
  const [count, setCount] = useState(1);

  useEffect(() => {
    const update = () => {
      if (window.innerWidth >= 1024) setCount(3);
      else if (window.innerWidth >= 768) setCount(2);
      else setCount(1);
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return count;
}

export function TestimonialSlider({ testimonials }: { testimonials: Testimonial[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const visibleCount = useVisibleCount();
  const maxIndex = Math.max(testimonials.length - visibleCount, 0);

  const goTo = useCallback(
    (index: number) => {
      setCurrentIndex(Math.max(0, Math.min(index, maxIndex)));
    },
    [maxIndex]
  );

  const next = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prev = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(next, AUTO_SLIDE_MS);
    return () => clearInterval(timer);
  }, [isPaused, next]);

  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [currentIndex, maxIndex, visibleCount]);

  const trackWidthPercent = (testimonials.length / visibleCount) * 100;
  const itemWidthPercent = 100 / testimonials.length;
  const translatePercent = (currentIndex / testimonials.length) * 100;

  return (
    <div
      className="relative px-10 md:px-14"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            width: `${trackWidthPercent}%`,
            transform: `translateX(-${translatePercent}%)`,
          }}
        >
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="shrink-0 px-3"
              style={{ width: `${itemWidthPercent}%` }}
            >
              <Card className="relative h-full overflow-hidden border-white/5 bg-card/60">
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
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        onClick={prev}
        aria-label="Previous testimonial"
        className="absolute left-0 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-background/80 text-primary shadow-lg backdrop-blur-sm transition-colors hover:border-accent/40 hover:text-accent"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        onClick={next}
        aria-label="Next testimonial"
        className="absolute right-0 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-background/80 text-primary shadow-lg backdrop-blur-sm transition-colors hover:border-accent/40 hover:text-accent"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <div className="mt-8 flex items-center justify-center gap-2">
        {Array.from({ length: maxIndex + 1 }).map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => goTo(index)}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === currentIndex ? "true" : undefined}
            className={cn(
              "h-2 rounded-full transition-all duration-300",
              index === currentIndex
                ? "w-8 bg-accent"
                : "w-2 bg-white/20 hover:bg-white/40"
            )}
          />
        ))}
      </div>
    </div>
  );
}
