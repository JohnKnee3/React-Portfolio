import React, { useState } from "react";
import Nav from "../Nav";
import About from "../About";

function Header() {
  const [currentPage, setCurrentPage] = useState("About");

  // TODO: Add a comment describing the functionality of this method
  // This is checking the name of current page is and matches it to watch you clicked
  const renderPage = () => {
    if (currentPage === "About") {
      return <About />;
    }
    // if (currentPage === "Home") {
    //   return <Home />;
    // }

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
