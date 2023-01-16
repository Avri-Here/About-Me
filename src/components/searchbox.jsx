import "./componentsCss/searchbox.css";
import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Swal from "sweetalert2";
import {
  faSearch,
  faTimes
} from "@fortawesome/free-solid-svg-icons";
import {
  useHistory
} from "react-router-dom";
import MobileSearch from "./mobileSearch";

const SearchBox = () => {

  // Get url pathname to use as search value
  const urlPathname = window.location.pathname;
  var rx = /[^/](.*)/g;
  var arr = rx.exec(urlPathname);
  let val = "";
  if (arr) {
    val = arr[0];
  }



  useEffect(() => {
    const clearBtn = document.querySelector(".clear-icon");
    let input = document.querySelector(".search-input").value;
    // Only show the clear button when the input field is nonempty
    if (input) {
      clearBtn.style.display = "none";
    } else {
      clearBtn.style.display = "inline-block";
    }
  }, []);


  // Clear input field
  function clear() {
    let input = document.querySelector(".search-input");
    input.value = "";
  }

  const clearValue = (e) => {

    let pattern = /^[A-Za-z]+$/;
    let words = e.target.value.split(" ");

    if (words.length !== 1 || !pattern.test(e.target.value)) {
      Swal.fire({
        text: 'Search for one word without spaces And only English letters !',
        target: '#custom-target',
        toast: true,
        position: 'center'
      })
      e.target.value = "";
      return;
    }
    let closeIcon = document.querySelector(".clear-icon");
    let searchValue = document.querySelector(".search-input").value;

    if (searchValue) {
      closeIcon.style.display = "inline-block";
      // When the search input is not empty, give it a subtle box shadow
      document.querySelector(
        ".search"
      ).style.boxShadow = `1px 1px 6px rgba(0,0,0,0.2)`;
    } else {
      closeIcon.style.display = "none";
      document.querySelector(".search").style.boxShadow = `none`;
    }
  };

  useEffect(() => {
    // Trigger search when enter key is pressed
    let inputField = document.querySelector(".search-input");
    inputField.addEventListener("keyup", function (event) {
      if (event.keyCode === 13) {
        event.preventDefault();
        searchWebsite();
      }
    });

    // As soon as the page loads, show the clear button if the search input field is nonempty
    let closeIcon = document.querySelector(".clear-icon");
    let searchValue = document.querySelector(".search-input").value;
    if (searchValue) {
      closeIcon.style.display = "inline-block";
      document.querySelector(
        ".search"
      ).style.boxShadow = `1px 1px 6px rgba(0,0,0,0.2)`;
    } else {
      closeIcon.style.display = "none";
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // "Search" Website, which works by pushing the search term to the url and redirecting to it
  const history = useHistory();
  const searchWebsite = () => {
    let path = document.querySelector(".search-input").value;
    if (path) {
      history.push(path);
    }
  };



  return (
    <div>
      <div>
        <MobileSearch />
      </div>
      <div className="search-box">
        <div className="search-cont">
          <FontAwesomeIcon className="fa fa-search" icon={faSearch} />

          <div className="search">
            <div className="search-value">
              <input
                placeholder="Image search only !"
                autoComplete="on"
                className="search-input"
                defaultValue={val}
                onChange={(e) => { clearValue(e) }}
                pattern="[A-Za-z]+"
                required

              />
              <div id="custom-target"></div>
            </div>
            <div className="search-select">
              <div className="search-options">
              </div>
              {
                <div
                  className="search-btns"
                  style={{ paddingTop: "20px", paddingBottom: "30px" }}
                >
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
              }
            </div>
          </div>
          <FontAwesomeIcon
            className="fa fa-times clear-icon"
            icon={faTimes}
            title="Clear"
            onClick={clear}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
