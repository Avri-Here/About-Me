import "./style/styles.css";
import "./style/search.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Projects from "./pages/Projects";
import Home from "./pages/home";
import SearchResultsRender from "./pages/SearchResults";
import ImagesPage from "./pages/imagesPage";
import ContactMe from "./pages/ContactMe";
// import about from "./pages/about";
// import social from "./pages/social";
// import AllResults from "./pages/allResults";
// import ProjectsPage from "./pages/projectsPage";
// import BlogPage from "./pages/blogPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="Home" element={<Home />} />
          <Route path="images" element={<ImagesPage />} />
          <Route path="Projects" element={<Projects />} />
          <Route path="SearchResults" element={<SearchResultsRender />} />
          <Route path="contactMe" element={<ContactMe />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
