import React from "react";
import { motion } from "framer-motion";
import "../Component/Wwd.css";

const cardVariants = {
  hidden: (i) => ({
    opacity: 0,
    y: i === 1 ? 100 : -100, // 2nd card (index 1) comes from bottom, others from top
  }),
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};


const WhatWeDo = () => {
  return (
    <div className="what-we-do">
      <motion.div
        className="header"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2>
          <span className="bold">What</span>{" "}
          <span className="outline">We Do</span>{" "}
          <span className="bold">For You</span>
        </h2>
      
      </motion.div>

      <div className="services">
        {[
          {
            icon: "📐",
            title: "Design",
            desc: "We are a leading architecture firm dedicated to creating visionary designs that transcend expectations.",
          },
          {
            icon: "🧱",
            title: "Construction",
            desc: "We are a leading architecture firm dedicated to creating visionary designs that transcend expectations.",
          },
          {
            icon: "🏗️",
            title: "Engineering",
            desc: "We are a leading architecture firm dedicated to creating visionary designs that transcend expectations.",
          },
        ].map((item, i) => (
<motion.div
  key={i}
  className="service-card"
  custom={i}
  variants={cardVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: false, amount: 0.3 }}
  whileHover={{
    scale: 1.05,
    rotate: 1,
    transition: { type: "spring", stiffness: 300 },
  }}
  whileTap={{ scale: 0.98 }}
>
  <div className="icon">{item.icon}</div>
  <h3>{item.title}</h3>
  <p>{item.desc}</p>
  <span className="arrow">→</span>
</motion.div>

        
        ))}
      </div>
    </div>
  );
};

export default WhatWeDo;
