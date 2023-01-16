import "../styles.css";
import axios from "axios";
import Swal from "sweetalert2";
import { createClient } from 'pexels';
import React, { useEffect } from "react";
import Logo from "../components/logo";
import SearchBox from "../components/searchbox";
import BoxMenuDrop from "../components/boxmenudrop";
import ProfileMenuDrop from "../components/profilemenudrop";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

function Home() {
  const history = useHistory();



  const searchImages = () => {
    let query = document.querySelector(".search-input").value;
    if (query) {
      Swal.fire({
        title: "Searching now !",
        html: "Hope to finish soon .. ",
        timerProgressBar: true,
        didOpen: async () => {
          Swal.showLoading();
          const client = createClient('563492ad6f91700001000001cdd8e3d1841549b9920090022364ee57');
          client.photos.search({ query, per_page: 12 }).then(photos => {
            console.log(photos.photos);
            sessionStorage.setItem("result", JSON.stringify(photos.photos))
            Swal.close();
            history.push("searchResults");
          }).catch((err) => {
            Swal.close();
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Please try again !",
            });
            console.log(err);
          })
        },
      });
    }
  };
  const searchJoke = async () => {
    let query = document.querySelector(".search-input").value;
    if (query) {
      Swal.fire({
        title: "Searching now !",
        html: "Hope to finish soon .. ",
        timerProgressBar: true,
        didOpen: async () => {
          Swal.showLoading();
          const client = await axios.get("https://sv443.net/jokeapi/v2/joke/ANY?type=" + query).then(res => {
            console.log(res.data);
            sessionStorage.setItem("result", JSON.stringify(res))
            Swal.close();
            // history.push("searchResults");
          }).catch((err) => {
            Swal.close();
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Please try again !",
            });
            console.log(err);
          })
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
        // searchImages();
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
          <SearchBox />
          <div className="search-btns">
            <input
              className="search-btn sw"
              type="button"
              value="Search Images"
              onClick={searchImages}

            />
            <input
              className="search-btn ifl"
              type="button"
              value="Search A Joke "
              onClick={searchJoke}
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
