import { useRef } from "react";
import { useIntersectionObserver } from "./use-intersection-observer";

export function useScrollAnimation(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const { isVisible } = useIntersectionObserver(ref, { threshold });

  return { ref, isVisible };
}
