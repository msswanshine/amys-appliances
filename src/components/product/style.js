import { css } from '@emotion/core';

const product = css`
  background-color: white;
  border: 1px solid #cdcdcd;
  border-radius: 5px;
  flex: 0 1 100%;
  list-style: none;
  margin-bottom: 20px;

  @media (min-width: 400px) {
    flex: 0 1 calc(50% - 20px);
  }

  @media (min-width: 768px) {
    flex: 0 1 calc(33.3% - 20px);
  }

  @media (min-width: 992px) {
    flex: 0 1 calc(25% - 20px);
  }

  @media (min-width: 1200px) {
    flex: 0 1 calc(20% - 20px);
  }

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
      border-radius: 3px;
      display: inline;
      font-size: 12px;
      padding: 4px 8px;
    }
  }
`;

export default product;
