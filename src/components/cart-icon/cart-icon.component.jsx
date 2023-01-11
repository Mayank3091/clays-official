import { ReactComponent as ShoppingCartIcon } from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';

import CartContext from '../../contexts/cart-context.component';
import { useContext } from 'react';

const CartIcon = ({ onClick }) => {
  const cartCtx = useContext(CartContext);

  console.log(cartCtx.cartItems);

  const updatedQuantity = cartCtx.cartItems.reduce((acc, item) => {
    return acc + item.quantity;
  }, 0);

  return (
    <div className="cart-icon-container" onClick={onClick}>
      <ShoppingCartIcon className="shopping-icon" />
      <span className="item-count">{updatedQuantity}</span>
    </div>
  );
};

export default CartIcon;
