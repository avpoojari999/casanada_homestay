import React from 'react';
import './style.css';

function App() {
  return (
    <div>
      {/* HERO */}
      <header className="hero">
        <video autoPlay muted loop className="background-video">
          <source src={process.env.PUBLIC_URL + '/videos/preview.mp4'} type="video/mp4" />
        </video>
        <div className="overlay">
          <h1>Welcome to CASANADA</h1>
          <p>Luxury & Serenity by the Sea</p>
        </div>
      </header>

      {/* ABOUT with VIDEO */}
      <section className="about">
        <div className="about-video-container">
          <video autoPlay muted loop className="about-background-video">
            <source src={process.env.PUBLIC_URL + '/videos/about.mp4'} type="video/mp4" />
          </video>
          <div className="about-overlay">
            <h2>About CASANADA</h2>
            <h3>Our Philosophy</h3>
            <p>We combine elegance and nature to create a serene getaway. Our goal is to make every guest feel at home in paradise.</p>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="gallery">
        <h2>Gallery</h2>
        <div className="images">
          <img src={process.env.PUBLIC_URL + '/images/resort1.jpg'} alt="Resort View" />
          <img src={process.env.PUBLIC_URL + '/images/resort2.jpg'} alt="Beach View" />
          <img src={process.env.PUBLIC_URL + '/images/resort3.jpg'} alt="Room Interior" />
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials">
        <h2>What Our Guests Say</h2>
        <blockquote>“An unforgettable experience. The staff made us feel like royalty!” – Ashik P.</blockquote>
        <blockquote>“Absolutely stunning views and peaceful ambiance.” – Aahana P.</blockquote>
      </section>

      {/* CONTACT */}
      <section className="contact">
        <h2>Contact Us</h2>
        <p>Email: reservations@casanadaresort.com</p>
        <p>Phone: +91 8652894307</p>
        <p>Location: CASA NADA, Mattu Beach, Udupi, Karnataka</p>
      </section>

      <footer>
        <p>&copy; 2025 CASANADA Resort. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
