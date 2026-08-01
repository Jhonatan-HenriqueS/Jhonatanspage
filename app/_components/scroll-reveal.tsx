"use client";

import { useEffect } from "react";

export function ScrollReveal() {
  useEffect(() => {
    const root = document.documentElement;
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>(".reveal"),
    );
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reducedMotion) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    root.classList.add("scroll-reveal-ready");

    const pendingElements = new Set(elements);
    let animationFrame = 0;
    let observer: IntersectionObserver | null = null;

    const revealElement = (element: HTMLElement) => {
      if (!pendingElements.delete(element)) return;

      element.classList.add("is-visible");
      observer?.unobserve(element);
    };

    const revealElementsInViewport = () => {
      animationFrame = 0;
      const revealLine = window.innerHeight * 0.9;

      pendingElements.forEach((element) => {
        const bounds = element.getBoundingClientRect();

        if (bounds.top <= revealLine && bounds.bottom >= 0) {
          revealElement(element);
        }
      });
    };

    const scheduleViewportCheck = () => {
      if (animationFrame) return;
      animationFrame = window.requestAnimationFrame(revealElementsInViewport);
    };

    if ("IntersectionObserver" in window) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;

            revealElement(entry.target as HTMLElement);
          });
        },
        {
          rootMargin: "0px 0px -8% 0px",
          threshold: 0.01,
        },
      );

      elements.forEach((element) => observer?.observe(element));
    }

    window.addEventListener("scroll", scheduleViewportCheck, { passive: true });
    window.addEventListener("resize", scheduleViewportCheck, { passive: true });
    scheduleViewportCheck();

    return () => {
      observer?.disconnect();
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("scroll", scheduleViewportCheck);
      window.removeEventListener("resize", scheduleViewportCheck);
      root.classList.remove("scroll-reveal-ready");
    };
  }, []);

  return null;
}
