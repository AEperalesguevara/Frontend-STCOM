import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext"; // Importa el contexto
import { products } from "../../assets/assets";
import "./ProductPage.css";
import { CartContext } from "../../Context/CartContext";

function ProductPage() {
  const { addToCart } = useContext(CartContext); // Obtener la función del contexto
  const { id } = useParams();
  const product = products.find((p) => p.product_id === Number(id));
  const { user } = useContext(AuthContext); // Obtén el usuario desde el contexto
  const [quantity, setQuantity] = useState(1);
  const handleAddToCart = () => {
    addToCart(product, quantity);
    console.log("Producto añadido al carrito:", product, "Cantidad:", quantity);
  };
  console.log("Usuario desde el contexto:", user); // Verifica el valor de user

  if (!product) {
    console.log("Producto no encontrado para el ID:", id);
    return <h1>Producto no encontrado</h1>;
  }

  const handleQuantityChange = (delta) => {
    setQuantity((prev) => Math.max(1, prev + delta));
  };

  return (
    <div className="product-page">
      <h1>{product.product_name}</h1>
      <div className="content">
        <div>
          <img src={product.product_image} alt={product.product_name} />
          <p className="price">
            <span>Precio:</span> ${product.product_price}
          </p>
        </div>
        <div className="details">
          <p>{product.product_desc}</p>
        </div>
      </div>

      <div className="purchase-section">
        {user ? (
          <>
            <div className="add-to-cart">
              <button onClick={() => handleQuantityChange(-1)}>-</button>
              <span>{quantity}</span>
              <button onClick={() => handleQuantityChange(1)}>+</button>
              <button className="add-to-cart-btn" onClick={handleAddToCart}>
                Añadir al carrito
              </button>
            </div>
          </>
        ) : (
          <p className="login-message">Inicia sesión para comprar</p>
        )}
      </div>
    </div>
  );
}

export default ProductPage;
