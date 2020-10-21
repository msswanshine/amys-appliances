import { css } from '@emotion/core';

const half = "calc(50% - 20px)"
const third = "calc(33.3% - 20px)"
const quarter = "calc(25% - 20px)"

const productList = css`
  display: grid;
  grid-column-gap: 20px;
  grid-template-columns: 100%;
  grid-template-rows: auto;
  margin: 48px auto;
  padding-left: 0;
  width: 100%;

  @media (min-width: 400px) {
    grid-template-columns: ${half} ${half};
    width: calc(100% + 20px);
  }

  @media (min-width: 768px) {
    grid-template-columns: ${third} ${third} ${third};
  }

  @media (min-width: 992px) {
    grid-template-columns: ${quarter} ${quarter} ${quarter} ${quarter};
  }
`;

export default productList;
