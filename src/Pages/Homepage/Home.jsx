import React, { useEffect, useState } from 'react'
import Product from '../../Components/Product/Product'
import './home.css'
import Filter from '../../Components/Filter/Filter'
import { Circles } from 'react-loader-spinner'

const Home = () => {
  const [productData, setProductData] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // State defining selected size by user
  const [sizeType, setSizeType] = useState('')

  // Callback function to fetch user size selection
  const handleSize = (typeData) => {
    setSizeType(typeData)
  }

  // Using fetch API with useEffect hook to get data
  useEffect(() => {
    fetch('https://rainy-star.surge.sh/products.json')
      .then((response) => {
        if (response.ok) {
          return response.json()
        }
        throw response
      })
      .then((productData) => {
        setProductData(productData)
      })
      .catch((error) => {
        console.error('Error fetching data: ', error)
        setError(error)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  // Filter based on selected user size
  function showFilteredProduct () {
    if (sizeType && productData) {
      return productData.filter((product) => {
        return product.size.includes(sizeType)
      })
    } else return productData
  }

  if (error) return 'Error!'

  return (
    <>
      {loading
        ? (
        <div className="pageLoader">
          <Circles color="lightblue" height={80} width={80} />
        </div>
          )
        : (
        <>
          <div className="header">
            <div className="headerContainer">
              <h2 className="col-md-9 col-sm-1 text-left my-3 fw-bold title">
                Women&apos;s Tops
              </h2>
              <Filter typeCallback={handleSize} />
            </div>
          </div>
          <div className="content">
            <div className="products ">
              <div className="row justify-content-left mx-5 my-5">
                {showFilteredProduct().map((prodObj) => (
                  <Product dataPacket={prodObj} key={prodObj.index} />
                ))}
              </div>
            </div>
          </div>
        </>
          )}
    </>
  )
}

export default Home
