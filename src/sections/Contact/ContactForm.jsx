import React from "react";
import Heading from "../../components/Heading";
import styles from "./Contact.module.css";
import { Form, useActionData } from "react-router-dom";
import FormInput from "../../components/FormInput";
import {
  faEnvelope,
  faBook,
  faUser,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";
import FormTextArea from "../../components/FormTextArea";
import Button from "../../components/Button";
import { motion } from "framer-motion";
import Confetti from "react-confetti";

export default function ContactForm() {
  const action = useActionData();

  return (
    <div className={styles.contactFormContainer}>
      <div className={styles.contactHeading}>
        <h2>
          <Heading content="Interested in My Work? Let's Connect!" />
        </h2>
        <p>
          <Heading content="Specializing in web development and always eager to tackle new challenges." />
        </p>
      </div>
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
      >
        <Form className={styles.form} method="POST">
          {action && (
            <Confetti
              recycle={false}
              numberOfPieces={500}
              colors={["#8eb3ff", "#d41e6c", "#c5d2ec"]}
            />
          )}
          <div className={styles.nameContainer}>
            <FormInput
              label="Name"
              id="name"
              name="name"
              placeholder="John / Jane Doe..."
              type="text"
              icon={faUser}
            />{" "}
            <FormInput
              label="Email"
              id="email"
              name="email"
              placeholder="example@test.com..."
              type="email"
              icon={faEnvelope}
            />
          </div>
          <FormInput
            label="Subject"
            id="subject"
            name="subject"
            placeholder="Subject..."
            type="text"
            icon={faBook}
          />
          <FormTextArea
            label="Message"
            id="message"
            name="message"
            placeholder="Your message..."
            type="text"
            icon={faMessage}
          />
          <div>
            <Button
              style="secondary-btn"
              text="Submit"
              id={0}
              onClick={action}
            />
          </div>
        </Form>
      </motion.div>
    </div>
  );
}
