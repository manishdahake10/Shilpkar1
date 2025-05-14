import React, { useRef } from "react";
import "./footer.css";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { motion, useInView } from "framer-motion";

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <footer className="footer" ref={ref}>
      <div className="footer-content">
        <motion.div
          className="footer-section brand"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="logo">
            <span className="brand-name">Shilpkar</span>
          </div>
          <p>We would love to be a part of your dream space or home project.</p>
        </motion.div>

        <motion.div
          className="footer-section links"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          <h4>FOLLOW US</h4>
          <ul>
            <li><FaFacebookF /> Facebook</li>
            <li><FaInstagram /> Instagram</li>
            <li><FaLinkedinIn /> LinkedIn</li>
            <li><FaTwitter /> Twitter</li>
          </ul>
        </motion.div>

        <motion.div
          className="footer-section sitemap"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
        >
          <h4>SERVICES</h4>
          <ul>
            <li>RESIDENTIAL INTERIORS</li>
            <li>COMMERCIAL INTERIORS</li>
            <li>TURNKEY SOLUTIONS</li>
            <li>CUSTOM FURNITURE DESIGN</li>
            <li>VASTU-INTEGRATED DESIGNS</li>
          </ul>
        </motion.div>

        <motion.div
          className="footer-section newsletter"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
        >
          <h4>SUBSCRIBE NEWSLETTER</h4>
          <div className="newsletter-input">
            <input type="email" placeholder="Your Email Here" />
            <button>&rarr; SUBSCRIBE NEWSLETTER</button>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="footer-bottom"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <p>
          © <span className="highlight">Shilpakar</span> All Rights Reserved By{" "}
          <span className="highlight-alt">PTS</span>
        </p>
      </motion.div>

      <motion.div
        className="scroll-up-btn"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 1 }}
      >
        &#x25B2;
      </motion.div>
    </footer>
  );
};

export default Footer;
