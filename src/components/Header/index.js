import React, { useState } from "react";
import Nav from "../Nav";
import About from "../About";
import Project from "../Project";
import Contact from "../Contact";
import Resume from "../Resume";

function Header() {
  const [currentPage, setCurrentPage] = useState("About");

  const renderPage = () => {
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Project") {
      return <Project />;
    }

    if (currentPage === "Contact") {
      return <Contact />;
    }
    return <Resume />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <div className="header-container">
        <h1 className="my-name">John Clark</h1>
        <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      </div>
      <div>{renderPage()}</div>
    </div>
  );
}

export default Header;
