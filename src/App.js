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
        <blockquote>“The stay was great. Worth of every penny” – Arjun P.</blockquote>
        <blockquote>“I visited Casanada with my mom, and we both absolutely loved the experience. The Airbnb is right on the beach, and the best part is you can actually enjoy the sound of the waves and the beach view straight from your room.
There's a cozy little seating area by the window that's perfect for just relaxing and soaking in the beach vibes—we spent a lot of time there! The room was super clean, well-maintained, and had everything we needed.
The whole place is in a great spot and very well taken care of. Big thanks to Ajay, the caretaker, who was so kind and helpful throughout our stay. No matter how many times we needed something, he was always there with a smile and ready to help. Would definitely love to come back again. Highly recommend if you're looking for a peaceful beachside getaway!” – Sonali</blockquote>
      </section>

      {/* CONTACT */}
      <section className="contact">
        <h2>Contact Us</h2>
        <p>Email: info.casanada@gmail.com</p>
        <p>Phone: +91 7715839803</p>
        <p>Location: CASANADA Homestay, Mattu Beach, Udupi, Karnataka</p>
      </section>

      <footer>
        <p>&copy; 2025 CASANADA Resort. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
