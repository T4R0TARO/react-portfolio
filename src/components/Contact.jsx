import React from "react";
import "../styles/Contact.css";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact__container">
        <h2 className="contact__title">Get in Touch</h2>
        <form
          action="mailto:jmanansaladev@gmail.com"
          method="POST"
          encType="text/plain"
          className="email-form"
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="input-form"
            required
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            className="input-form"
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="10"
            className="email-textarea"
            required
          ></textarea>
          <button className="form__button" type="submit">
            Work With ME
          </button>
        </form>
      </div>
    </section>
  );
}
