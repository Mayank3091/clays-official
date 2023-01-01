import CategoryItem from '../category-item/category-item.component';
import './directory.styles.scss';

const Directory = ({ category }) => {
  return (
    <div className="directory-container">
      {category.map(({ id, title, imageUrl }) => {
        return <CategoryItem key={id} title={title} image={imageUrl} />;
      })}
    </div>
  );
};

export default Directory;
