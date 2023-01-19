import "./componentsCss/boxmenudrop.css";
import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTh } from "@fortawesome/free-solid-svg-icons";
import logo from "../images/Save/e-logo.png";
import li from "../images/Save/linkedIn-icon.png";
import gh from "../images/Save/github-icon.png";
import suitcase from "../images/Save/suitcase.png";
import img from "../images/Save/image.png";
import about from "../images/Save/info.png";

const BoxMenuDrop = () => {
  const [isActive, setActive] = useState("false");

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
            <img src={logo} alt="" />
            <p> Home </p>
          </Link>
          <Link className="drop-link" to="/images">
            <img src={img} alt="" />
            <p>Images </p>
          </Link>

          <Link className="drop-link" to="/projects">
            <img src={suitcase} alt="" />
            <p> Projects </p>
          </Link>
          <a
            className="drop-link"
            href="https://docs.google.com/document/d/1Di3kbqK4SZkp8YGsaP2b5Xo5x-7GoSdE/edit"
            target="_blank"
          >
            <img src={about} alt="" />
            <p>Resume</p>
          </a>
          <a
            target="_blank"
            className="drop-link"
            href="https://github.com/Avri-Here"
          >
            <img src={gh} alt="" />
            <p> GitHub </p>
          </a>
          <a
            className="drop-link"
            target="_blank"
            href="https://www.linkedin.com/in/avraham-yom-tov-a74525231/"
          >
            <img src={li} alt="" />
            <p> LinkedIn </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default BoxMenuDrop;
