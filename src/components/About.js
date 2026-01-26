import React from "react";
import "../index.css";

const About = () => {
  return (
    <div className="about-page">

      <h2 className="about-heading">About Our Bookstore</h2>

      <p className="about-text">
        Our Bookstore is a web-based application developed as part of an
        assignment to demonstrate practical knowledge of frontend development
        using modern web technologies. The project focuses on building a clean,
        user-friendly, and interactive interface for managing and browsing
        books without relying on any external backend or third-party APIs.
      </p>

      <h3 className="about-subheading">Project Highlights</h3>

      <ul className="about-list">
        <li>Developed using React.js with reusable and dynamic components.</li>
        <li>Implemented client-side routing using React Router.</li>
        <li>Organized books into multiple categories for easy navigation.</li>
        <li>Created an All Books page with accordion-style sections.</li>
        <li>
          Implemented interactive features such as Add, Edit, and Delete book
          modals.
        </li>
        <li>Designed a responsive and consistent user interface using CSS.</li>
        <li>
          Used structured sample data to simulate real-world book information.
        </li>
      </ul>

      <h3 className="about-subheading">Assignment Approach</h3>

      <ul className="about-list">
        <li>
          No backend or external APIs were used, as none were provided in the
          assignment.
        </li>
        <li>
          All functionalities were implemented on the frontend to demonstrate
          component-based architecture and state management.
        </li>
        <li>
          Focused on writing clean, reusable, and maintainable code.
        </li>
      </ul>

      <h3 className="about-subheading">Purpose of the Project</h3>

      <p className="about-text">
        The main objective of this project is to showcase practical skills in
        frontend development, including layout design, navigation, component
        reuse, and interactive user interfaces. This application reflects the
        ability to translate assignment requirements into a functional and
        visually appealing web solution.
      </p>

    </div>
  );
};

export default About;
