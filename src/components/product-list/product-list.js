import React from 'react';
import Product from '../product/product';
import productList from './style';

export default function ProductsList({ products }) {
  return (
    <ul css={productList}>
      { products &&
        products.map((product, index) => {
          const price = product.onSale ? product.salePrice : product.regularPrice;

          return (
            <Product
              key={product.sku}
              image={product.image}
              name={product.name}
              price={price}
              description={product.shortDescription}
            />
          )
        })
      }
    </ul>
  )
}
