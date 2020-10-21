import { css } from '@emotion/core';

const header = css`
  position: relative;

  &.sticky .sticky-header__inner-wrapper {
    background-color: #efefef;
    border-bottom: 1px solid #cdcdcd;
    padding: 20px 0;
    position: fixed;
    top: 0;
    width: 90%
  }

  .product-count {
    display: flex;
    justify-content: space-between;
  }
`;

export default header;
