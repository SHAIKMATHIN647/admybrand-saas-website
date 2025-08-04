import { useEffect, useState, RefObject } from "react";

interface UseIntersectionObserverOptions {
  threshold?: number;
  rootMargin?: string;
}

export function useIntersectionObserver(
  ref?: RefObject<Element>,
  options: UseIntersectionObserverOptions = {}
) {
  const [isVisible, setIsVisible] = useState(false);
  const [internalRef, setInternalRef] = useState<Element | null>(null);

  useEffect(() => {
    const element = ref?.current || internalRef;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || "0px 0px -50px 0px",
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [ref, internalRef, options.threshold, options.rootMargin]);

  const callbackRef = (element: Element | null) => {
    setInternalRef(element);
  };

  return {
    ref: ref || callbackRef,
    isVisible,
  };
}
