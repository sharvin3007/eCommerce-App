import React from "react";
import "./product.css";

const Product = (props) => {
  const exclusive = props.dataPacket.isExclusive;

  return (
    <div className="col-lg-3 col-sm-6 col-xs-1 card my-3 py-3 border-0">
      <div className="product-img text-center">
        <img
          className="product-photo"
          alt="First product"
          src={props.dataPacket.productImage}
        />
      </div>
      <div className="product-body">
        {/* Conditional rendering based on product type */}
          {exclusive ? (
            <div className="productStatus exclusive"><p>Exclusive</p></div> ) : (<div className="productStatus sale"><p>Sale</p></div>)
          }
        <div className="productDetails">
          <span className="product-title mx-3">
            {props.dataPacket.productName}
          </span>
          <span className="product-price mx-3">{props.dataPacket.price}</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
