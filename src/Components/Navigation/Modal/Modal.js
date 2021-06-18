import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Modal.scss";
import { motion, AnimatePresence } from "framer-motion";

const Modal = ({ showModal, setShowModal }) => {
  const modalRemove = () => {
    setShowModal(!showModal);
  };

  showModal
    ? document.querySelector("body").classList.add("lock-screen")
    : document.querySelector("body").classList.remove("lock-screen");

  useEffect(() => {
    const close = (e) => {
      if (e.keyCode === 27) {
        setShowModal(showModal);
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [showModal, setShowModal]);

  const homeVariants = {
    hidden: { opacity: 0, y: "7vh", rotate: -3 },
    visible: {
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      y: "4vh",

      transition: { duration: 0.7, delay: 0 },
    },
    hover: {
      scale: 1.1,
    },
  };

  const artworksVariants = {
    hidden: { opacity: 0, y: "6vh", rotate: -3 },
    visible: {
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: { duration: 0.9, delay: 0.1, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      y: "4vh",

      transition: { duration: 0.7, delay: 0 },
    },
    hover: {
      scale: 1.1,
    },
  };

  const blogpostVariants = {
    hidden: { opacity: 0, y: "5vh", rotate: -3 },
    visible: {
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: { duration: 0.9, delay: 0.2, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      y: "4vh",

      transition: { duration: 0.7, delay: 0 },
    },
    hover: {
      scale: 1.1,
    },
  };

  const contactVariants = {
    hidden: { opacity: 0, y: "4vh" },
    visible: {
      opacity: 1,
      y: 0,

      transition: { duration: 1, delay: 0.5, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      y: "4vh",

      transition: { duration: 0.7, delay: 0 },
    },
    hover: {
      scale: 1.1,
    },
  };

  const aboutVariants = {
    hidden: { opacity: 0, y: "-4vh" },
    visible: {
      opacity: 1,
      y: 0,

      transition: { duration: 1, delay: 0.5, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      y: "-4vh",

      transition: { duration: 0.7, delay: 0 },
    },
    hover: {
      scale: 1.1,
    },
  };
  return (
    <AnimatePresence exitBeforeEnter>
      {showModal && (
        <motion.div
          className="modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
        >
          <nav className="modal__links" onClick={modalRemove}>
            <motion.div
              className="modal__link modal__home"
              variants={homeVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              whileHover="hover"
            >
              <NavLink
                onClick={modalRemove}
                className="modal__link"
                to="/"
                exact
                activeStyle={{
                  color: "rgb(178, 147, 244)",
                }}
              >
                HOME
              </NavLink>
            </motion.div>

            <motion.div
              className="modal__link "
              variants={artworksVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              whileHover="hover"
            >
              <NavLink
                onClick={modalRemove}
                className="modal__link"
                to="/Artworks"
                activeStyle={{ color: "rgb(178, 147, 244)" }}
              >
                ARTWORKS
              </NavLink>
            </motion.div>

            <motion.div
              className="modal__link"
              variants={blogpostVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              whileHover="hover"
            >
              <NavLink
                onClick={modalRemove}
                className="modal__link"
                to="/blogpost"
                activeStyle={{ color: "rgb(178, 147, 244)" }}
              >
                BLOGPOST
              </NavLink>
            </motion.div>

            <div className="modal__horistontalGrp">
              <motion.div
                className="modal__link"
                variants={contactVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                whileHover="hover"
              >
                <NavLink
                  onClick={modalRemove}
                  className="modal__link"
                  to="/contact"
                  activeStyle={{ color: "rgb(178, 147, 244)" }}
                >
                  contact
                </NavLink>
              </motion.div>
              <motion.div
                className="modal__link"
                variants={aboutVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                whileHover="hover"
              >
                <NavLink
                  onClick={modalRemove}
                  className="modal__link"
                  to="/about"
                  activeStyle={{ color: "rgb(178, 147, 244)" }}
                >
                  about
                </NavLink>
              </motion.div>
            </div>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
