import "../styles.css";
import axios from "axios";
import Swal from "sweetalert2";
import React, { useEffect } from "react";
import Logo from "../components/logo";
import SearchBox from "../components/searchbox";
import BoxMenuDrop from "../components/boxmenudrop";
import ProfileMenuDrop from "../components/profilemenudrop";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

function Home() {
  const history = useHistory();


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
            history.push("searchResults");
          } catch (error) {
            Swal.close();
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Please try again !",
            });
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
  }, []);


  return (
    <div className="home main">
      <div className="top-menu">
        <span className="top-menu-item no-show-mobile">
          <a target={"_blank"} href="https://splendid-tartufo-33b42a.netlify.app"> Email </a>
        </span>
        <span className="top-menu-item no-show-mobile">
          <a target={"_blank"} href="https://github.com/Avri-Here">
            GitHub
          </a>
        </span>
        <BoxMenuDrop />
        <ProfileMenuDrop />
      </div>
      <div className="flex-center">
        <div className="search-container">
          <div className="frontpage-logo">
            <Logo />
          </div>
          <SearchBox/>
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
            <Link to="/projects"> Projects </Link>
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
