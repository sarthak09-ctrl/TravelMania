import React from "react";
import "./App.css";

function App() {
  return (
    <div className="container">
      {/* Header */}
      <header className="header">
        <h1>Travelmania Travel Agency</h1>
        <nav>
          <a className="nav-link" href="#about">About</a>
          <a className="nav-link" href="#packages">Packages</a>
          <a className="nav-link" href="#contact">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <h2>Explore the World with Us</h2>
        <p>Book your next adventure with Wanderlust!</p>
      </section>

      {/* About Us Section */}
      <section id="about" className="section">
        <h2>About Us</h2>
        <p className="about-text">
          Welcome to <strong>TravelMania Travel Agency</strong>, your gateway to
          unforgettable journeys! We are passionate travel enthusiasts dedicated to
          crafting customized travel experiences for adventurers, honeymooners,
          families, and explorers alike.
        </p>
        <p className="about-text">
          With over 10 years in the travel industry, we’ve helped more than 50,000
          travelers explore the most beautiful destinations around the globe. Whether
          you crave tropical beaches, snowy mountains, ancient ruins, or bustling
          cities — we make your travel dreams come true.
        </p>
        <p className="about-text">
          <b>Why choose us?</b> Affordable Packages, 24/7 Customer Support, Expert Local
          Guides, and Tailored Itineraries — all crafted just for you!
        </p>
      </section>

      {/* Packages Section */}
      <section id="packages" className="section">
        <h2>🌟 Our Travel Packages</h2>
        <div className="card-container">
          <div className="card">
            <h3>🏖️ Bali Bliss</h3>
            <ul>
              <li>6 Nights, 7 Days</li>
              <li>Private Beach Villa</li>
              <li>Island Tour + Spa</li>
              <li>₹65,000 per person</li>
            </ul>
          </div>

          <div className="card">
            <h3>🏔️ Swiss Alps Retreat</h3>
            <ul>
              <li>5 Nights, 6 Days</li>
              <li>Mountain Resort Stay</li>
              <li>Glacier Train Ride</li>
              <li>₹1,20,000 per person</li>
            </ul>
          </div>

          <div className="card">
            <h3>🌆 Dubai Delight</h3>
            <ul>
              <li>4 Nights, 5 Days</li>
              <li>Luxury Hotel + Desert Safari</li>
              <li>City Tour + Burj Khalifa</li>
              <li>₹85,000 per person</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <h2>Contact Us</h2>
        <form className="form">
          <input type="text" placeholder="Your Name" className="input" />
          <input type="email" placeholder="Your Email" className="input" />
          <textarea placeholder="Your Message" className="textarea" />
          <button type="submit" className="button">Send</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; Sarthak Ranawade (COEP).</p>
      </footer>
    </div>
  );
}

export default App;
