"use client";

import { useEffect } from "react";

export function MotionController() {
  useEffect(() => {
    const root = document.documentElement;
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const revealGroups = new Map<Element, HTMLElement[]>();

    elements.forEach((element) => {
      const trigger =
        element.dataset.reveal === "project"
          ? element
          : (element.parentElement ?? element);
      const group = revealGroups.get(trigger) ?? [];
      group.push(element);
      revealGroups.set(trigger, group);
    });

    root.classList.add("motion-ready");

    if (reducedMotion || !("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return () => root.classList.remove("motion-ready");
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          revealGroups
            .get(entry.target)
            ?.forEach((element) => element.classList.add("is-visible"));
          observer.unobserve(entry.target);
        });
      },
      {
        rootMargin: "0px 0px -3% 0px",
        threshold: 0.04,
      },
    );

    revealGroups.forEach((group, trigger) => {
      const bounds = trigger.getBoundingClientRect();

      if (bounds.top < window.innerHeight * 0.92) {
        requestAnimationFrame(() => {
          group.forEach((element) => element.classList.add("is-visible"));
        });
      } else {
        observer.observe(trigger);
      }
    });

    return () => {
      observer.disconnect();
      root.classList.remove("motion-ready");
    };
  }, []);

  return null;
}
