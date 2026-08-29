"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reducedMotion.matches || !("IntersectionObserver" in window)) return;

    let observer: IntersectionObserver | undefined;

    // Wait until the streamed server markup has hydrated before changing classes.
    const setupTimer = window.setTimeout(() => {
      const elements = Array.from(
        document.querySelectorAll<HTMLElement>("[data-reveal]"),
      );

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.remove("reveal-pending");
              entry.target.classList.add("reveal-visible");
            } else {
              entry.target.classList.remove("reveal-visible");
              entry.target.classList.add("reveal-pending");
            }
          });
        },
        { rootMargin: "0px 0px -6%", threshold: 0.06 },
      );

      elements.forEach((element) => {
        if (element.getBoundingClientRect().top > window.innerHeight * 0.88) {
          element.classList.add("reveal-pending");
        }
        observer?.observe(element);
      });
    }, 250);

    return () => {
      window.clearTimeout(setupTimer);
      observer?.disconnect();
    };
  }, [pathname]);

  return null;
}
