import React, { useState } from 'react';

const CartContext = React.createContext({});

export const CartProvider = ({ children }) => {
  const [showCart, setShowCart] = useState(false);

  const cartHandler = () => {
    setShowCart((previousState) => !previousState);
  };

  const cartValue = {
    showing: showCart,
    setShowing: cartHandler,
  };

  return (
    <CartContext.Provider value={cartValue}>{children}</CartContext.Provider>
  );
};

export default CartContext;
