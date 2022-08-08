import React, { useState } from "react";
import Product from "../../Components/Product/Product";
import "./home.css";
import productData from "../../data/products.json";
import Filter from "../../Components/Filter/Filter";

const Home = () => {
  const [product, setProduct] = useState(productData);

  const [sizeType, setSizeType] = useState('')

  // Callback function to fetch user selection for sizes and pass to filter component
  const handleSize = (typeData) => {
    setSizeType(typeData)
  }

  console.log(sizeType)
  
  return (
    <>
      <div className="header">
        <div className="headerContainer">
          <h2 className="col-md-9 col-sm-1 text-left my-3 fw-bold">Women's Tops</h2>
          <Filter typeCallback={handleSize} />
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
