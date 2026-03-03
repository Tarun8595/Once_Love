import React, { useState } from "react";
import axios from "axios";
import "./index.css";

const Comment = () => {
  const [formData, setFormData] = useState({
    username: "",
    partner_name: "",
    love_duration: "",
    email: "",
    love_advice: "",
  });

  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });

    if (image) {
      data.append("image", image);
    }

    try {
      await axios.post("http://localhost:5000/send-love-story", data);

      alert("Love Story Sent Successfully 💌");

      setFormData({
        username: "",
        partner_name: "",
        love_duration: "",
        email: "",
        love_advice: "",
      });

      setImage(null);
    } catch (error) {
      alert("Failed to send 😢");
    }

    setLoading(false);
  };

  return (
    <div id="Contact" className="comment-section">
      <div className="love-container">
        <div className="love-card">

          {/* Left Image */}
          <div className="love-image">
           <h1>Have Your remember your once love ?</h1>
          </div>

          {/* Right Form */}
          <div className="love-form-section">
            <h2>Share your once love story</h2>
            <p className="subtitle">
              Every love story is special. Share your beautiful memories 💖
            </p>

            <form onSubmit={handleSubmit} className="love-form">

              <input
                type="text"
                name="username"
                placeholder="Your Name"
                value={formData.username}
                onChange={handleChange}
                required
              />

              <input
                type="text"
                name="partner_name"
                placeholder="Partner Name"
                value={formData.partner_name}
                onChange={handleChange}
                required
              />

              <input
                type="text"
                name="love_duration"
                placeholder="Love Duration (Optional)"
                value={formData.love_duration}
                onChange={handleChange}
              />
               <input
                type="file"
                onChange={(e) => setImage(e.target.files[0])}
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />


              <textarea
                name="love_advice"
                placeholder="Your Love Advice..."
                value={formData.love_advice}
                onChange={handleChange}
                required
              />

              <button type="submit" disabled={loading}>
                {loading ? "Sending..." : "Send Love Story"}
              </button>

              {loading && <div className="loader"></div>}

            </form>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/918368180387"
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-btn"
            >
              Chat on WhatsApp
            </a>
           <div className="social-icons">
              <a href="https://www.instagram.com/gtsyntax/" className="social_icon"><img src="https://cdn-icons-png.flaticon.com/128/4138/4138124.png" alt="insatgram" /></a>
              <a href="https://www.linkedin.com/in/tarun-kushwaha-web/" className="social_icon"><img src="https://cdn-icons-png.flaticon.com/128/4494/4494497.png" alt="linkdin" /></a>
              <a href="https://github.com/Tarun8595" className="social_icon"><img src="https://cdn-icons-png.flaticon.com/128/2175/2175377.png" alt="github" /></a>
           </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;