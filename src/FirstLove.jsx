import "./index.css";

function FirstLove() {
  return (
    <section className="first-love-section">
      <div className="first-love-container">
        <div className="first-love-top">
          <h5>2026</h5>
          <h1>THE FIRST LOVE</h1>
          <p>where every heartbeat begins</p>
        </div>
        <div className="first-love-media-wrapper">
            <img src="/inlove.jpg" alt="" />
            <video src="/first_love.mp4" autoPlay muted loop/>
            <img src="/purpose.jpg" alt="" />
        </div>
        <div className="first-love-bottom">
          <h1>The innocence of first love, <br></br> the memory of forever.</h1>
        </div>
      </div>
    </section>
  );
}

export default FirstLove;