"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  Code2,
  Headphones,
  Layout,
  Palette,
  Rocket,
  Search,
  type LucideIcon,
} from "lucide-react";
import type { DesignProcessStep } from "@/data/site-data";
import { cn } from "@/lib/utils";

const stepIcons: LucideIcon[] = [Search, Layout, Palette, Code2, Rocket, Headphones];

const AUTO_ADVANCE_MS = 4000;

interface DesignProcessProps {
  steps: DesignProcessStep[];
}

export function DesignProcess({ steps }: DesignProcessProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [progress, setProgress] = useState(0);
  const progressRef = useRef<ReturnType<typeof requestAnimationFrame> | null>(null);
  const startTimeRef = useRef(0);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.2 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const goToStep = useCallback((index: number) => {
    setActiveStep(index);
    setProgress(0);
    startTimeRef.current = performance.now();
  }, []);

  const nextStep = useCallback(() => {
    setActiveStep((prev) => (prev + 1) % steps.length);
    setProgress(0);
    startTimeRef.current = performance.now();
  }, [steps.length]);

  useEffect(() => {
    if (!isInView || isPaused) return;

    startTimeRef.current = performance.now();

    const animate = (now: number) => {
      const elapsed = now - startTimeRef.current;
      const pct = Math.min((elapsed / AUTO_ADVANCE_MS) * 100, 100);
      setProgress(pct);

      if (pct >= 100) {
        nextStep();
        return;
      }

      progressRef.current = requestAnimationFrame(animate);
    };

    progressRef.current = requestAnimationFrame(animate);

    return () => {
      if (progressRef.current) cancelAnimationFrame(progressRef.current);
    };
  }, [activeStep, isInView, isPaused, nextStep]);

  const current = steps[activeStep];
  const Icon = stepIcons[activeStep] ?? Search;

  return (
    <div
      ref={containerRef}
      className="relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => {
        setIsPaused(false);
        startTimeRef.current = performance.now();
        setProgress(0);
      }}
      onFocus={() => setIsPaused(true)}
      onBlur={() => {
        setIsPaused(false);
        startTimeRef.current = performance.now();
        setProgress(0);
      }}
    >
      {/* Step indicators — desktop */}
      <div className="hidden md:grid md:grid-cols-6 md:gap-2">
        {steps.map((step, index) => {
          const StepIcon = stepIcons[index] ?? Search;
          const isActive = index === activeStep;
          const isCompleted = index < activeStep;

          return (
            <button
              key={step.step}
              type="button"
              onClick={() => goToStep(index)}
              className="group relative flex flex-col items-center gap-3 p-3 text-center transition-all"
              aria-current={isActive ? "step" : undefined}
            >
              <div
                className={cn(
                  "relative flex h-14 w-14 items-center justify-center rounded-full border-2 transition-all duration-500",
                  isActive
                    ? "scale-110 border-accent bg-accent/15 shadow-lg shadow-accent/20"
                    : isCompleted
                      ? "border-accent/60 bg-accent/10"
                      : "border-white/10 bg-card/40 group-hover:border-accent/40"
                )}
              >
                <StepIcon
                  className={cn(
                    "h-6 w-6 transition-colors duration-300",
                    isActive ? "text-accent" : isCompleted ? "text-accent/70" : "text-muted-foreground"
                  )}
                />
                {isActive && (
                  <svg
                    className="absolute inset-0 -rotate-90"
                    viewBox="0 0 56 56"
                    aria-hidden="true"
                  >
                    <circle
                      cx="28"
                      cy="28"
                      r="26"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-accent/20"
                    />
                    <circle
                      cx="28"
                      cy="28"
                      r="26"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      className="text-accent"
                      strokeDasharray={`${2 * Math.PI * 26}`}
                      strokeDashoffset={`${2 * Math.PI * 26 * (1 - progress / 100)}`}
                    />
                  </svg>
                )}
              </div>
              <span
                className={cn(
                  "text-xs font-medium leading-tight transition-colors duration-300",
                  isActive ? "text-accent" : "text-muted-foreground group-hover:text-primary"
                )}
              >
                {step.title.split(" & ")[0]}
              </span>
            </button>
          );
        })}
      </div>

      {/* Step indicators — mobile */}
      <div className="flex gap-2 overflow-x-auto pb-2 md:hidden">
        {steps.map((step, index) => {
          const StepIcon = stepIcons[index] ?? Search;
          const isActive = index === activeStep;

          return (
            <button
              key={step.step}
              type="button"
              onClick={() => goToStep(index)}
              className={cn(
                "flex shrink-0 items-center gap-2 rounded-full border px-3 py-2 text-xs font-medium transition-all",
                isActive
                  ? "border-accent bg-accent/15 text-accent"
                  : "border-white/10 bg-card/40 text-muted-foreground"
              )}
            >
              <StepIcon className="h-4 w-4" />
              Step {step.step}
            </button>
          );
        })}
      </div>

      {/* Active step content — visible immediately, animates on change */}
      <div className="mt-10 md:mt-14">
        <div
          key={activeStep}
          className="animate-process-in relative overflow-hidden rounded-2xl border border-white/5 bg-card/50 p-6 md:p-10"
        >
          <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-accent/5 blur-2xl" />
          <div className="absolute -bottom-8 -left-8 h-24 w-24 rounded-full bg-accent/5 blur-2xl" />

          <div className="relative grid items-start gap-8 md:grid-cols-[auto_1fr]">
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-accent/30 bg-accent/10">
                <Icon className="h-8 w-8 text-accent" />
              </div>
              <div className="md:hidden">
                <p className="text-sm font-medium text-accent">Step {current.step}</p>
                <h3 className="text-xl font-bold text-primary">{current.title}</h3>
              </div>
            </div>

            <div>
              <div className="hidden md:block">
                <p className="text-sm font-medium text-accent">
                  Step {current.step} of {steps.length}
                </p>
                <h3 className="mt-1 text-2xl font-bold text-primary md:text-3xl">
                  {current.title}
                </h3>
              </div>
              <p className="mt-4 leading-relaxed text-muted-foreground md:mt-5">
                {current.description}
              </p>

              <div className="mt-6">
                <p className="text-sm font-semibold uppercase tracking-wider text-primary/80">
                  Key Deliverables
                </p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {current.deliverables.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-accent/20 bg-accent/10 px-4 py-1.5 text-sm text-accent"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="relative mt-8 h-1 overflow-hidden rounded-full bg-white/5">
            <div
              className="absolute inset-y-0 left-0 rounded-full bg-linear-to-r from-accent/60 to-accent transition-all duration-100 ease-linear"
              style={{
                width: `${((activeStep + progress / 100) / steps.length) * 100}%`,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
