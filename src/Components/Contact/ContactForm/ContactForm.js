import "./ContactForm.css";

import useInput from "../../../hooks/use-input";

//SPØRSMÅL:
//htmlFor??

const ContactForm = () => {
  //first name
  const {
    value: enteredName,
    isValid: enteredNameIsValied,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangedHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");

  //last name
  const {
    value: enteredLastName,
    isValid: enteredLastNameIsValied,
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
    isValid: enteredSubjectIsValied,
    hasError: subjectInputHasError,
    valueChangeHandler: subjectChangedHandler,
    inputBlurHandler: subjectBlurHandler,
    reset: resetSubjectInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredMessage,
    isValid: enteredMessageIsValied,
    hasError: messageInputHasError,
    valueChangeHandler: messageChangedHandler,
    inputBlurHandler: messageBlurHandler,
    reset: resetMessageInput,
  } = useInput((value) => value.trim() !== "");

  //overfall form validity
  let formIsValid = false;
  if (
    enteredNameIsValied &&
    enteredEmailIsValid &&
    enteredLastNameIsValied &&
    enteredSubjectIsValied &&
    enteredMessageIsValied
  ) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    //HVA MED DETTE??
    if (!enteredNameIsValied) {
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
    ? "input_wrap invalid"
    : "input_wrap";

  const lastNameInputClasses = lastNameInputHasError
    ? "input_wrap invalid"
    : "input_wrap";

  const emailInputClasses = emailInputHasError
    ? "input_wrap invalid"
    : "input_wrap";

  const subjectInputClasses = subjectInputHasError
    ? "input_wrap invalid"
    : "input_wrap";

  const messageInputId = messageInputHasError ? "msg_box_invalid" : "msg_box";

  return (
    <div className="registration_form">
      <form
        // onSubmit={formSubmissionHandler}
        // action="https://formsubmit.co/e9907d9bd8c5c81890e4672f847fc752"
        method="POST"
      >
        <div className="form_wrap">
          <div className="input_grp">
            <label htmlFor="name" className="form_name">
              NAME
            </label>
            <div className="input_ugrp">
              <div className={nameInputClasses}>
                <input
                  type="text"
                  name="name"
                  onChange={nameChangedHandler}
                  onBlur={nameBlurHandler}
                  value={enteredName}
                />
                <label htmlFor="firstname">First Name</label>
                {/* {nameInputHasError && (
                    <p className="error_text">First name must not be empty</p>
                  )} */}

                {nameInputHasError ? (
                  <p className="error_text">First name must not be empty</p>
                ) : (
                  <div className="no_error_text"></div>
                )}
              </div>
              <div className={lastNameInputClasses}>
                <input
                  type="text"
                  name="lastName"
                  onChange={lastNameChangedHandler}
                  onBlur={lastNameBlurHandler}
                  value={enteredLastName}
                />
                <label htmlFor="lastname">Last Name</label>
                {/* {lastNameInputHasError && (
                    <p tclassName="error_text">Last name must not be empty</p>
                  )} */}

                {lastNameInputHasError ? (
                  <p className="error_text">Last name must not be empty</p>
                ) : (
                  <div className="no_error_text"></div>
                )}
              </div>
            </div>
          </div>
          <div className={emailInputClasses}>
            <label htmlFor="email">EMAIL</label>

            <input
              type="email"
              name="email"
              onChange={emailChangeHandler}
              onBlur={emailBlurHandler}
              value={enteredEmail}
            />

            {/* {emailInputHasError && (
                <p className="error_text">Please enter a valid email.</p>
              )} */}

            {emailInputHasError ? (
              <p className="error_text">Email must not be empty</p>
            ) : (
              <div className="no_error_text"></div>
            )}
          </div>
          <div className={subjectInputClasses}>
            <label htmlFor="subject">SUBJECT</label>
            <input
              type="text"
              name="subject"
              onChange={subjectChangedHandler}
              onBlur={subjectBlurHandler}
              value={enteredSubject}
            />
            {/* <div
                className={
                  nameInputHasError ? "error_container" : "noError_container"
                }
              > */}
            {subjectInputHasError ? (
              <p className="error_text">Subject must not be empty</p>
            ) : (
              <div className="no_error_text"></div>
            )}

            {/* {nameInputHasError && (
                <p className="error_text">Subject must not be empty</p>
              )} */}
            {/* </div> */}
          </div>

          <div className="input_wrap">
            <label htmlFor="message">MESSAGE</label>
            <textarea
              id={messageInputId}
              name="msg_box"
              maxlenght="500"
              onChange={messageChangedHandler}
              onBlur={messageBlurHandler}
              value={enteredMessage}
            ></textarea>
            {messageInputHasError ? (
              <p className="error_text">Message must not be empty</p>
            ) : (
              <div className="no_error_text"></div>
            )}
          </div>
          <div className="input_wrap">
            <div className="btn_wrapper">
              <button disabled={!formIsValid}>submit</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
