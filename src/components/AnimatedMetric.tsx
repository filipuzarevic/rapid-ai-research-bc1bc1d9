import React from "react";
import { useAnimatedCounter } from "@/hooks/use-animated-counter";

interface AnimatedMetricProps {
  metric: string;
}

const AnimatedMetric: React.FC<AnimatedMetricProps> = ({ metric }) => {
  const { displayValue, elementRef } = useAnimatedCounter(metric, {
    threshold: 0.5,
    duration: 2000,
  });

  return (
    <div ref={elementRef} className="text-5xl font-bold text-agency-navy font-mono">
      {displayValue}
    </div>
  );
};

export default AnimatedMetric;
