import "./index.css";

const images = [
  { id: 1, src: "/gallery11.png", large: true },
  { id: 2, src: "/gallery12.png" },
  { id: 3, src: "/gallery13.png" },
  { id: 4, src: "/gallery14.png" },
  { id: 6, src: "/gallery17.png", large: true  },
  { id: 5, src: "/gallery15.png" },
  { id: 8, src: "/gallery7.jpg" },
  { id: 9, src: "/gallery18.png" },
  { id: 7, src: "/gallery19.png", large: true }
];

const Gallery = () => {
    
  return (
    <>
    <div id="Gallery" className="gallery-section">
        <section className="gallery">
            <div className="gallery-header">
                <h2>Beauty Of Love</h2>
                <p>Captured moments from our desert trips and scenic routes.</p>
            </div>

            <div className="gallery-grid">
                {images.map((img) => (
                <div
                    key={img.id}
                    className={`gallery-item ${img.large ? "large" : ""}`}
                >
                    <img src={img.src} alt="gallery" />
                </div>
                ))}
            </div>
        </section>
    </div>
    </>
  );
};

export default Gallery;