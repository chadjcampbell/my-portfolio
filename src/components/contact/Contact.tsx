import styles from "./contact.module.css";
import ContactForm from "./ContactForm";
import Socials from "./Socials";

export const Contact = () => {
  return (
    <section className={styles.section}>
      <h2>Contact</h2>
      <div className={styles.wrapper}>
        <ContactForm />
        <Socials />
      </div>
    </section>
  );
};
