import React from 'react';
import styles from './Hero.module.css';
import Heading from '../../components/Heading';
import Button from '../../components/Button';
import Typewriter from 'typewriter-effect';
import { motion, spring } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function HeroCta() {
  return (
    <div className={styles.heroContainer}>
      <h2 className="main-heading">
        <Heading content="Guy " />
        <Heading content="Cohen" />
      </h2>
      <motion.h3
        className="typewriter"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
          transition: {
            delay: 0.2,
          },
        }}
      >
        <Typewriter
          options={{
            strings: ['Frontend', 'Backend', 'UX/UI'],
            autoStart: true,
            loop: true,
            pauseFor: 1000,
          }}
        />
        Developer
      </motion.h3>
      <p>
        <Heading content="A passionate web developer, designer, learner." />
      </p>
      <div className={styles.btnContainer}>
        <Link to="get-in-touch">
          <Button style="primary-btn" text="Get in Touch" id={1} />
        </Link>
        <Link to="projects">
          <Button style="secondary-btn" text="My Projects" id={2} />
        </Link>
      </div>
    </div>
  );
}
