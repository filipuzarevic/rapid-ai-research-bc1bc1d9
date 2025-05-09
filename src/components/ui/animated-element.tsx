
import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

interface AnimatedElementProps {
  children: ReactNode;
  animation: string;
  className?: string;
  delay?: number;
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

const AnimatedElement = ({
  children,
  animation,
  className = "",
  delay = 0,
  threshold = 0.1,
  rootMargin = "0px",
  triggerOnce = true,
}: AnimatedElementProps) => {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold,
    rootMargin,
    triggerOnce,
  });

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={cn(
        "transition-all duration-700",
        isIntersecting ? animation : "opacity-0",
        delay > 0 && isIntersecting ? `delay-[${delay}ms]` : "",
        className
      )}
      style={{
        transitionDelay: delay > 0 ? `${delay}ms` : undefined,
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedElement;
