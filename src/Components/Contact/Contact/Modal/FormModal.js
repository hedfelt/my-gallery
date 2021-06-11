import React, { useEffect } from "react";
import { motion } from "framer-motion";
import "./FormModal.scss";
import { GrClose } from "react-icons/gr";

const FormModal = (props) => {
  useEffect(() => {
    const close = (e) => {
      if (e.keyCode === 27) {
        props.clickedModal();
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [props]);
  return (
    <motion.div
      className="formModal"
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ delay: 0.4 }}
      onClick={() => props.clickedModal()}
    >
      <motion.div
        className="formModal__box"
        whileTap={{ scale: 0.9 }}
        animate={{ y: 0 }}
        initial={{ y: "-100vh" }}
        transition={{ delay: 1 }}
      >
        <motion.button
          className="formModal__button"
          type="button"
          whileHover={{
            scale: 1.1,
          }}
          whileTap={{ scale: 0.9 }}
          onClick={() => props.clickedModal()}
        >
          <GrClose className="formModal__icon" />
        </motion.button>

        <motion.div whileTap={{ scale: 0.9 }} className="formModal__text">
          Thank You!
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default FormModal;
