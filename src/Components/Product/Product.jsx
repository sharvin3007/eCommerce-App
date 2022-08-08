import React from "react";
import "./product.css";

const Product = (prop) => {
  return (
    <div className="content">
      <div className="products container-fluid">
        <div className="row justify-content-left mx-5 my-5">
          <div className="col-lg-3 col-sm-6 col-xs-1 card my-3 py-3 border-0">
            <div className="product-img text-center">
              <img
                className="product-photo"
                alt="First product"
                src="./Images/product-1.jpg"
              />
            </div>
            <div className="product-body">
              <div className="productStatus">
                <p>Sale</p>
              </div>
              <span className="product-title fw-bold fs-4 mx-3">
                Test product
              </span>
              <span className="product-price mx-3">$ XX.00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
