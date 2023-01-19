import "./componentsCss/searchbox.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faTimes
} from "@fortawesome/free-solid-svg-icons";
import {
  useHistory
} from "react-router-dom";

const SearchBox = () => {
  const history = useHistory();
















  return (
    <div>
      <div>
      </div>
      <div className="search-box">
        <div className="search-cont">
          <FontAwesomeIcon className="fa fa-search" icon={faSearch} />

          <div className="search">
            <div className="search-value">
              <select onChange={((e) => {
                history.push(e.target.value);
              })}
                name="cars" id="cars" className="search-input">
                <option style={{textAlign:"center"}} value="HomePage">Home Page</option>
                <option style={{textAlign:"center"}} value="projects">My Projects</option>
                <option style={{textAlign:"center"}} value="images">My Images</option>
              </select>
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
                </div>
              }
            </div>
          </div>
          <FontAwesomeIcon
            className="fa fa-times clear-icon"
            icon={faTimes}
            title="Clear"
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
