import React, { useEffect, useRef, useState } from "react";

interface RevealDownProps {
  children: React.ReactNode;
  /** e.g. "0ms", "150ms", "300ms" */
  delay?: string;
  className?: string;
}

const RevealDown: React.FC<RevealDownProps> = ({
  children,
  delay = "0ms",
  className = "",
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.15, // how much needs to be visible before triggering
      }
    );

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: delay }}
      className={`
        transform transition-all duration-700 ease-out
        ${shown ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default RevealDown;
