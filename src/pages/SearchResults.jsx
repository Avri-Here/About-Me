import React, { useState } from "react";
import SearchResultsList from "../components/SearchResultsList";
import Header from "../components/header";
import Footer from "../components/footer";
// import FilterMenu from "../components/filtermenu";
import projects from "../data/projects";
import { useEffect } from "react";

function SearchResultsHeader() {
  const [resultsContainer, setResultsContainer] = useState(null);
  useEffect(() => {
    const resultsContainer = sessionStorage.getItem("result")
      ? JSON.parse(sessionStorage.getItem("result"))
      : null;
    setResultsContainer(resultsContainer);
    console.log(resultsContainer);
  }, []);
  return (
    <>
      {resultsContainer ? (
        <div className="main">
          <Header />
            {/* <FilterMenu /> */}
          <div className="all-results-container">
            <p className="result-count">
              About {resultsContainer.length} results (0.43 seconds)
            </p>
            <SearchResultsList resultsContainer={resultsContainer} />
          </div>
          <Footer />
        </div>
      ) : (
        <h1>No !!</h1>
      )}
    </>
  );
}
export default SearchResultsHeader;
