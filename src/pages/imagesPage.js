import React from "react";
import "./imagesPage.css";
import Header from "../components/header";
import Footer from "../components/footer";
import FilterMenu from "../components/filtermenu";

const ImagesPage = ({ results }) => {
  const arrImage = Array.from({ length: 9 }, (_, i) => i + 1);
  console.log(arrImage);
  return (
    <div className="main">
      <Header />
      <FilterMenu />
      <div className="images-content">
        {arrImage.map((item) => (
          <div className="images--card">
            {/* <a href={item.link} className="images--img-container"> */}
            <img src={item.img} alt={item.name} />
            <img src={require("../images/MyImages/" + item + ".jpg")} />
            {/* </a> */}
            {/* <a href={item.link} className="images--text-container">
              <p className="images--name">{`${item.name}`}</p>
              <p className="images--link">{`${item.link}`}</p>
            </a> */}
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default ImagesPage;
