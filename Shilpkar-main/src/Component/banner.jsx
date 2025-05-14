import React from "react";
import { motion } from "framer-motion";
import "./banner.css";

const Banner = () => {
  return (
    <div className="main">
      {/* Hero Content with Scroll Animation */}
      <motion.div
        className="content"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <motion.h1
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Aesthetix: Redefining <br />
          Spaces with <br />
          <span>Architectural Magic</span>
        </motion.h1>

        <motion.p
          className="description"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.3 }}
        >
          Welcome to Esta Architects, where innovation meets elegance. <br />
          We are a leading architecture firm dedicated to creating visionary designs that transcend expectations.
        </motion.p>

        <motion.button
          className="contact-btn"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          Contact Us
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Banner;
