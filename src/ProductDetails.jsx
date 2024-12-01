import React from "react";
import { Link } from "react-router-dom";
import image from "./image1.jpeg";
import Header from "./Header";

const ProductDetails = ({ distanceInInches }) => {
    const distanceCal=distanceInInches;
    let isCal=false;
    if(distanceCal>0){
        isCal=true;
    }
  return (
    <>
    <Header/>
    <section id="product-details">
      <div className="details-container">
        <img
          src={image}
          alt="Product 1"
        />
        <div className="details">
          <h2>Product 1</h2>
          <p className="price">$10.00</p>
          <p>Select Size:</p>
          <div className="size-options">
            <button style={isCal ? { backgroundColor: "#ff6f61" } : {}}>S</button>
            <button>M</button>
            <button>L</button>
          </div>
          <div>
            <Link to="/camera" className="icon-button">
              <i className="fa fa-camera"></i> Run Camera
            </Link>
            <p id="length">Length is {distanceInInches} inches</p>
          </div>
          <p>Description:</p>
          <p>
            This is a high-quality shirt available in multiple sizes. Perfect
            for casual wear.
          </p>
          <button className="add-to-cart">Add to Cart</button>
        </div>
      </div>
    </section>
    </>
  );
};

export default ProductDetails;
