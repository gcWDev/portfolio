import React from "react";
import styles from "./Projects.module.css";
import { ReactSVG } from "react-svg";
import github from "../../assets/socials/github.svg";
import globe from "../../assets/globe.svg";
import { motion } from "framer-motion";

export default function ProjectCard(props) {
  const { projects, selectedProject } = props;

  function handleMouseEnter(e) {
    e.currentTarget.classList.add(styles.hovered);
  }

  function handleMouseExit(e) {
    e.currentTarget.classList.remove(styles.hovered);
  }

  const projectCardArr = projects.map((project, index) => {
    const isActive = selectedProject == index;

    return (
      <div
        key={index}
        style={{
          display: isActive ? "flex" : "none",
        }}
      >
        <img src={project.img} alt={project.title} />
        <p>{project.subheading}</p>
        <div className={styles.linkContainer}>
          <a
            href={project.links.github}
            target="_blank"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseExit}
          >
            <div className="react-svg">
              <ReactSVG src={github} />
            </div>
          </a>
          <a
            href={project.links.live}
            target="_blank"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseExit}
          >
            <div className="react-svg">
              <ReactSVG src={globe} />
            </div>
          </a>
        </div>
      </div>
    );
  });

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        transition: {
          delay: 0.4,
        },
      }}
      className={styles.projectCard}
    >
      {projectCardArr}
    </motion.div>
  );
}