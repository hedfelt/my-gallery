import "./ContactForm.scss";
import useInput from "../../../hooks/use-input";
import { motion } from "framer-motion";

const ContactForm = (props) => {
  // const [formIsValid, setFormIsValid] = useState(false);

  // useEffect(() => {
  //   if (
  //     enteredNameIsValid &&
  //     enteredEmailIsValid &&
  //     enteredLastNameIsValid &&
  //     enteredSubjectIsValid &&
  //     enteredMessageIsValid
  //   ) {
  //     setFormIsValid(true);
  //   } else {
  //     setFormIsValid(false);
  //   }
  // }, [
  //   setFormIsValid,
  //   enteredNameIsValid,
  //   enteredEmailIsValid,
  //   enteredLastNameIsValid,
  //   enteredSubjectIsValid,
  //   enteredMessageIsValid,
  // ]);

  // const formSubmissionHandler = (event) => {
  //   event.preventDefault();
  //   console.log("sent");

  //   if (!enteredNameIsValid) {
  //     return;
  //   }
  //
  // };

  // const submitOrderHandler = (userData) => {
  //
  // };

  const isNotEmpty = (value) => value.trim() !== "";

  const isEmail = (value) => value.includes("@");

  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangedHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput(isNotEmpty);

  const {
    value: enteredLastName,
    isValid: enteredLastNameIsValid,
    hasError: lastNameInputHasError,
    valueChangeHandler: lastNameChangedHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastNameInput,
  } = useInput(isNotEmpty);

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangedHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput(isEmail);

  const {
    value: enteredSubject,
    isValid: enteredSubjectIsValid,
    hasError: subjectInputHasError,
    valueChangeHandler: subjectChangedHandler,
    inputBlurHandler: subjectBlurHandler,
    reset: resetSubjectInput,
  } = useInput(isNotEmpty);

  const {
    value: enteredMessage,
    isValid: enteredMessageIsValid,
    hasError: messageInputHasError,
    valueChangeHandler: messageChangedHandler,
    inputBlurHandler: messageBlurHandler,
    reset: resetMessageInput,
  } = useInput(isNotEmpty);

  //overall form validity:

  let formIsValid = false;

  if (
    enteredNameIsValid &&
    enteredLastNameIsValid &&
    enteredEmailIsValid &&
    enteredSubjectIsValid &&
    enteredMessageIsValid
  ) {
    formIsValid = true;
  }

  //form submission

  const formSubmissionHandler = (event) => {
    //if a form is submitted with a button an http request is sent to the server serving the website automatically and the page will be reloaded and we will lose our state. In this case we dont have a server that can handle that, and we dont want to reload, we are using firestone instead.  We stop that default behavior by writing:
    event.preventDefault();

    //checking if the input is empty. If empty, return, stops the function and the code beneath is not executed:

    //(this is not really nesearry becuase the button is disabled)
    if (!formIsValid) {
      return; //cancels the function
    }

    resetNameInput();
    resetLastNameInput();
    resetEmailInput();
    resetSubjectInput();
    resetMessageInput();

    const data = {
      firstName: enteredName,
      lastName: enteredLastName,
      email: enteredEmail,
      subject: enteredSubject,
      message: enteredMessage,
    };
    fetch("https://gallery-f98d4-default-rtdb.firebaseio.com/artform.json", {
      method: "POST",
      body: JSON.stringify({ data }),
    });
  };

  //classes:

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

  const messageInputClasses = messageInputHasError
    ? "form__input--invalid"
    : "form__input";

  return (
    <form className="form" onSubmit={formSubmissionHandler}>
      <div className="form__nameGroup">
        <div>
          <label htmlFor="firstname" className="form__label">
            first name
          </label>
          <input
            className={nameInputClasses}
            type="text"
            id="firstname"
            name="firstname"
            //on every keystroke:
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

        <div>
          <label htmlFor="lastname" className="form__label">
            last name
          </label>

          <input
            className={lastNameInputClasses}
            id="lastname"
            type="text"
            name="lastname"
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
          id="email"
          onChange={emailChangedHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />

        {emailInputHasError ? (
          <p className="form__message--error">Please enter a valid email</p>
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
          id="subject"
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

      <div>
        <label htmlFor="message" className="form__label">
          message
        </label>
        <textarea
          style={{
            height: "10rem",
          }}
          className={messageInputClasses}
          id="msg_box"
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
      <motion.button
        className="form__button"
        type="submit"
        disabled={!formIsValid}
        onClick={() => props.clickedForm()}
        whileHover={{
          scale: 1.1,
        }}
        whileTap={{ scale: 1 }}
      >
        SUBMIT
      </motion.button>
    </form>
  );
};

export default ContactForm;
