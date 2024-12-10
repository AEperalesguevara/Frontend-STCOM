import { useParams, Link } from "react-router-dom";
import "./ProductCategoryPage.css";
import { useState, useEffect } from "react";
import axios from "axios";

const ProductCategoryPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get(
          "https://backend-stcom.up.railway.app/api/products"
        );
        setProducts(data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);
  const { categoryName } = useParams();
  console.log(`Categoría seleccionada: ${categoryName}`);
  const filteredProducts = products.filter(
    (product) => product.category === categoryName
  );

  return (
    <div>
      <h2>Productos de la categoría: {categoryName}</h2>
      <div className="product-list">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-item">
            <img src={product.image} alt={product.name} />
            <h3>
              <Link to={`/product/${product.id}`}>{product.name}</Link>
            </h3>
            <p>${product.price}</p>
            {product.isOnsale && <span>En oferta</span>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCategoryPage;
