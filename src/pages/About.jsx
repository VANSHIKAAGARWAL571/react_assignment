// About.js

import React from "react";
import "./About.css"; // Import the CSS file for styling

export default function About() {
  return (
    <div className="about-container">
      <header>
        <h1>About Us</h1>
      </header>
      <section className="about-section">
        <div className="image-container">
          <img
            src="https://bookretreats.com/assets/photo/center/0m/2k/2291/p_126328/1000_1521739218.jpg"
            alt="About Us Image"
          />
          <div className="overlay-card">
            <p>
            Keep close to Nature's heart...and break clear away, once in a while, and climb a mountain or spend a week in the woods. Wash your spirit clean.
            </p>
          </div>
        </div>
        <p>
        Nestled amidst the Dunagiri Mountains in the serene beauty of Uttarakhand, Dunagiri Retreat stands as a beacon for spiritual seekers. Founded in 2005, this eco-spiritual sanctuary is not just a yoga retreat but a profound journey into self-discovery. Revered for its proximity to the legendary Mahavatar Babaji's Cave and the sacred site of Dunagiri Temple, our retreat is a gateway to the transformative teachings of Kriya Yoga as expounded by Mahavatar Babaji and elucidated in Paramahansa Yogananda's 'Autobiography of a Yogi'.
        </p>
        <p>
        At Dunagiri, spirituality and sustainability merge seamlessly. Our eco-friendly accommodations and organic gardens are set against a backdrop of the Himalayan splendor, offering a tranquil space for meditation retreats and a deep connection with nature. Immerse yourself in the spiritual essence of the holy river and the divine energy of Devi temples nearby.
        </p>
      </section>
    </div>
  );
}


