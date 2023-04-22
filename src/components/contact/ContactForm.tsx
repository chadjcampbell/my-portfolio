import styles from "./contact.module.css";

const ContactForm = () => {
  return (
    <form className={styles.form} action="">
      <h4></h4>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" name="name" />
      <label htmlFor="email">Email</label>
      <input type="text" id="email" name="email" />
      <label htmlFor="subject">Message</label>
      <textarea id="message" name="message"></textarea>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;
