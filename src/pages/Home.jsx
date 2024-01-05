// Home.js

import React from "react";
import "./Home.css"; // Import the CSS file for styling
import About from "./About.jsx"
import Contact from "./Contact.jsx"

export default function Home() {
  return (
    <div className="home-container">
      <div className="image-container">
        <img
          src="https://images.unsplash.com/photo-1608942025318-1191eeade556?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dXR0YXJha2hhbmR8ZW58MHx8MHx8fDA%3D"
          alt="Dunagiri Landscape"
        />
        <div className="overlay-card">
          <h1>Welcome to Dunagiri Retreat</h1>
        </div>
      </div>
      <section className="section">
        <h2>About Dunagiri</h2>
        <p>
          Dunagiri is a beautiful destination known for its serene landscapes
          and cultural richness. Nestled in the heart of nature, it offers a
          perfect getaway for those seeking tranquility.
        </p>
      </section>
      <section className="section">
        <h2>Discover Dunagiri</h2>
        <p>
          From scenic mountain views to vibrant local markets, Dunagiri has
          something for everyone. Immerse yourself in the beauty of nature and
          experience the unique culture of this enchanting place.
        </p>
        <div className="card-container">
          <div className="card">
            <img
              src="https://www.euttaranchal.com/tourism/photos/dunagiri-temple-9242182.jpg"
              alt="Card 1"
            />
            <h3>Dunagiri Temple</h3>
          </div>
          <div className="card">
            <img
              src="https://www.himalayanwonders.com/assets/rblue/images/peaks/dunagiri/dronagiri-sunset.jpg"
              alt="Card 2"
            />
            <h3>Dunagiri Sunset</h3>
          </div>
          <div className="card">
            <img
              src="https://www.haidakhandisamaj.in/assets/uploads/hotel/IMG-1678958339.jpg"
              alt="Card 3"
            />
            <h3>HaidaKhan Babaji Temple</h3>
          </div>
        </div>
      </section>
      <section id="about" className="about-section">
        <About />
      </section>
      <section id="about" className="about-section">
        <Contact />
      </section>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-address">
            <p>Village Chari, Near Mahavatar Babaji's Cave,</p>
            <p>PO Dunagiri, Block Dwarahat,</p>
            <p>District Almora, Uttarakhand, India</p>
          </div>
          <div className="footer-links">
            <a href="/privacy-policy" className="footer-link">Privacy Policy</a>
            <a href="/faqs" className="footer-link">FAQs</a>
            <a href="/terms-and-conditions" className="footer-link">Terms and Conditions</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
