import React from "react";
import "../index.css";

const Contact = () => {
  return (
    <div className="contact-page">

      <h2 className="contact-heading">Contact Me</h2>

      <p className="contact-text">
        Feel free to reach out to me for career opportunities, project collaborations, internships,
        learning opportunities, or any queries related to this bookstore Web
        Application.
      </p>

      <div className="contact-card">

        <p>
          <strong>Name:</strong> Abhinav Gupta
        </p>

        <p>
          <strong>Email:</strong>{" "}
          <a href="mailto:abhinav.gupta.1220@gmail.com">
            abhinav.gupta.1220@gmail.com
          </a>
        </p>

        <p>
          <strong>GitHub:</strong>{" "}
          <a
            href="https://github.com/a-bit-git"
            target="_blank"
            rel="noreferrer"
          >
            https://github.com/a-bit-git
          </a>
        </p>

        <p>
          <strong>LinkedIn:</strong>{" "}
          <a
            href="https://www.linkedin.com/in/abhinav1220/"
            target="_blank"
            rel="noreferrer"
          >
            https://www.linkedin.com/in/abhinav1220/
          </a>
        </p>

        <p>
          <strong>Location:</strong> India
        </p>

        <p>
          <strong>Role:</strong> Aspiring Full Stack Web Developer (MERN)
        </p>

      </div>

    </div>
  );
};

export default Contact;
