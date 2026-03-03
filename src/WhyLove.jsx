import { useEffect, useRef, useState } from "react";
import "./index.css";

function WhyLove() {
  const refs = useRef([]);
  const [visible, setVisible] = useState([]);

  const data = [
    {
      text: "Love Brings Inner Peace",
      image: "/peace.jpg",
    },
    {
      text: "A Safe Space to Share Your Emotions",
      image: "/share_emotion.jpg",
    },
    {
      text: "Someone Always Stands With You",
      image: "/support.jpg",
    },
    {
      text: "Love Gives Life a Purpose",
      image: "/purpose_life.jpg",
    },
    
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = refs.current.indexOf(entry.target);
            setVisible((prev) => [...prev, index]);
          }
        });
      },
      { threshold: 0.3 }
    );

    refs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="why-love-section">
      <h1 className="why-love-heading">Why Love Is Important ?</h1>
      <p className="why-love-subheading">
        Love shapes our emotions, strengthens our hearts, and gives life deeper meaning.
      </p>

      <div className="why-love-container">
        {data.map((item, index) => (
        <div
            key={index}
            ref={(el) => (refs.current[index] = el)}
            className={`why-love-row 
            ${index % 2 === 0 ? "from-left" : "from-right"} 
            ${visible.includes(index) ? "show" : ""}`}
        >
            <div className="why-love-image">
              <img src={item.image} alt="" />
            </div>

            <div className="why-love-text">
              <h2>{item.text}</h2>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyLove;