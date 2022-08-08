import React from "react";
import Product from "../../Components/Product/Product";
import "./home.css";

const Home = () => {
  return (
    <>
      <div className="header">
        <div className="headerContainer">
          <h2 className="col-12 text-left my-3 fw-bold">Women's Tops</h2>
        </div>
      </div>
      <Product />
    </>
  );
};

export default Home;
