import "./ProductGrid.css";
import { useState, useEffect } from "react";
import axios from "axios";
const ProductGrid = () => {
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
  const getRandomProducts = () => {
    const shuffled = [...products].sort(() => Math.random() - 0.5); // Mezcla los productos
    return shuffled.slice(0, 4); // Selecciona los primeros 4
  };

  return (
    <div>
      <h1 style={{ textAlign: "center", margin: "20px 0", color: "white" }}>
        Productos
      </h1>
      <div className="product-grid">
        {getRandomProducts().map((product) => (
          <div className="product-card" key={product.id}>
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-brand">{product.brand}</p>
            <p className="product-description">{product.description}</p>
            <p className="product-price">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
