import React, { useState } from "react";
import Nav from "../Nav";
import About from "../About";
import Project from "../Project";

function Header() {
  const [currentPage, setCurrentPage] = useState("About");

  const renderPage = () => {
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Project") {
      return <Project />;
    }

    // if (currentPage === "Blog") {
    //   return <Blog />;
    // }
    // return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <h1>John Clark</h1>
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}

export default Header;
