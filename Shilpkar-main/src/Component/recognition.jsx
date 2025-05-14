import React from 'react';
import { motion } from 'framer-motion';
import '../Component/recognition.css';

const recognitions = [
  { count: '1x', title: 'Pritzker Architecture', years: ['2023'] },
  { count: '2x', title: 'Architecture MasterPrize', years: ['2022', '2021'] },
  { count: '3x', title: 'AIA Gold Medal', years: ['2020', '2019'] },
  { count: '4x', title: 'Ribba Architecture', years: ['2017'] },
];

const RecognitionSection = () => {
  return (
    <section className="recognition-wrapper">
      <div className="recognition-overlay">
        <div className="recognition-right">
          <motion.h2
            className="recognition-title"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.4 }} // 👈 triggers every time
          >
            <span className="solid">Latest</span>{' '}
            <span className="outlined">Recognition</span>
          </motion.h2>

          <div className="recognition-list">
            {recognitions.map((item, index) => (
              <motion.div
                key={index}
                className="recognition-row"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: false, amount: 0.3 }} // 👈 always re-animates
              >
                <span className="recognition-count">{item.count}</span>
                <span className="recognition-name">{item.title}</span>
                <span className="recognition-year">
                  {item.years.join(', ')}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecognitionSection;
