import React from 'react'
import './product.css'

const Product = (props) => {
  const exclusive = props.dataPacket.isExclusive
  const sale = props.dataPacket.isSale

  return (
    <div className="col-lg-3 col-sm-6 col-xs-1 card my-3 py-3 border-0">
      <div className="product-img text-center">
        <img
          className="product-photo"
          alt="Onsale product"
          src={'./Images/' + props.dataPacket.productImage}
        />
      </div>
      <div className="product-body">
        {/* Conditional rendering based on product type (exclusive and sale) */}
        {exclusive
          ? (
          <div className="productStatus exclusive">
            <p>Exclusive</p>
          </div>
            )
          : null}
        {sale
          ? (
          <div className="productStatus sale">
            <p>Sale</p>
          </div>
            )
          : null}
        {/* Conditional rendering based on product type (exclusive and sale) */}
        <div className="productDetails">
          <span className="product-title mx-3">
            {props.dataPacket.productName}
          </span>
          <span className="product-price mx-3">{props.dataPacket.price}</span>
        </div>
      </div>
    </div>
  )
}

export default Product
