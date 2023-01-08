import React, { useState } from 'react';
import ProductData from '../shop-data.json';

const ProductsContext = React.createContext({
  products: [],
});

export const ProductContextProvider = ({ children }) => {
  const [productsState, setProductState] = useState(ProductData);

  const value = { productsState, setProductState };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContext;
