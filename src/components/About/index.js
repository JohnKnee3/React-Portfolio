import React from "react";
import turkey from "../../images/turkey.jpg";

function About() {
  return (
    <div>
      <section id="about-me">
        <div className="about-me">
          <h2>About Me</h2>
          <img
            src={turkey}
            alt="image of a turkey"
            className="img-thumbnail mx-1"
            key={"turkey.jpg"}
          />
          <p>
            I am a Turkey, well not exactly. But I once saw a Turkey all fluffed
            out chasing a bus and I was like "Yeah....I get you. I think I
            matter sometimes too." It was a beautiful moment reminding me of my
            importance.
          </p>
        </div>
      </section>
    </div>
  );
}

export default About;
