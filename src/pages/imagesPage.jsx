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


const images = [a1, a2, a3, a4, a5, a6, a7, a8, a9];


const ImagesPage = () => {
  return (
    <div className="main">
      <Header />
      <div className="images-content">
        {images ? images.map((item, index) => {
          return (<div className="images--card" key={index}>
            <img src={item}
              alt={index}
            />
          </div>)
        }) : null}

      </div>
      <Footer />
    </div>
  );
};

export default ImagesPage;
