import React, { useState } from "react";
import ContactForm from "../ContactForm/ContactForm";
import "./Contact.scss";
import { motion } from "framer-motion";
import { OrangeLine } from "../../../UI/OrangeLine/OrangeLine";
import FormModal from "./Modal/FormModal";

const Contact = () => {
  // intro animation
  const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 1] };

  const [clickedButton, setClickedButton] = useState(false);
  return (
    <div>
      <div className="contact">
        <div className="contact__group">
          <motion.div
            className="contact__get"
            animate={{ x: 0, opacity: 1 }}
            initial={{ x: -20, opacity: 0 }}
            transition={{ duration: 1, ...transition }}
          >
            <div className="">GET IN</div>
          </motion.div>
          <motion.div
            className="contact__touch"
            animate={{ x: 0, opacity: 1 }}
            initial={{ x: 20, opacity: 0 }}
            transition={{ duration: 1, ...transition }}
          >
            <div className="">TOUCH</div>
          </motion.div>
          {/* <div className="contact__icons">
            <ContactIcons />
          </div> */}
        </div>
        <motion.div
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 2 }}
          className="contact__form"
        >
          {/* contact form */}
          <ContactForm
            clickedForm={(clickedButton) => setClickedButton(!clickedButton)}
          />
        </motion.div>
      </div>
      <div className="contact__line">
        <OrangeLine />
      </div>
      {/* //modal  if the form is valid and the button is clicked then the form is shown */}
      {clickedButton && (
        <FormModal clickedModal={() => setClickedButton(!clickedButton)} />
      )}
    </div>
  );
};

export default Contact;
