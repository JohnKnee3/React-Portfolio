import React from "react";

import profile from "../../assets/images/profilePic.png";

function About() {
  return (
    <div className="about-me">
      <section id="about-me">
        <div>
          <h2 className="my-name">About Me</h2>
          <img
            src={profile}
            alt="person smiling"
            className="img-thumbnail"
            key={"profile.jpg"}
          />
          <p className="talk-about-me">
            Web Developer leveraging a detail-oriented background to bring
            energy into a new career path. Recently earned a certificate in Full
            Stack Web Development from the University of Utah Professional
            Coding Bootcamp, in May of 2022.
            <br /> <br />I have developed skills in JavaScript, CSS, React.js,
            and responsive web design through a variety of individual and group
            projects. Detail oriented with a passion for creating a quality
            product that exceeds goals and expectations.
            <br />
            <br />
            With every role and product my aim is to provide a tool that
            enhances user experience in usability and design. <br />I applied
            aspects of UX and agile development in a recent project. I worked on
            a small team to develop a single page MERN app merchandise store
            with organized categories and forums where customers can discuss
            products. <br />
            <br /> I am excited to leverage my skills and deliver results as
            part of a quality driven team.
          </p>
        </div>
      </section>
    </div>
  );
}

export default About;
