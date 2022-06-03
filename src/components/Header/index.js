import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const url = useLocation().pathname;
  console.log("I am url", url);

  useEffect(() => {
    handlePageChange(url);
  });

  const [currentPage, setCurrentPage] = useState(url);

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <div className="header-container">
        <h1 className="my-name my-real-name">John Clark</h1>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <Link
              to="/"
              // href="#about"
              // onClick={() => handlePageChange("/React-Portfolio")}
              className={currentPage === "/" ? "nav-link active" : "nav-link"}
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/Project"
              // href="#project"
              // onClick={() => handlePageChange("/React-Portfolio/Project")}
              className={
                currentPage === "/Project" ? "nav-link active" : "nav-link"
              }
            >
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/Contact"
              // href="#contact"
              // onClick={() => handlePageChange("/React-Portfolio/Contact")}
              className={
                currentPage === "/Contact" ? "nav-link active" : "nav-link"
              }
            >
              Contact
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/Resume"
              // href="#resume"
              // onClick={() => handlePageChange("/React-Portfolio/Resume")}
              className={
                currentPage === "/Resume" ? "nav-link active" : "nav-link"
              }
            >
              Resume
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
