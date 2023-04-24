import styles from "./contact.module.css";
import { FormEvent, useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    form.current &&
      emailjs
        .sendForm(
          "service_oz0fm1z",
          "template_s472lyb",
          form.current,
          "HDt9p72ndSLywkXGK"
        )
        .then(
          (result) => {
            toast({
              title: "Message Sent!",
              description: "Thanks for reaching out.",
              status: "success",
              duration: 9000,
              isClosable: true,
            });
            const formTarget = e.target as HTMLFormElement;
            formTarget.reset();
          },
          (error) => {
            console.error(error.text);
            toast({
              title: "Message Failed!",
              description: "Trolls may have locked up my mailJS account.",
              status: "error",
              duration: 9000,
              isClosable: true,
            });
          }
        );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className={styles.form}>
      <h4></h4>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" name="from_name" />
      <label htmlFor="email">Email</label>
      <input type="text" id="email" name="from_email" />
      <label htmlFor="subject">Message</label>
      <textarea id="message" name="message"></textarea>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;
