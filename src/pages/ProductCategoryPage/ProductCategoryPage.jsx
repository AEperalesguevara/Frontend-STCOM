import { useParams } from "react-router-dom";
import { products } from "../../assets/assets";
import "./ProductCategoryPage.css";
const ProductCategoryPage = () => {
  const { categoryName } = useParams();
  console.log(`Categoría seleccionada: ${categoryName}`);
  const filteredProducts = products.filter(
    (product) => product.product_category === categoryName
  );

  return (
    <div>
      <h2>Productos de la categoría: {categoryName}</h2>
      <div className="product-list">
        {filteredProducts.map((product) => (
          <div key={product.product_id} className="product-item">
            <img src={product.product_image} alt={product.product_name} />
            <h3>{product.product_name}</h3>
            <p>{product.product_desc}</p>
            <p>${product.product_price}</p>
            {product.is_on_sale && <span>En oferta</span>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCategoryPage;
