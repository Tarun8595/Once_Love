import { useEffect, useRef } from "react";
import "./index.css";

export default function LiquidGlassFollower() {
  const lensRef = useRef(null);

  useEffect(() => {
    const moveLens = (e) => {
      const lens = lensRef.current;
      if (!lens) return;

      lens.style.left = e.pageX - 50 + "px";
      lens.style.top = e.pageY - 50 + "px";
    };

    window.addEventListener("mousemove", moveLens);

    return () => {
      window.removeEventListener("mousemove", moveLens);
    };
  }, []);

  return (
    <>
      {/* SVG Filter */}
      <svg width="0" height="0">
        <filter id="liquid-glass">
          <feTurbulence
            type="turbulence"
            baseFrequency="0.007"
            numOctaves="3"
            result="turbulence"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="turbulence"
            scale="30"
          />
        </filter>
      </svg>

      <div ref={lensRef} className="liquid-lens"></div>
    </>
  );
}