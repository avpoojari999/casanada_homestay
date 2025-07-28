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
            <h2>About Us</h2>
            <h3>Our Philosophy</h3>
            <p><strong>Casanada Homestay</strong> is a tranquil retreat on Mattu Beach, blending timeless architecture with natural comfort.<br /><br />
              Built with handcrafted bricks, mud walls, and laterite stone, our eco-friendly homestay stays cool and inviting year-round.<br /><br />
              Every detail reflects sustainability, comfort, and heritage offering you a peaceful escape in harmony with nature.</p>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="gallery">
        <h2>Gallery</h2>
        <div className="images">
          <a
            href="https://www.instagram.com/p/DMHx66AKSbT/?igsh=djNvbjdwd25ob2ln"
            target="_blank"
            rel="noopener noreferrer"
          >
          <img src={process.env.PUBLIC_URL + '/images/resort1.jpg'} alt="Resort View" /></a>
          <a
            href="https://www.instagram.com/p/DMHtCENKt9s/?igsh=cjhlcHkxa2JkaXB4"
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

      {/* BOOK NOW SECTION */}
      <section
        className="book-now"
        style={{
          maxWidth: 700,
          margin: '2em auto',
          background: '#f8f9fa',
          borderRadius: 14,
          boxShadow: '0 2px 12px rgba(44,62,80,0.07)',
          padding: '2em 1.5em 1.5em 1.5em',
          textAlign: 'center'
        }}
      >
        <h2 style={{ color: '#1a2a36', fontWeight: 700, fontSize: '2rem', marginBottom: '1.2em' }}>
          Book Now
        </h2>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '2.5em',
          flexWrap: 'wrap'
        }}>
          <a
            href="https://www.airbnb.co.in/rooms/1461761489820842860?guests=1&adults=1&s=67&unique_share_id=7c794354-6d2b-45b8-801b-6ecc817499bf&source_impression_id=p3_1753726475_P3km7EzEMD-kBWQ0&fbclid=PAQ0xDSwL0nWRleHRuA2FlbQIxMQABp38YwB-pwVPfxLJa0dBPK3wE32maB118-_EfhbmPswlWq6vx71fay0CvIRgO_aem_04beUSccPk8qaksm1i-mOw"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textDecoration: 'none' }}
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_Bélo.svg/512px-Airbnb_Logo_Bélo.svg.png"
              alt="Airbnb"
              style={{ width: 60, height: 60, marginBottom: 8, objectFit: 'contain', background: '#fff', borderRadius: '50%', border: '1px solid #eee', padding: 6 }}
            />
            <span style={{ color: '#FF5A5F', fontWeight: 600, fontSize: '1.1em' }}>Airbnb</span>
          </a>
          <a
            href="https://www.agoda.com/en-in/casanada-beach-stay/hotel/katapady-in.html"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textDecoration: 'none' }}
          >
            <img
              src="https://cdn.worldvectorlogo.com/logos/agoda-1.svg"
              alt="Agoda"
              style={{ width: 60, height: 60, marginBottom: 8, background: '#fff', borderRadius: '50%', border: '1px solid #eee', padding: 6 }}
            />
            <span style={{ color: '#1a2a36', fontWeight: 600, fontSize: '1.1em' }}>Agoda</span>
          </a>
          <a
            href="https://www.booking.com/hotel/in/casa-villa-udupi.html"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textDecoration: 'none' }}
          >
            <img
              src="https://cdn.worldvectorlogo.com/logos/bookingcom-1.svg"
              alt="Booking.com"
              style={{ width: 60, height: 60, marginBottom: 8, background: '#fff', borderRadius: '50%', border: '1px solid #eee', padding: 6 }}
            />
            <span style={{ color: '#003580', fontWeight: 600, fontSize: '1.1em' }}>Booking.com</span>
          </a>
        </div>
      </section>

      {/* POLICY SECTION */}
      <section className="policy">
        <h2 style={{ textAlign: 'center', marginBottom: '0.5em', color: '#2c3e50' }}>Casanada Homestay Policy</h2>
        <div style={{
          background: '#f8f9fa',
          borderRadius: '12px',
          padding: '1.5em 1.5em 1em 1.5em',
          boxShadow: '0 2px 12px rgba(44,62,80,0.07)',
          maxWidth: 700,
          margin: '0 auto 2em auto'
        }}>
          <h3 style={{ color: '#007bff', marginTop: 0, textAlign: 'left' }}>Announcements from Casanada Homestay</h3>
          <ul style={{
            lineHeight: 1.7,
            paddingLeft: '1.2em',
            marginBottom: '1.2em',
            color: '#2c3e50',
            fontSize: '1.05rem',
            textAlign: 'left'
          }}>
            <li>
              <strong>No hen, stag or similar parties:</strong> This property will not accommodate such parties. These are often noisy or disruptive, so we avoid them to maintain a peaceful environment for all guests and neighbors.
            </li>
            <li>
              <strong>Identification & Payment:</strong> Guests are required to show a photo identification and credit card upon check-in. All special requests are subject to availability and additional charges may apply.
            </li>
            <li>
              <strong>Advance Payment:</strong> Payment before arrival via bank transfer is required. The property will contact you after booking to provide instructions.
            </li>
            <li>
              <strong>Tax Policy:</strong> Any changes in tax structure due to government policies will result in revised taxes, which will be applicable to all reservations and will be charged additionally during check out.
            </li>
          </ul>
          <h4 style={{ color: '#2c3e50', marginTop: '1.2em', textAlign: 'left' }}>General Policies</h4>
          <ul style={{
            lineHeight: 1.7,
            paddingLeft: '1.2em',
            color: '#2c3e50',
            fontSize: '1.05rem',
            textAlign: 'left'
          }}>
            <li>Check-in: 1:00 PM | Check-out: 11:00 AM</li>
            <li>No smoking inside rooms</li>
            <li>Outside food is allowed</li>
            <li>Quiet hours: 10:00 PM – 7:00 AM</li>
            <li>Guests are responsible for their belongings</li>
            <li>Any damage to property will be charged</li>
          </ul>
          <h4 style={{ color: '#2c3e50', marginTop: '1.2em', textAlign: 'left' }}>Chalet Policies</h4>
          <ul style={{
            lineHeight: 1.7,
            paddingLeft: '1.2em',
            color: '#2c3e50',
            fontSize: '1.05rem',
            textAlign: 'left'
          }}>
            <li>Extra beds are dependent on the room you choose. Please check the individual room capacity for more details.</li>
            <li>When booking more than 5 rooms, different policies and additional supplements may apply.</li>
          </ul>
        </div>
      </section>

       {/* AMENITIES SECTION */}
      <section
        className="amenities"
        style={{
          maxWidth: 700,
          margin: '0 auto 2.5em auto',
          background: '#f8f9fa',
          borderRadius: 14,
          boxShadow: '0 2px 12px rgba(44,62,80,0.07)',
          padding: '1.5em 1.5em 1em 1.5em'
        }}
      >
        <h2
          style={{
            textAlign: 'center',
            color: '#1a2a36',
            marginBottom: '1.2em',
            fontWeight: 700,
            fontSize: '2rem',
            letterSpacing: '1px'
          }}
        >
          Property Amenities
        </h2>
        <ul style={{
          listStyle: 'none',
          padding: 0,
          margin: 0,
          color: '#2c3e50',
          fontSize: '1.13rem',
          maxWidth: 400,
          marginLeft: 'auto',
          marginRight: 'auto',
          textAlign: 'left',
          lineHeight: 2
        }}>
          <li style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '0.5em 0' }}>
  <i className="fas fa-tv" style={{ fontSize: 20, color: '#222', minWidth: 24 }}></i>
  TV
</li>
<li style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '0.5em 0' }}>
  <i className="fas fa-wifi" style={{ fontSize: 20, color: '#222', minWidth: 24 }}></i>
  WiFi
</li>
<li style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '0.5em 0'}}>
  <i className="fas fa-snowflake" style={{ fontSize: 20, color: '#222', minWidth: 24 }}></i>
  Air conditioning
</li>
<li style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '0.5em 0'}}>
  <i className="fas fa-parking" style={{ fontSize: 20, color: '#222', minWidth: 24 }}></i>
  Free parking
</li>
<li style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '0.5em 0'}}>
  <img
    src="https://cdn-icons-png.flaticon.com/512/7969/7969731.png"
    alt="Balcony"
    style={{
      width: 24,
      height: 24,
      filter: 'grayscale(0) brightness(1.1) contrast(1.5) drop-shadow(0 0 1px #222)',
      opacity: 0.95,
      minWidth: 24
    }}
  />
  Balcony
</li>
<li style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '0.5em 0' }}>
  <img
    src="https://cdn-icons-png.flaticon.com/512/1207/1207274.png"
    alt="Terrace"
    style={{
      width: 24,
      height: 24,
      filter: 'grayscale(0) brightness(1.1) contrast(1.5) drop-shadow(0 0 1px #222)',
      opacity: 0.95,
      minWidth: 24
    }}
  />
  Terrace
</li>
<li style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '0.5em 0'}}>
  <i className="fas fa-tree" style={{ fontSize: 20, color: '#222', minWidth: 24 }}></i>
  Garden
</li>
<li style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '0.5em 0' }}>
  <i className="fas fa-umbrella-beach" style={{ fontSize: 20, color: '#222', minWidth: 24 }}></i>
  Beach view
</li>
        </ul>
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
