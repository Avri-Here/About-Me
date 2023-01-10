import "../style/styles.css";
import "../style/search.css";
import React, { Component, useEffect } from "react";
import Logo from "../components/logo";
import axios from "axios";
import Swal from "sweetalert2";
import SearchBox from "../components/searchbox";
import BoxMenuDrop from "../components/boxmenudrop";
import ProfileMenuDrop from "../components/profilemenudrop";
import { useNavigate } from "react-router-dom";
// import { Content } from "../data/content";
import { Link } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const options = [
    {
      name: "everything about you",
      value: "all",
    },
    {
      name: "about",
      value: "about",
    },
    { name: "works", value: "works" },
    { name: "writing", value: "writing" },
    { name: "images", value: "images" },
    { name: "social", value: "social" },
  ];

  // Website search
  const searchWebsite = () => {
    let path = document.querySelector(".search-input").value;

    if (path) {
      // history.push(path);
      Swal.fire({
        title: "Searching now !",
        html: "I will close in <b></b> milliseconds.",
        timerProgressBar: true,
        didOpen: async () => {
          Swal.showLoading();
          try {
            const result = await axios.get(
              "http://localhost:3001/search?search=" + path
            );
            sessionStorage.setItem("result", JSON.stringify(result.data));
            Swal.close();
            navigate("SearchResults")

          } catch (error) {
            Swal.close();
          }
        },
      });
    }
  };

  useEffect(() => {
    let inputField = document.querySelector(".search-input");
    //Trigger search when the enter key is pressed
    inputField.addEventListener("keyup", function (event) {
      if (event.keyCode === 13) {
        event.preventDefault();
        searchWebsite();
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // I'm Feeling Lucky search
  function feelingLucky() {
    let path = document.querySelector(".search-input").value;

    // Route to random page if search input is empty
    if (!path) {
      // history.push(`/${options[Math.floor(Math.random() * options.length)].value}`);
      return;
    }

    /* Get all elements matching the search term */
    // const item = Content.filter((item) => item.category === path);

    // Get the link of the first match
    // Redirect to first match, if it exists
    // if (item[0]) {
    //   const url = item[0].link;
    //   window.location.href = url;
    // } else if (path) {
    //   // history.push(path);
    // }
  }

  return (
    <div className="home main">
      <div className="top-menu">
        <span className="top-menu-item no-show-mobile">
          {" "}
          <a href="mailto:Yoti1492@gmail.com"> Email </a>
        </span>
        <span className="top-menu-item no-show-mobile">
          {" "}
          <a href="https://github.com/Avri-Here"> GitHub </a>
        </span>
        <BoxMenuDrop />
        <ProfileMenuDrop />
      </div>
      <div className="flex-center">
        <div className="search-container">
          <div className="frontpage-logo">
            <Logo />
          </div>
          <SearchBox options={options} />
          <div className="search-btns">
            <input
              className="search-btn sw"
              type="button"
              value="Search Website"
              onClick={searchWebsite}
            />
            <input
              className="search-btn ifl"
              type="button"
              value="I'm Feeling Lucky"
              onClick={searchWebsite}
            />
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="footer-links">
          <div className="footer-links-section">
            <a
              href="https://docs.google.com/document/d/1pXMp9FGny9bGaZEq64_NX8EVglRdx4TMKV2n47E0tAY/edit?rtpof=true&sd=true"
              target="_blank"
            >
              About{" "}
            </a>
            <Link to="/works"> Projects </Link>
          </div>
          <div className="footer-links-section">
            <a href="https://github.com/Avri-Here" target="_blank">
              {" "}
              GitHub{" "}
            </a>
            <a
              href="https://www.linkedin.com/in/avraham-yom-tov-a74525231/"
              target="_blank"
            >
              {" "}
              LinkedIn{" "}
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default Home;
