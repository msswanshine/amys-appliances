import { css } from '@emotion/core';

const product = css`
  background-color: white;
  border: 1px solid #cdcdcd;
  border-radius: 5px;
  list-style: none;
  margin-bottom: 20px;

  .product__image {
    border-bottom: 1px solid #cdcdcd;
    height: 150px;
    padding: 10px 16px;

    img {
      object-fit: contain;
      height: 150px;
      width: 100%;
    }
  }

  .product__text {
    padding: 0 16px 12px;

    .product__price {
      background-color: #efefef;
      border: 1px solid #cdcdcd;
      border-radius: 3px;
      display: inline;
      font-size: 14px;
      font-weight: 700;
      padding: 4px 8px;
    }
  }
`;

export default product;
