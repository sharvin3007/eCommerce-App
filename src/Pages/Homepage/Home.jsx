import React, { useState } from "react";
import Product from "../../Components/Product/Product";
import "./home.css";
import productData from "../../data/products.json";

const Home = () => {
  const [product, setProduct] = useState(productData);

  return (
    <>
      <div className="header">
        <div className="headerContainer">
          <h2 className="col-12 text-left my-3 fw-bold">Women's Tops</h2>
        </div>
      </div>
      {/* creating room component */}
      <div className="content">
        <div className="products container-fluid">
          <div className="row justify-content-left mx-5 my-5">
            {product.map((prodObj) => (
              <Product dataPacket={prodObj} key={prodObj.index} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
