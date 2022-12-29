import "./boxmenudrop.css";
import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTh } from "@fortawesome/free-solid-svg-icons";
import logo from "../images/e-logo.png"
import li from "../images/linkedIn-icon.png"
import gh from "../images/github-icon.png"
import googleIconSearch from "../images/IconsLogo/googleIconSearch.png"
import suitcase from "../images/suitcase.png"
import email from "../images/gmail-icon.png"
import w3schools from "../images/IconsLogo/W3Schools_logo.svg.png"
import gpt from "../images/IconsLogo/gpt.png"
import img from "../images/image.png"
import about from "../images/info.png"


const BoxMenuDrop = () => {
  const [isActive, setActive] = useState("false");

  // Toggle the dropdown
  const handleToggle = () => {
    setActive(!isActive);
  };

  // Hide the dropdown when user clicks outside the element
  function useOutsideHandler(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target.parentElement)) {
          setActive(!!isActive);
        }
      }

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  const wrapperRef = useRef(null);
  useOutsideHandler(wrapperRef);

  return (
    <div className="dropdown" onClick={handleToggle} ref={wrapperRef}>
      <FontAwesomeIcon className="fas fa-th dropbtn" icon={faTh} />
      <div
        id="drop"
        className={
          isActive
            ? "dropdown-content-cont dropdown-hide"
            : "dropdown-content-cont dropdown-show"
        }
      >
        <div className="drop-item">
          <Link className="drop-link" to="/">
            <img
              src={logo}
              alt=""
            />
            <p> Search </p>
          </Link>
          <a className="drop-link" href="https://docs.google.com/document/d/1IWAQSObE0iCIvH_oAI1wvzHuMpBtAZGZ/edit?usp=sharing&ouid=112982673713668978351&rtpof=true&sd=true" target="_blank"><img
            src={about}
            alt=""
          />
            <p> About </p></a>
          <Link className="drop-link" to="/works">
            <img
              src={suitcase}
              alt=""
            />
            <p> Works </p>
          </Link >
          <Link className="drop-link" to="/images">
            <img
              src={img}
              alt=""
            />
            <p> Images </p>
          </Link >
          <a className="drop-link" href="https://github.com/Avri-Here">
            <img
              src={gh}
              alt=""
            />
            <p> GitHub </p>
          </a>
          <a className="drop-link" href="https://www.linkedin.com/in/c1e0/">
            <img
              src={li}
              alt=""
            />
            <p> LinkedIn </p>
          </a>
          <a className="drop-link" href="https://www.google.co.il/" target="_blank"><img
            src={googleIconSearch}
            alt=""
          />
            <p> Google </p></a>
          <a className="drop-link" href="https://www.w3schools.com/">
            <img
              src={w3schools}
              alt=""
            />
            <p>W3schools</p>
          </a>
          <a className="drop-link" href="https://chat.openai.com/">
            <img
              src={gpt}
              alt=""
            />
            <p>ChatGpt</p>
          </a>

        </div>
      </div>
    </div>
  );
};

export default BoxMenuDrop;
