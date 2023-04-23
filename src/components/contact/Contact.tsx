import { useRef } from "react";
import styles from "./contact.module.css";
import ContactForm from "./ContactForm";
import Socials from "./Socials";

export const Contact = () => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <section className={styles.section}>
      <h2 ref={ref} id="contact">
        Contact
      </h2>
      <div className={styles.wrapper}>
        <ContactForm />
        <Socials />
      </div>
    </section>
  );
};
