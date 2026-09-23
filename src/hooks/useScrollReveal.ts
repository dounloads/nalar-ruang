import { useEffect } from "react";

export function useScrollReveal() {
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) return;

    let context: { revert: () => void } | undefined;
    let active = true;

    Promise.all([import("gsap"), import("gsap/ScrollTrigger")]).then(([gsapModule, triggerModule]) => {
      if (!active) return;
      const gsap = gsapModule.gsap;
      const ScrollTrigger = triggerModule.ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);
      context = gsap.context(() => {
        document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((section) => {
          const items = section.querySelectorAll<HTMLElement>("[data-reveal-item]");
          gsap.fromTo(
            items,
            { opacity: 0, y: 22 },
            {
              opacity: 1,
              y: 0,
              duration: 0.72,
              stagger: 0.08,
              ease: "power2.out",
              scrollTrigger: { trigger: section, start: "top 82%", once: true },
            },
          );
        });
      });
    });

    return () => {
      active = false;
      context?.revert();
    };
  }, []);
}