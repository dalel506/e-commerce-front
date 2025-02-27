import React from "react";
import { Link } from "react-router-dom";
import "./ParallaxStyles.css";

const ParallaxSection = () => {
  return (
    <div className="parallax">
      <div className="content">
        <h1>Sublimez Votre Beauté au Naturel</h1>
        <p>
        "Chez LUNALYS, nous proposons des produits de beauté de qualité pour sublimer votre peau. Notre mission est de vous offrir des soins adaptés à vos besoins, alliant efficacité et bien-être. 
        Parce que votre beauté mérite le meilleur, tout simplement."
        </p>
        <Link to="/products" >
        <button className="learn-more">Découvrir</button>
        </Link>
      </div>
      </div>
  
  );
};

export default ParallaxSection;
