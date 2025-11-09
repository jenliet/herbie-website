import React from "react";
import { useInView } from "../../hooks/useInView";

type RevealProps = {
  /** Delay the animation start (e.g., "0ms", "150ms", "300ms") */
  delay?: string;
  /** Optional extra Tailwind classes */
  className?: string;
  /** Animate only on first view (default true) */
  once?: boolean;
  children: React.ReactNode;
};

const Reveal: React.FC<RevealProps> = ({
  delay = "0ms",
  className = "",
  once = true,
  children,
}) => {
  const { ref, inView } = useInView<HTMLDivElement>({ once });

  return (
    <div
      ref={ref}
      className={`${inView ? "reveal-in" : "reveal-hidden"} ${className}`}
      style={{ animationDelay: delay }}
    >
      {children}
    </div>
  );
};

export default Reveal;
