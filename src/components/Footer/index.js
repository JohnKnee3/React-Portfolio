import React from "react";

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <a href="https://github.com/JohnKnee3" target="_blank">
          <img
            src="https://img.icons8.com/plasticine/100/000000/github.png"
            alt="gitHub icon"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/john-clark-216530225/"
          target="_blank"
        >
          <img
            src="https://img.icons8.com/ios-glyphs/100/3498DB/linkedin-circled--v1.png"
            alt="linkedIn icon"
          />
        </a>
        <a href="https://www.indeed.com" target="_blank">
          <img
            src="https://img.icons8.com/windows/100/42648A/indeed.png"
            alt="linkedIn icon"
          />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
