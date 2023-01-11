import './checkout-item.styles.scss';
import CartContext from '../../contexts/cart-context.component';
import { useContext } from 'react';

const CheckoutItem = ({ cartItem }) => {
  const contextCart = useContext(CartContext);

  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name}></img>
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div
          className="arrow"
          onClick={() => {
            contextCart.removeFromCart(cartItem);
          }}
        >
          &#10094;
        </div>
        {quantity}
        <div className="arrow" onClick={() => contextCart.additems(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">${price}</span>
      <div
        className="remove-button"
        onClick={() => {
          contextCart.removeEntire(cartItem);
        }}
      >
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
