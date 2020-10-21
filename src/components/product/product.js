// Empty alt since the name provides information for the image.
import React from 'react';
import product from './style';

export default function Product({ index, sku, image, name, price, description }) {
  return (
    <li css={product}>
      <div className="product__image">
        <img src={image} alt="" />
      </div>
      <div className="product__text">
        <h2>{name}</h2>
        <p className="product__price">
          {`$${price}`}
        </p>
        <p>{description}</p>
      </div>
    </li>
  )
}
