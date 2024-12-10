import { useParams, Link } from "react-router-dom";
import "./ProductBrandPage.css";
import { useState, useEffect } from "react";
import axios from "axios";

const ProductBrandPage = () => {
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
  const { brandName } = useParams();
  const filteredProducts = products.filter(
    (product) => product.brand === brandName
  );

  return (
    <div>
      <h2>Productos de la marca: {brandName}</h2>
      <div className="product-list">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-item">
            <img src={product.product_image} alt={product.name} />
            <h3>
              <Link to={`/product/${product.id}`}>{product.name}</Link>
            </h3>
            <p>{product.desc}</p>
            <p>${product.price}</p>
            {product.isOnSale && <span>En oferta</span>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductBrandPage;
