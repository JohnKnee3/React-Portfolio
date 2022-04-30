import React from "react";
import turkey from "../../assets/images/turkey.jpg";

function About() {
  return (
    <div className="about-me">
      <section id="about-me">
        <div>
          <h2 className="my-name">About Me</h2>
          <img
            src={turkey}
            alt="image of a turkey"
            className="img-thumbnail"
            key={"turkey.jpg"}
          />
          <p className="talk-about-me">
            I am a Turkey, well not exactly. But I once saw a Turkey all fluffed
            out chasing a bus and I was like "Yeah....I get you. I think I
            matter sometimes too." It was a beautiful moment reminding me of my
            importance. <br />
            <br />
            But seriously though...
            <br />
            <br />I am a well rounded web developer with knowledge of front-end
            and back-end languages. I have a strong bias for ensuring I deliver
            a quality product that meet and exceed the requirements. I will be
            completing a Professional Coding Bootcamp from the University of
            Utah in May, and have found a passion in this field that I look
            forward to continuing.
            <br />
            <br />
            Gobble gobble, gobble gobble.
          </p>
        </div>
      </section>
    </div>
  );
}

export default About;
