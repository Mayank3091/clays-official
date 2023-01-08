import ProductsContext from '../../contexts/productsContext.component';
import ProductCard from '../../components/product-card/product-card.component';
import { useContext } from 'react';
import './shop.styles.scss';

const Shop = () => {
  const ctx = useContext(ProductsContext);

  return (
    <div className="products-cotainer">
      {ctx.productsState.map((product) => {
        return (
          <div key={product.id}>
            <ProductCard properties={{ ...product }} />
          </div>
        );
      })}
    </div>
  );
};

export default Shop;
