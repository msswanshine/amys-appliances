import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/header/header';
import ProductsList from './components/product-list/product-list';

import './App.css';

function App() {
  const [data, setData] = useState({ data: [] })
  const url = 'https://api.bestbuy.com/v1/products(search=oven&search=stainless&search=steel)?format=json&show=all&apiKey=mPlbr5GXMVkagVgzwT7T2V5X';

  useEffect(() => {
    let ignore = false;

    async function fetchData() {
      const result = await axios(url);
      if (!ignore) setData(result.data);
      if (result.error) {
        console.error(result.error);
      }
    }

    fetchData();
    return () => { ignore = true; }
  }, []);

  return (
    <div className="App">
      <Header
        count={data.to}
        total={data.total}
        currentPage={data.currentPage}
        totalPages={data.totalPages}
      />
      <ProductsList
        products={data.products}
      />
    </div>
  );
}

export default App;
