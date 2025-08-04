import { useEffect, useState } from "react";
import { useIntersectionObserver } from "../../hooks/use-intersection-observer";

interface AnimatedCounterProps {
  end: number;
  start?: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

export default function AnimatedCounter({ 
  end, 
  start = 0, 
  duration = 2000,
  suffix = "",
  prefix = ""
}: AnimatedCounterProps) {
  const [count, setCount] = useState(start);
  const { ref, isVisible } = useIntersectionObserver();

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      const currentCount = Math.floor(progress * (end - start) + start);
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, end, start, duration]);

  return <span ref={ref as any}>{prefix}{count}{suffix}</span>;
}
