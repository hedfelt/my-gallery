import React from "react";
import { FaFacebookF, FaInstagram, FaPinterestP } from "react-icons/fa";
import "./ContactIcons.scss";
import { motion } from "framer-motion";

const ContactIcons = () => {
  return (
    <div className="contactIcons">
      <motion.div
        whileHover={{ backgroundColor: "#000" }}
        className="contactIcons__border"
      >
        <FaFacebookF className="contactIcons__facebook" />
      </motion.div>

      <motion.div
        whileHover={{ backgroundColor: "#000" }}
        className="contactIcons__border"
      >
        <FaInstagram className="contactIcons__facebook" />
      </motion.div>
      <motion.div
        whileHover={{ backgroundColor: "#000" }}
        className="contactIcons__border"
      >
        <FaPinterestP className="contactIcons__facebook" />
      </motion.div>
    </div>
  );
};

export default ContactIcons;
