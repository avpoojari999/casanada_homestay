import React, { useState } from 'react';
import './style.css';

function App() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [expanded, setExpanded] = useState(false);

  const testimonials = [
    {
      text: "I visited Casanada with my mom, and we both absolutely loved the experience. The Airbnb is right on the beach, and the best part is you can actually enjoy the sound of the waves and the beach view straight from your room.There's a cozy little seating area by the window that's perfect for just relaxing and soaking in the beach vibes we spent a lot of time there! The room was super clean, well-maintained, and had everything we needed.The whole place is in a great spot and very well taken care of. Big thanks to Ajay, the caretaker, who was so kind and helpful throughout our stay. No matter how many times we needed something, he was always there with a smile and ready to help. Would definitely love to come back again. Highly recommend if you're looking for a peaceful beachside getaway!",
      author: "Sonali"
    },
    {
      text: "We loved the ambience and the fact that it was literally on the beach. Very serene and quiet surroundings, away from the maddening crowd. Clean and neat. Would have been more convenient if there was a facility in the room to prepare our own tea/coffee, particularly the morning tea after waking up. Availability of inhouse snacks would go a long way.",
      author: "Sethi"
    },
    {
      text: "The stay was great. Worth of every penny",
      author: "Arjun"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    setExpanded(false);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setExpanded(false);
  };

  // Mobile truncation logic
  const isMobile = () => window.innerWidth <= 700;
  const MAX_MOBILE_CHARS = 180;
  const currentText = testimonials[currentTestimonial].text;
  const showTruncate = isMobile() && currentText.length > MAX_MOBILE_CHARS && !expanded;
  const displayText = showTruncate
    ? currentText.slice(0, MAX_MOBILE_CHARS) + '...'
    : currentText;

  return (
    <div>
      {/* HERO */}
      <header className="hero">
        <div
          className="hero-blur-bg"
          style={
            window.innerWidth <= 700
              ? {
                  background: `url(${process.env.PUBLIC_URL + '/images/resort1.jpg'}) center center / cover no-repeat`,
                  filter: 'blur(18px) brightness(0.7)',
                  opacity: 1,
                  transition: 'opacity 0.3s',
                  display: 'block',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  zIndex: 0
                }
              : {}
          }
        ></div>
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
          <a
            href="https://www.instagram.com/p/DMH67kPK7VX/?igsh=OTIxaDhjbjhhcXQ4"
            target="_blank"
            rel="noopener noreferrer"
          >
          <img src={process.env.PUBLIC_URL + '/images/resort1.jpg'} alt="Resort View" /></a>
          <a
            href="https://www.instagram.com/p/DMH67kPK7VX/?igsh=OTIxaDhjbjhhcXQ4"
            target="_blank"
            rel="noopener noreferrer"
          ><img src={process.env.PUBLIC_URL + '/images/resort2.jpg'} alt="Beach View" /></a>
          <a
            href="https://www.instagram.com/p/DMH67kPK7VX/?igsh=OTIxaDhjbjhhcXQ4"
            target="_blank"
            rel="noopener noreferrer"
          ><img src={process.env.PUBLIC_URL + '/images/resort3.jpg'} alt="Room Interior" /></a>
        </div>
      </section>

      {/* TESTIMONIALS CAROUSEL */}
      <section className="testimonials">
        <h2>What Our Guests Say</h2>
        <div className="testimonials-carousel">
          <button className="carousel-btn prev-btn" onClick={prevTestimonial}>
            &#8249;
          </button>
          <div className="testimonial-content">
            <blockquote>
              <div className={`testimonial-text${expanded ? ' expanded' : ''}`}>
                "{displayText}" — {testimonials[currentTestimonial].author}
                {isMobile() && currentText.length > MAX_MOBILE_CHARS && (
                  <span
                    className="view-more"
                    onClick={() => setExpanded((prev) => !prev)}
                    style={{ color: '#007bff', cursor: 'pointer', marginLeft: 8 }}
                  >
                    {expanded ? 'View less' : 'View more'}
                  </span>
                )}
              </div>
            </blockquote>
          </div>
          <button className="carousel-btn next-btn" onClick={nextTestimonial}>
            &#8250;
          </button>
        </div>
        <div className="carousel-indicators">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentTestimonial ? 'active' : ''}`}
              onClick={() => { setCurrentTestimonial(index); setExpanded(false); }}
            />
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact">
        <div className="contact-card">
          <h2>Contact Us</h2>
          <div className="contact-details">
            <div className="contact-row">
              <span className="contact-icon" role="img" aria-label="email">📧</span>
              <a href="mailto:info.casanada@gmail.com" className="contact-link">info.casanada@gmail.com</a>
            </div>
            <div className="contact-row">
              <span className="contact-icon" role="img" aria-label="phone">📞</span>
              <a href="tel:+917715839803" className="contact-link">+91 7715839803</a>
            </div>
            <div className="contact-row">
              <span className="contact-icon" role="img" aria-label="location">📍</span>
              {/* <a
                href="https://www.google.com/maps?q=13.27356,+74.72531"
                className="contact-link"
                target="_blank"
                rel="noopener noreferrer"
              > */}
                Casanada homestay, Near Mattu Beach, Udupi, Karnataka-574118
              {/* </a> */}
            </div>
          </div>
          <div className="contact-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242.7019712388525!2d74.72536654984616!3d13.273466249514291!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbcb10011b44245%3A0xac13c00a3573b2ea!2sCasanada%20homestay!5e0!3m2!1sen!2sin!4v1753620388665!5m2!1sen!2sin"
              width="100%"
              height="250"
              style={{ border: 0, borderRadius: '12px', marginTop: '1.5em' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Casanada Homestay Location"
            ></iframe>
          </div>
        </div>
      </section>

      <footer>
        <p>&copy; 2025 CASANADA Resort. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
