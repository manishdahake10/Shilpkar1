import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./recentProjects.css";

// Import 6 images
import towerHouse from "../assets/TowerHouse.avif";
import triangleHouse from "../assets/TriangleHouse.jpg";
import buildingDecor from "../assets/BuildingDecor.jpg";
import rooftop from "../assets/RoofTop.avif";
import glassBuilding from "../assets/GlassBuilding.jpg";
import museum from "../assets/Museum.jpg"; // <-- your 6th image

const projects = [
  {
    image: towerHouse,
    title: "Tower House",
    category: "Architecture",
  },
  {
    image: triangleHouse,
    title: "Triangle House",
    category: "Architecture",
  },
  {
    image: buildingDecor,
    title: "Building Decor",
    category: "Exterior",
  },
  {
    image: rooftop,
    title: "Vaulted Arches",
    category: "Interior",
  },
  {
    image: glassBuilding,
    title: "Glass Building",
    category: "Corporate",
  },
  {
    image: museum,
    title: "Square Tower",
    category: "Architecture",
  },
];

const AnimatedCard = ({ project, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });

  const isMiddle = index === 1;

  const animationProps = isMiddle
    ? {
        initial: { opacity: 0, y: -100 },
        animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 },
        transition: { duration: 0.6, type: "spring", bounce: 0.3 },
      }
    : {
        initial: { opacity: 0, y: index % 2 === 0 ? 80 : -80 },
        animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: index % 2 === 0 ? 80 : -80 },
        transition: { duration: 0.5, ease: "easeOut" },
      };

  return (
    <motion.div ref={ref} className="project-card" {...animationProps}>
      <motion.img src={project.image} alt={project.title} />
      <motion.div
        className="project-info"
        {...(isMiddle
          ? {
              initial: { opacity: 0, y: -100 },
              animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 },
              transition: { duration: 0.6, type: "spring", bounce: 0.3, delay: 0.1 },
            }
          : {})}
      >
        <h3>{project.title}</h3>
        <p>{project.category}</p>
      </motion.div>
    </motion.div>
  );
};

const RecentProjects = () => {
  return (
    <section className="recent-projects">
      <div className="section-title">
        <span className="recent-text">Recent</span>
        <span className="project-text">Projects</span>
      </div>

      <div className="project-grid">
        {projects.map((project, index) => (
          <AnimatedCard key={index} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default RecentProjects;
