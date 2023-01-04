import React, { useState } from "react";
import { Content } from "../data/content";
import { StrictMode } from "react";
import Layout from "../components/header";
import AllResultsCard from "../components/allResultsCard";
import Header from "../components/header";
import Footer from "../components/footer";
import FilterMenu from "../components/filtermenu";
import projects from "../data/projects";

function Works() {
  return (
    <div className="main">
      <Header />
      <FilterMenu />
      <div className="all-results-container">
        <p className="result-count">
          About {projects.length} results (0.43 seconds)
        </p>
        <AllResultsCard projects={projects} />
      </div>
      <Footer />
    </div>
  );
}
export default Works;
