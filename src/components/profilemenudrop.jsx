import "./componentsCss/profilemenudrop.css";
import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import Me from "../images/Save/Me.png";
const ProfileMenuDrop = () => {
  const [isProfileActive, setProfileActive] = useState("false");
  // Toggle the dropdown
  const handleToggle = () => {
    setProfileActive(!isProfileActive);
  };

  // Hide the dropdown when user clicks outside the element
  function useOutsideHandler(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target.parentElement)) {
          setProfileActive(!!isProfileActive);
        }
      }

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  const wrapperProfileRef = useRef(null);
  useOutsideHandler(wrapperProfileRef);

  return (
    <div
      className="profile dropdown"
      onClick={handleToggle}
      ref={wrapperProfileRef}
    >
      <img className="profile-pic dropbtn" src={Me} alt="profile" />
      <div
        className={
          isProfileActive
            ? "profile-details-dropdown dropdown-hide"
            : "profile-details-dropdown dropdown-show"
        }
      >
        <div className="first-detail">
          <img className="" src={Me} alt="profile" />
          <p className="detail-text"> Avri Yom Tov </p>
          <br />
          <p className="detail-text"> Yoti1492@gmail.com </p>
          <br />
          <a
            href="https://github.com/Avri-Here?tab=repositories"
            target={"_blank"}
          >
            {" "}
            My repositories !{" "}
          </a>
        </div>
        <a className="second-detail" href="https://splendid-tartufo-33b42a.netlify.app/" target={"_blank"} >
          <FontAwesomeIcon className="fa-user-plus" icon={faUserPlus} />
          <p> Stay in Touch </p>
        </a>
        <div className="third-detail">
          <a href="https://github.com/Avri-Here" target="_blank">
            {" "}
            GitHub
          </a>
        </div>
        <div className="fourth-detail">
          <a href="https://docs.google.com/document/d/1pXMp9FGny9bGaZEq64_NX8EVglRdx4TMKV2n47E0tAY/edit?rtpof=true&sd=true" target={"_blank"} >My resume</a> <span> ??? </span>
          <a href="https://github.com/Avri-Here/About-Me.git" target={"_blank"}> View code </a>
        </div>
      </div>
    </div>
  );
};

export default ProfileMenuDrop;
