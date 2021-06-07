import { useState, useEffect } from "react";
import "./ContactForm.scss";
import useInput from "../../../hooks/use-input";
import { motion } from "framer-motion";

const ContactForm = (props) => {
  const [formIsValid, setFormIsValid] = useState(false);
  const [btnClicked, setBtnClicked] = useState(false);

  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangedHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");

  //last name
  const {
    value: enteredLastName,
    isValid: enteredLastNameIsValid,
    hasError: lastNameInputHasError,
    valueChangeHandler: lastNameChangedHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastNameInput,
  } = useInput((value) => value.trim() !== "");

  //email
  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.includes("@"));

  const {
    value: enteredSubject,
    isValid: enteredSubjectIsValid,
    hasError: subjectInputHasError,
    valueChangeHandler: subjectChangedHandler,
    inputBlurHandler: subjectBlurHandler,
    reset: resetSubjectInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredMessage,
    isValid: enteredMessageIsValid,
    hasError: messageInputHasError,
    valueChangeHandler: messageChangedHandler,
    inputBlurHandler: messageBlurHandler,
    reset: resetMessageInput,
  } = useInput((value) => value.trim() !== "");

  //overall form validity
  useEffect(() => {
    if (
      enteredNameIsValid &&
      enteredEmailIsValid &&
      enteredLastNameIsValid &&
      enteredSubjectIsValid &&
      enteredMessageIsValid
    ) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  }, [
    setFormIsValid,
    enteredNameIsValid,
    enteredEmailIsValid,
    enteredLastNameIsValid,
    enteredSubjectIsValid,
    enteredMessageIsValid,
  ]);

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    //HVA MED DETTE??
    if (!enteredNameIsValid) {
      return;
    }
    console.log(
      enteredName,
      enteredLastName,
      enteredEmail,
      enteredSubject,
      enteredMessage
    );
    resetNameInput();
    resetEmailInput();
    resetLastNameInput();
    resetSubjectInput();
    resetMessageInput();
  };

  //changing input class to invalid
  const nameInputClasses = nameInputHasError
    ? "form__input--invalid"
    : "form__input";

  const lastNameInputClasses = lastNameInputHasError
    ? "form__input--invalid"
    : "form__input";

  const emailInputClasses = emailInputHasError
    ? "form__input--invalid"
    : "form__input";

  const subjectInputClasses = subjectInputHasError
    ? "form__input--invalid"
    : "form__input";

  const messageInputId = messageInputHasError
    ? "form__input--invalid"
    : "form__input";

  return (
    <form className="form">
      <div className="form__nameGroup">
        <div>
          <label htmlFor="firstname" className="form__label">
            first name
          </label>
          <input
            className={nameInputClasses}
            type="text"
            name="name"
            onChange={nameChangedHandler}
            onBlur={nameBlurHandler}
            value={enteredName}
          />

          {nameInputHasError ? (
            <p className="form__message--error">First name must not be empty</p>
          ) : (
            <div className="form__message"></div>
          )}
        </div>
        {/* LAST NAME */}
        <div>
          <label htmlFor="lastname" className="form__label">
            last name
          </label>

          <input
            className={lastNameInputClasses}
            type="text"
            name="lastName"
            onChange={lastNameChangedHandler}
            onBlur={lastNameBlurHandler}
            value={enteredLastName}
          />

          {lastNameInputHasError ? (
            <p className="form__message--error">Last name must not be empty</p>
          ) : (
            <div className="form__message"></div>
          )}
        </div>
      </div>
      <div>
        <label htmlFor="email" className="form__label">
          email
        </label>
        <input
          className={emailInputClasses}
          type="email"
          name="email"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />

        {emailInputHasError ? (
          <p className="form__message--error">Email must not be empty</p>
        ) : (
          <div className="form__message"></div>
        )}
      </div>
      <div>
        <label htmlFor="subject" className="form__label">
          subject
        </label>
        <input
          className={subjectInputClasses}
          type="text"
          name="subject"
          onChange={subjectChangedHandler}
          onBlur={subjectBlurHandler}
          value={enteredSubject}
        />

        {subjectInputHasError ? (
          <p className="form__message--error">Subject must not be empty</p>
        ) : (
          <div className="form__message"></div>
        )}
      </div>

      {/* MESSAGEBOX */}

      <div>
        <label htmlFor="message" className="form__label">
          message
        </label>
        <textarea
          style={{
            height: "10rem",
            // width: "21.5rem",
            margin: 0,
            padding: "1rem",
            position: "relative",
            top: "0.15rem",
          }}
          className={messageInputId}
          name="msg_box"
          maxlenght="500"
          onChange={messageChangedHandler}
          onBlur={messageBlurHandler}
          value={enteredMessage}
        ></textarea>
        {messageInputHasError ? (
          <p className="form__message--error">Message must not be empty</p>
        ) : (
          <div className="form__message"></div>
        )}
      </div>
      {/* BUTTON */}
      <motion.button
        className="form__button"
        type="button"
        // disabled={!formIsValid}
        onClick={() => props.clickedForm()}
        whileHover={{
          scale: 1.1,
        }}
        whileTap={{ scale: 1 }}
      >
        SUBMIT
      </motion.button>

      {/* {formIsValid && btnClicked && <div>Hello</div>} */}
    </form>
  );
};

export default ContactForm;
