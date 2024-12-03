import { products } from "../../assets/assets"; // Importa los productos de tu API
import "./OffersGrid.css";
import { useNavigate } from "react-router-dom";

const OffersGrid = () => {
  // Filtra los productos que están en oferta
  const onSaleProducts = products.filter((product) => product.is_on_sale);

  // Función para mezclar los productos aleatoriamente
  const getRandomProducts = () => {
    const shuffled = [...onSaleProducts].sort(() => Math.random() - 0.5); // Mezcla aleatoriamente
    return shuffled.slice(0, 4); // Devuelve solo los primeros 4 productos
  };

  const navigate = useNavigate();

  const handleSeeMore = () => {
    navigate("/catalog#"); // Redirige a /catalog
  };

  return (
    <div>
      <h1 style={{ textAlign: "center", margin: "20px 0", color: "white" }}>
        Ofertas
      </h1>
      <div className="product-grid">
        {getRandomProducts().map((product) => (
          <div className="product-card" key={product.product_id}>
            <img
              src={product.product_image}
              alt={product.product_name}
              className="product-image"
            />
            <h3 className="product-name">{product.product_name}</h3>
            <p className="product-brand">{product.product_category}</p>
            <p className="product-description">{product.product_desc}</p>
            <p className="product-price">{`$${product.product_price.toFixed(
              2
            )}`}</p>
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
