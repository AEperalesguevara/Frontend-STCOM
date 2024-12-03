import "./ProductCategories.css"; // Estilos personalizados
import { Link } from "react-router-dom";

const ProductCategories = ({ categories }) => {
  return (
    <div className="product-categories">
      <h1>PRODUCTOS POR TIPO</h1>
      <div className="categories-list">
        {categories.map((category, index) => (
          <div key={index} className="category-item">
            {/* Contenedor de imagen con clase personalizada */}
            <div className="image-container">
              <img
                src={category.category_image}
                alt={category.category_name}
                className="category-image"
              />
            </div>
            <h2>{category.category_name}</h2>
            <Link to={`/category/${category.category_name}`}>
              Ver productos
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCategories;
