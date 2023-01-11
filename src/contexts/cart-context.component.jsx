import React, { useState } from 'react';

const addToCart = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (item) => item.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((item) =>
      item.id === productToAdd.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeIItem = (cartItems, productToRemove) => {
  const existingCartItem = cartItems.find(
    (item) => item.id === productToRemove.id
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter((item) => item.id !== productToRemove.id);
  }

  return cartItems.map((item) =>
    item.id === productToRemove.id
      ? { ...item, quantity: item.quantity - 1 }
      : item
  );
};

const removeAll = (cartItems, remove) => {
  return cartItems.filter((item) => item.id !== remove.id);
};

const CartContext = React.createContext({});

export const CartProvider = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const cartHandler = () => {
    setShowCart((previousState) => !previousState);
  };

  const addItemsToCart = (productToAdd) => {
    setCartItems(addToCart(cartItems, productToAdd));
  };

  const removeItemFromCart = (cartItemToRemove) => {
    setCartItems(removeIItem(cartItems, cartItemToRemove));
  };

  const removeEntire = (remove) => {
    setCartItems(removeAll(cartItems, remove));
  };

  const cartValue = {
    showing: showCart,
    setShowing: cartHandler,
    additems: addItemsToCart,
    cartItems,
    removeFromCart: removeItemFromCart,
    removeEntire,
  };

  return (
    <CartContext.Provider value={cartValue}>{children}</CartContext.Provider>
  );
};

export default CartContext;
