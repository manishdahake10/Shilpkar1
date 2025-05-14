import React from "react";
import { motion } from "framer-motion"; // ✅ Import motion
import "./ArchitectSection.css";

import mainHouse from "../assets/mainhome.jpg";
import modernHouse from "../assets/modernhome.avif";

const ArchitectSection = () => {
  return (
    <div className="architect-section">
      <div className="image-container">
        <motion.img
          src={mainHouse}
          alt="Main House"
          className="main-image"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
        />
        <motion.img
          src={modernHouse}
          alt="Modern House"
          className="overlay-image"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
        />
      </div>

      <div className="text-container">
        <h2>
          Who We Are:{" "}
          <span className="highlight">Shilpakar Interior Design</span> <br />
          Who Create Unique Living Spaces
        </h2>
        <p>
        At Shilpakar Interior Design, we craft spaces that are a
perfect blend of creativity, functionality, and elegance.
As a proud part of the esteemed Pawar Group, our
designs are inspired by innovation, rooted in quality,
and delivered with a commitment to excellence.
With a team of experienced designers, architects, and
project managers, we transform ordinary spaces into
extraordinary environments tailored to your vision
and lifestyl
        </p>
        <ul className="features-list">
          <li>✨ Innovative Design Approach</li>
          <li>🧠 Highly Skilled Expertise and Specialization</li>
          <li>🟡 Client-centric approach for architectural solutions</li>
          <li>
            🌱 Sustainable Design Practices
            <div className="btn-container">
              <button className="learn-more-btn">Know More About Us</button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ArchitectSection;
