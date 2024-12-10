import { useState, useEffect } from "react";
import "./OffersGrid.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const OffersGrid = () => {
  const [products, setProducts] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get(
          "https://backend-stcom.up.railway.app/api/products"
        );
        const onSaleProducts = data.products.filter(
          (product) => product.isOnSale
        );
        setProducts(onSaleProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const getRandomProducts = () => {
    const shuffled = [...products].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 4);
  };

  const handleSeeMore = () => {
    navigate("/catalog#");
  };

  return (
    <div>
      <h1 style={{ textAlign: "center", margin: "20px 0", color: "white" }}>
        Ofertas
      </h1>
      <div className="product-grid">
        {getRandomProducts().map((product) => (
          <div className="product-card" key={product.id}>
            <img
              src={product.image_url}
              alt={product.name}
              className="product-image"
            />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-brand">{product.category}</p>
            <p className="product-description">{product.description}</p>
            <p className="product-price">{`$${product.price.toFixed(2)}`}</p>
          </div>
        ))}
      </div>
      <div style={{ textAlign: "center", margin: "20px 0" }}>
        <button onClick={handleSeeMore} className="see-more-button">
          Ver más
        </button>
      </div>
    </div>
  );
};

export default OffersGrid;
