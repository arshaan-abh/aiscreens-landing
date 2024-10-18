import { useState, useEffect, useRef } from "react";

// Custom Hook to observe elements
const useIntersectionObserver = (sectionIds: string[]) => {
  const [activeSection, setActiveSection] = useState("");
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const observerOptions = {
      root: null, // observes intersections relative to the viewport
      rootMargin: "0px",
      threshold: 0.5, // trigger when at least 50% of the target is visible
    };

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    // Observe all sections
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observerRef.current?.observe(el);
    });

    // Cleanup
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [sectionIds]);

  return activeSection;
};

export default useIntersectionObserver;
