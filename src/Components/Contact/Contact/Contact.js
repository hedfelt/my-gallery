import React from "react";
import ContactForm from "../ContactForm/ContactForm";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact_page">
      <div className="hello_text">CONTACT ME</div>
      <div className="contact_box">
        <span className="contact_text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
          excepturi earum tempore ad, aliquam voluptatem veritatis saepe, autem
          accusamus ducimus cum. Reprehenderit tenetur, earum odit hic quas enim
          ipsum iure!
        </span>
      </div>
      <ContactForm className="contact_form" />
    </div>
  );
};

export default Contact;
