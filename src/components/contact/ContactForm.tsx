import styles from "./contact.module.css";
import { FormEvent, useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
            toast.success("Message sent, thank you for reaching out!", {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            });
            const formTarget = e.target as HTMLFormElement;
            formTarget.reset();
          },
          (error) => {
            console.error(error.text);
            toast.error("Message failed, please try again.", {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            });
          }
        );
  };

  return (
    <>
      <form ref={form} onSubmit={sendEmail} className={styles.form}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="from_name" required />
        <label htmlFor="email">Email</label>
        <input type="text" id="email" name="from_email" required />
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" required />
        <button type="submit">Submit</button>
      </form>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
};

export default ContactForm;
