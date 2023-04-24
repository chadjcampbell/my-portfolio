import { useRef } from "react";
import styles from "./contact.module.css";
import ContactForm from "./ContactForm";
import Socials from "./Socials";

export const Contact = () => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <section id="contact" className={`${styles.section} observe`}>
      <h2 ref={ref}>Contact</h2>
      <div className={styles.wrapper}>
        <ContactForm />
        <Socials />
      </div>
    </section>
  );
};
