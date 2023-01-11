import './product-card.styles.scss';
import Button from '../button/button.component';
import CartContext from '../../contexts/cart-context.component';
import { useContext } from 'react';

const ProductCard = ({ properties }) => {
  const { name, price, imageUrl } = properties;

  const cartCtx = useContext(CartContext);

  const addToCartHandler = () => {
    cartCtx.additems({ ...properties });
  };

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name}></img>
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
        <Button buttonType="inverted" onClick={addToCartHandler}>
          Add To cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
