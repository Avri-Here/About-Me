import React from "react";
import "./Css/imagesPage.css";
import Header from "../components/header";
import Footer from "../components/footer";
import a1 from "../images/MyImages/1.jpg"
import a2 from "../images/MyImages/2.jpg"
import a3 from "../images/MyImages/3.jpg"
import a4 from "../images/MyImages/4.jpg"
import a5 from "../images/MyImages/5.jpg"
import a6 from "../images/MyImages/6.jpg"
import a7 from "../images/MyImages/7.jpg"
import a8 from "../images/MyImages/8.jpg"
import a9 from "../images/MyImages/9.jpg"
const ImagesPage = () => {
  return (
    <div className="main">
      <Header />
      <div className="images-content">
        <div className="images--card">
          <img src={a1} alt={"a1"} />
        </div>
        <div className="images--card">
          <img src={a2} alt={"a2"} />
        </div>
        <div className="images--card">
          <img src={a3} alt={"a3"} />
        </div>
        <div className="images--card">
          <img src={a4} alt={"a4"} />
        </div>
        <div className="images--card">
          <img src={a5} alt={"a5"} />
        </div>
        <div className="images--card">
          <img src={a6} alt={"a6"} />
        </div>
        <div className="images--card">
          <img src={a7} alt={"a7"} />
        </div>
        <div className="images--card">
          <img src={a8} alt={"a8"} />
        </div>
        <div className="images--card">
          <img src={a9} alt={"a9"} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ImagesPage;
