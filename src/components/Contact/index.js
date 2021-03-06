import React, { useState } from "react";

import { validateEmail } from "../../utils/helpers";

function Contact() {
  // const [formState, setFormState] = useState({
  //   name: "",
  //   email: "",
  //   message: "",
  // });

  // const [errorMessage, setErrorMessage] = useState("");
  // const { name, email, message } = formState;

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (!errorMessage) {
  //     // setFormState({ [e.target.name]: e.target.value });
  //     console.log("Form", formState);
  //   }
  // };

  // const handleChange = (e) => {
  //   if (e.target.name === "email") {
  //     const isValid = validateEmail(e.target.value);
  //     if (!isValid) {
  //       setErrorMessage("Your email is invalid.");
  //     } else {
  //       setErrorMessage("");
  //     }
  //   } else {
  //     if (!e.target.value.length) {
  //       setErrorMessage(`${e.target.name} is required.`);
  //     } else {
  //       setErrorMessage("");
  //     }
  //   }
  //   if (!errorMessage) {
  //     setFormState({ ...formState, [e.target.name]: e.target.value });
  //     console.log("Handle Form", formState);
  //   }
  // };

  return (
    <section className="contact-page">
      <h1 data-testid="h1tag" className="my-name">
        Contact me
      </h1>
      {/* <form id="contact-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <br />
          <input
            type="text"
            name="name"
            defaultValue={name}
            onBlur={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email address:</label>
          <br />
          <input
            type="email"
            name="email"
            defaultValue={email}
            onBlur={handleChange}
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <br />
          <textarea
            name="message"
            rows="5"
            defaultValue={message}
            onBlur={handleChange}
          />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button data-testid="button" type="submit">
          Submit
        </button>
      </form> */}
      <div className="project-container">
        <a href="mailto:john.a.clark3@gmail.com">
          <img
            src="https://img.icons8.com/clouds/100/undefined/new-post.png"
            alt="mail-logo"
          />
        </a>
        <p>john.a.clark3@gmail.com</p>
      </div>
    </section>
  );
}

export default Contact;
