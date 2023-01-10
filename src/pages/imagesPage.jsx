import React from "react";
import "./Css/imagesPage.css";
import Header from "../components/header";
import Footer from "../components/footer";
import FilterMenu from "../components/filtermenu";

const ImagesPage = () => {
  const arrImage = Array.from({ length: 9 }, (_, i) => i + 1);
  return (
    <div className="main">
      <Header />
      <FilterMenu />
      <div className="images-content">
        {arrImage.map((item) => (
          <div className="images--card">
            <img src={item.img} alt={item.name} />
            <img src={require("../images/MyImages/" + item + ".jpg")} />
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default ImagesPage;
