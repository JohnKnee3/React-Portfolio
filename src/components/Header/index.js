import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
// import Nav from "../Nav";
// import About from "../About";
// import Project from "../Project";
// import Contact from "../Contact";
// import Resume from "../Resume";

function Header() {
  // let nowPage = "/React-Portfolio";
  const url = useLocation();
  const nowPage = url.pathname;
  const [currentPage, setCurrentPage] = useState(nowPage);

  // console.log("I am {pathname", { pathname });

  // const renderPage = () => {
  //   if (currentPage === "About") {
  //     return <About />;
  //   }
  //   if (currentPage === "Project") {
  //     return <Project />;
  //   }

  //   if (currentPage === "Contact") {
  //     return <Contact />;
  //   }
  //   return <Resume />;
  // };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <div className="header-container">
        <h1 className="my-name my-real-name">John Clark</h1>
        {/* <Nav currentPage={currentPage} handlePageChange={handlePageChange} /> */}
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <Link
              to="/React-Portfolio"
              // href="#about"
              onClick={() => handlePageChange("/React-Portfolio")}
              className={
                currentPage === "/React-Portfolio"
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
              onClick={() => handlePageChange("/React-Portfolio/Project")}
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
              onClick={() => handlePageChange("/React-Portfolio/Contact")}
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
              onClick={() => handlePageChange("/React-Portfolio/Resume")}
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
      {/* <div>{renderPage()}</div> */}
    </div>
  );
}

export default Header;
