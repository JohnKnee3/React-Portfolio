import React from "react";
import MyResume from "../../assets/resumes/John-Clark.pdf";
function Resume() {
  return (
    <div className="resume-container">
      <div>
        <h2>download resume </h2>
        <a href={MyResume} download>
          <img src="https://img.icons8.com/cute-clipart/64/000000/pdf.png" />
        </a>
      </div>
      <h2 className="resume">font-end technologies</h2>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>jQuery</li>
        <li>React.js</li>
        <li>Framework (Bootstrap, Materalize)</li>
        <li>Responsive Web Design</li>
        <li>Templating language (Handlebars)</li>
      </ul>
      <h2 className="resume">back-end technologies</h2>
      <ul>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>MySQL (mysql, sequelize)</li>
        <li>NoSQL (MongoDB, Mongoose)</li>
        <li>API's (web, third-party, RESTful, server-side)</li>
      </ul>
    </div>
  );
}

export default Resume;
