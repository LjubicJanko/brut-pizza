import { useEffect, useState, useRef, MutableRefObject } from 'react';

function useIntersectionObserver(): [
  MutableRefObject<HTMLDivElement | null>,
  boolean
] {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const currentRef = ref.current;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;

        if (entry.intersectionRatio > 0.15) {
          setIsVisible(true);
        } else if (entry.intersectionRatio < 0.1) {
          setIsVisible(false);
        }
      },
      {
        threshold: [0.1, 0.15],
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return [ref, isVisible];
}

export default useIntersectionObserver;
