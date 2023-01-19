import "../styles.css";
import React from "react";
import Logo from "../components/logo";
import SearchBox from "../components/searchbox";
import BoxMenuDrop from "../components/boxmenudrop";
import ProfileMenuDrop from "../components/profilemenudrop";
import { Link } from "react-router-dom";

function Home() {



  // const searchImages = () => {
  //   let query = document.querySelector(".search-input").value;
  //   if (query) {
  //     Swal.fire({
  //       title: "Searching now !",
  //       html: "Hope to finish soon .. ",
  //       timerProgressBar: true,
  //       didOpen: async () => {
  //         Swal.showLoading();
  //         const client = createClient('563492ad6f91700001000001cdd8e3d1841549b9920090022364ee57');
  //         client.photos.search({ query, per_page: 12 }).then(photos => {
  //           console.log(photos.photos);
  //           if (photos.photos.length === 0) {
  //             throw new Error("No matching photos found !")
  //           }
  //           sessionStorage.setItem("result", JSON.stringify(photos.photos))
  //           Swal.close();
  //           history.push("searchResults");
  //         }).catch((err) => {
  //           document.querySelector(".search-input").value = ""
  //           Swal.close();
  //           Swal.fire({
  //             icon: "error",
  //             title: "Oops...",
  //             text: err.message + "!" || "Please try again !",
  //           });
  //           console.log(err);
  //         })
  //       },
  //     });
  //   }
  // };
  // const searchJoke = async () => {
  //   let query = document.querySelector(".search-input").value;
  //   if (query) {
  //     Swal.fire({
  //       title: "Searching now !",
  //       html: "Hope to finish soon .. ",
  //       timerProgressBar: true,
  //       didOpen: async () => {
  //         Swal.showLoading();
  //         const client = await axios.get("https://v2.jokeapi.dev/joke/Programming?type=twopart?safe-mode&contains=" +
  //           query).then(res => {
  //             console.log(res.data);
  //             if (res.data.error) {
  //               throw new Error(res.data.message)
  //             }
  //             sessionStorage.setItem("result", JSON.stringify(res.data))
  //             Swal.close();
  //             history.push("SearchResultsJoke");
  //           }).catch((err) => {
  //             document.querySelector(".search-input").value = ""
  //             console.log(err);
  //             Swal.close();
  //             Swal.fire({
  //               icon: "error",
  //               title: "Oops...",
  //               text: err.message + " !" || "Please try again !",
  //             });
  //           })
  //       },
  //     });
  //   }
  // };



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
        </div>
      </div>

      <footer className="footer">
        <div className="footer-links">
          <div className="footer-links-section">
            <a
              href="https://docs.google.com/document/d/1pXMp9FGny9bGaZEq64_NX8EVglRdx4TMKV2n47E0tAY/edit?
              rtpof=true&sd=true"
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
