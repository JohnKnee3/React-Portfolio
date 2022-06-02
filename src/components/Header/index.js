import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const url = useLocation().pathname;

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
              to="/React-Portfolio/"
              // href="#about"
              // onClick={() => handlePageChange("/React-Portfolio")}
              className={
                currentPage === "/React-Portfolio/"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/React-Portfolio/Project"
              // href="#project"
              // onClick={() => handlePageChange("/React-Portfolio/Project")}
              className={
                currentPage === "/React-Portfolio/Project"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/React-Portfolio/Contact"
              // href="#contact"
              // onClick={() => handlePageChange("/React-Portfolio/Contact")}
              className={
                currentPage === "/React-Portfolio/Contact"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Contact
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/React-Portfolio/Resume"
              // href="#resume"
              // onClick={() => handlePageChange("/React-Portfolio/Resume")}
              className={
                currentPage === "/React-Portfolio/Resume"
                  ? "nav-link active"
                  : "nav-link"
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
