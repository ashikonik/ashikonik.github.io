import { useEffect, useRef } from "react";

/**
 * Add `visible` to a single element when it enters the viewport. The element
 * also needs the `fade-in` class to style the resting and revealed states.
 *
 * The 0.1 threshold combined with a -10% bottom rootMargin means the element
 * is considered entered when its top crosses 10% above the viewport bottom;
 * that fires on full-height sections instead of waiting for 10% of one large
 * block to scroll past, which would never happen mid-page.
 *
 * `prefers-reduced-motion` skips the transform but keeps the opacity change
 * for comprehension.
 */
export default function useFadeIn() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("visible");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}