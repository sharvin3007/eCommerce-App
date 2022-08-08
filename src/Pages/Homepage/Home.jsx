import React, { useEffect, useState } from "react";
import Product from "../../Components/Product/Product";
import "./home.css";
import Filter from "../../Components/Filter/Filter";
import { Circles } from "react-loader-spinner";

const Home = () => {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [sizeType, setSizeType] = useState("");

  // Callback function to fetch user selection for sizes and pass to filter component
  const handleSize = (typeData) => {
    setSizeType(typeData);
  };

  // Using fetch API with useEffect hook to get data
  useEffect(() => {
    fetch("https://rainy-star.surge.sh/products.json")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  console.log(sizeType)

  return (
    <>
      {loading ? (
        <div className="pageLoader">
          <Circles color="#00BFFF" height={80} width={80} />
        </div>
      ) : (
        <>
          <div className="header">
            <div className="headerContainer">
              <h2 className="col-md-9 col-sm-1 text-left my-3 fw-bold">
                Women's Tops
              </h2>
              <Filter typeCallback={handleSize} />
            </div>
          </div>
          <div className="content">
            <div className="products container-fluid">
              <div className="row justify-content-left mx-5 my-5">
                {data.map((prodObj) => (
                  <Product dataPacket={prodObj} key={prodObj.index} />
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Home;
