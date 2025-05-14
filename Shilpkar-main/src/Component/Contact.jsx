import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './Contact.css';
import contactImage from '../assets/building.png';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '-100px' });

  return (
    <section className="contact-container" ref={ref}>
      <motion.div
        className="contact-left"
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <img src={contactImage} alt="Contact Visual" />
      </motion.div>

      <motion.div
        className="contact-right"
        initial={{ opacity: 0, x: 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
      >
        <h2>Contact, Let's Talk</h2>
        <p className="subtext">
          Let’s bring your project to life. Let us know how we can best help you.
          We are a leading architecture firm dedicated to creating designs.
        </p>
        <form className="contact-form">
          <label>
            YOUR NAME*
            <input type="text" placeholder="Jonathan Ronan" required />
          </label>
          <label>
            EMAIL ADDRESS*
            <input type="email" placeholder="jonathonronana63@gmail.com" required />
          </label>
          <label>
            PHONE NO*
            <input type="tel" placeholder="+0 321 546 2345" required />
          </label>
          <label>
            YOUR MESSAGE HERE*
            <textarea placeholder="Write your message here..." required />
          </label>
          <button type="submit">Send Message Now</button>
        </form>

        <div className="contact-info">
          <div>
            <h4>ADDRESS</h4>
            <p>Office No A 1002<br /> Boulevard Towers by BramhaCorp,<br />
              Sadhu Vaswani Chowk, Camp, Pune, MH 411001</p>
          </div>
          <div>
            <h4>CONTACT</h4>
            <p>shilpakarinteriordesign@gmail.com</p>
          </div>
          <div>
            <h4>SOCIAL MEDIA</h4>
            <div className="icons">
              <i className="fab fa-facebook-f" />
              <i className="fab fa-instagram" />
              <i className="fab fa-twitter" />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
