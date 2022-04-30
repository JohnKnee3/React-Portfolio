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
            importance.
          </p>
        </div>
      </section>
    </div>
  );
}

export default About;
