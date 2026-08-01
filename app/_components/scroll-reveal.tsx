"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const REVEAL_START = "top bottom";

function getRevealDelay(element: HTMLElement) {
  const value = window
    .getComputedStyle(element)
    .getPropertyValue("--reveal-delay")
    .trim();
  const delay = Number.parseFloat(value);

  if (!Number.isFinite(delay)) return 0;
  return value.endsWith("ms") ? delay / 1000 : delay;
}

function getRevealOffset(element: HTMLElement) {
  if (element.dataset.reveal === "left") return { x: -26, y: 0 };
  if (element.dataset.reveal === "right") return { x: 26, y: 0 };
  return { x: 0, y: 26 };
}

export function ScrollReveal() {
  useGSAP(() => {
    const root = document.documentElement;
    const elements = gsap.utils.toArray<HTMLElement>(".reveal");
    let active = true;
    let refreshFrame = 0;

    root.classList.add("scroll-reveal-ready", "scroll-reveal-mounted");

    elements.forEach((element) => {
      const offset = getRevealOffset(element);

      element.classList.remove("is-visible");

      gsap.fromTo(
        element,
        {
          autoAlpha: 0,
          scale: 0.992,
          x: offset.x,
          y: offset.y,
        },
        {
          autoAlpha: 1,
          delay: getRevealDelay(element),
          duration: 0.86,
          ease: "power3.out",
          scale: 1,
          scrollTrigger: {
            trigger: element,
            start: REVEAL_START,
            once: true,
            invalidateOnRefresh: true,
          },
          x: 0,
          y: 0,
          onComplete: () => {
            element.classList.add("is-visible");
            gsap.set(element, {
              clearProps: "opacity,transform,visibility",
            });
          },
        },
      );
    });

    const refreshPositions = () => {
      window.cancelAnimationFrame(refreshFrame);
      refreshFrame = window.requestAnimationFrame(() => {
        if (active) ScrollTrigger.refresh();
      });
    };

    window.addEventListener("load", refreshPositions, { once: true });
    window.addEventListener("pageshow", refreshPositions);
    window.addEventListener("orientationchange", refreshPositions);

    void document.fonts?.ready.then(refreshPositions);
    refreshPositions();

    return () => {
      active = false;
      window.cancelAnimationFrame(refreshFrame);
      window.removeEventListener("load", refreshPositions);
      window.removeEventListener("pageshow", refreshPositions);
      window.removeEventListener("orientationchange", refreshPositions);
      elements.forEach((element) => element.classList.remove("is-visible"));
      root.classList.remove("scroll-reveal-ready", "scroll-reveal-mounted");
    };
  }, []);

  return null;
}
