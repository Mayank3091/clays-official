import './cart-dropdown.styles.scss';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import CartContext from '../../contexts/cart-context.component';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const CartDropDown = () => {
  const contextCart = useContext(CartContext);

  const navigate = useNavigate();

  const goToCheckOutHandler = () => {
    navigate('/checkout');
  };

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {contextCart.cartItems.map((items) => {
          return <CartItem key={items.id} cart={items} />;
        })}
      </div>
      <Button onClick={goToCheckOutHandler}>Checkout</Button>
    </div>
  );
};

export default CartDropDown;
