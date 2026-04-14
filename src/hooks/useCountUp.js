import { useState, useEffect, useRef } from "react";

export function useCountUp(end, duration = 2000) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    const numericEnd = parseInt(end, 10);
    if (isNaN(numericEnd) || numericEnd === 0) {
      setCount(0);
      return;
    }

    let startTime;
    let animId;

    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * numericEnd));

      if (progress < 1) {
        animId = requestAnimationFrame(step);
      }
    }

    animId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animId);
  }, [hasStarted, end, duration]);

  return { count, ref };
}
