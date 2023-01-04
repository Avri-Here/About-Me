import "./styles.css";
import "./search.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import about from "./pages/about";
import Works from "./pages/works";
import Home from "./pages/home";
import writing from "./pages/writing";
import social from "./pages/social";
import AllResults from "./pages/allResults";
import ProjectsPage from "./pages/projectsPage";
import ImagesPage from "./pages/imagesPage";
import BlogPage from "./pages/blogPage";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="Home" element={<Home />} />
          <Route path="images" element={<ImagesPage />} />
          <Route path="works" element={<Works />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
