import React from "react";
import MyResume from "../../assets/resumes/John-Clark.pdf";
function Resume() {
  return (
    <div class="resume-container">
      <h2 class="resume">font-end technologies</h2>
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
      <h2 class="resume">back-end technologies</h2>
      <ul>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>MySQL (mysql, sequelize)</li>
        <li>NoSQL (MongoDB, Mongoose)</li>
        <li>API's (web, third-party, RESTful, server-side)</li>
      </ul>
      <a href={MyResume} download>
        <img src="https://img.icons8.com/cute-clipart/64/000000/pdf.png" />
      </a>
      <p>Resume</p>
    </div>
  );
}

export default Resume;
