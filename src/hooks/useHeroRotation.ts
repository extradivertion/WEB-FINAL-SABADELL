import { useEffect, useState } from "react";

export function useHeroRotation(imageCount: number, intervalMs = 6000) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (imageCount <= 1) return;

    const timer = window.setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % imageCount);
    }, intervalMs);

    return () => window.clearInterval(timer);
  }, [imageCount, intervalMs]);

  return currentIndex;
}
