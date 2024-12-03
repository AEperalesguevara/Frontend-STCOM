import "./ProductBranch.css"; // Estilos personalizados
import { Link } from "react-router-dom";

const ProductBranch = ({ brands }) => {
  return (
    <div className="product-branches">
      <h1>PRODUCTOS POR MARCA</h1>
      <div className="branches-list">
        {brands.map((brand, index) => (
          <div key={index} className="branch-item">
            {/* Contenedor de imagen con clase personalizada */}
            <div className="image-container">
              <img
                src={brand.brand_image}
                alt={brand.brand_name}
                className="branch-image"
              />
            </div>
            <h2>{brand.brand_name}</h2>
            <Link to={`/brand/${brand.brand_name}`}>Ver productos</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductBranch;
