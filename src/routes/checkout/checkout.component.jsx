import CartContext from '../../contexts/cart-context.component';
import './checkout.styles.scss';
import { useContext } from 'react';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import { Link } from 'react-router-dom';

const Checkout = () => {
  const contextCart = useContext(CartContext);

  const helpers =
    contextCart.cartItems.length === 0 ? (
      <Link to="/shop">
        <h2>
          Oops...Your Cart Is Empty, please click on this link to visit the Shop
          Page
        </h2>
      </Link>
    ) : (
      contextCart.cartItems.map((item) => {
        return <CheckoutItem key={item.id} cartItem={item} />;
      })
    );

  const totalAmount = contextCart.cartItems.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {helpers}
      <span className="total">Total: ${totalAmount}</span>
    </div>
  );
};

export default Checkout;
