import './product-card.styles.scss';
import Button from '../button/button.component';

const ProductCard = ({ properties }) => {
  const { name, price, imageUrl } = properties;

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name}></img>
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
        <Button buttonType="inverted">Add To cart</Button>
      </div>
    </div>
  );
};

export default ProductCard;
