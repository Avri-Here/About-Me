import React from "react";
import { Link } from "react-router-dom";
import "./notFound.css";
import AllResultsCard from "../components/AllResultsCardProjects";
import Header from "../components/header";
import Footer from "../components/footer";
// import FilterMenu from "../components/filtermenu";

function NotFound() {
  // Get url pathname to use as search value
  const urlPathname = window.location.pathname;
  var rx = /[^/](.*)/g;
  var arr = rx.exec(urlPathname);
  let val = " ";
  if (arr) {
    val = arr[0];
  }

  return (
    <div className="main">
      <Header />
        {/* <FilterMenu /> */}
      <div className="all-results-container notfound-page">
        <div className="suggest">
          <p> Page not found - 404 ! </p>
        </div>
        <br/>

          <button id="btnBack"
            onClick={() => {
              history.back();
            }}
          >Return to the previous page</button>
          
      </div>
      <Footer />
    </div>
  );
}
export default NotFound;
