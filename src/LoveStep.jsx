import { useEffect, useRef, useState } from "react";
import "./index.css";

function LoveStart(props) {
  const frameRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (frameRef.current) {
      observer.observe(frameRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const frame_style = {
    backgroundColor: props.bg_color,
    "--hover-image": `url(${props.bg_image})`,
  };

  return (
    <li
      ref={frameRef}
      className={`love-step-frame ${visible ? "slide-up-show" : ""}`}
    >
      <div className="love-step" style={frame_style}>
        <h1 className="love-step-text">{props.text}</h1>
        <p className="love-step-mean">{props.mean}</p>
      </div>
    </li>
  );
}

export default LoveStart;