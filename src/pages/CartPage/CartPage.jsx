import { useContext, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import "./CartPage.css";

const CartPage = () => {
  const { cart, addToCart, removeFromCart, clearCart } =
    useContext(CartContext);
  const location = useLocation();
  const navigate = useNavigate();
  const hasOrderBeenSaved = useRef(false);
  const userData = JSON.parse(localStorage.getItem("user")); // Obtiene el objeto del localStorage
  const sanitizedCart = cart.map((item) => ({
    ...item,
    product_image: item.product_image?.startsWith("http")
      ? item.product_image
      : "https://via.placeholder.com/150", // URL de fallback
  }));

  const totalPrice = cart.reduce(
    (total, item) => total + item.product_price * item.quantity,
    0
  );

  const handleQuantityChange = (product, delta) => {
    addToCart(product, delta);
  };

  const handleConfirmOrder = async () => {
    try {
      // Enviar la solicitud para  la sesión de Stripe Checkout
      const response = await fetch(
        "https://backend-stcom.up.railway.app/payment/create-checkout-session",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            cartItems: sanitizedCart,
            totalAmount: totalPrice,
            userId: userData.id,
          }),
        }
      );

      const { url } = await response.json();

      if (url) {
        window.location.href = url; // Redireccionar al Checkout de Stripe
      }
    } catch (err) {
      console.error("Fallo al procesar el pago:", err.message);
    }
  };

  // Hook useEffect para verificar si el pago fue exitoso después del redireccionamiento
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const success = params.get("success");

    if (success === "true" && !hasOrderBeenSaved.current) {
      hasOrderBeenSaved.current = true; // Marcamos que la orden ya se guardó
      console.log("Pago exitoso, guardando la orden...");

      fetch(
        "https://backend-stcom.up.railway.app/api/purchase/create-purchase",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            totalPrice,
            userId: userData.id, // Coloca tu ID real del usuario aquí
            cart: sanitizedCart,
          }),
        }
      )
        .then((res) => res.json())
        .then((purchaseData) => {
          console.log("Orden guardada en la base de datos:", purchaseData);
          clearCart();
          navigate("/cart", { replace: true });
        })
        .catch((error) => console.error("Error al guardar la orden:", error));
    }
  }, [location]);

  return (
    <div>
      <h1>Tu Carrito</h1>

      {cart.length === 0 ? (
        <p className="parrafo">
          Tu carrito está vacío. <Link to="/catalog">Explorar productos</Link>
        </p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.product_id} className="cart-item">
              <img src={item.product_image} alt={item.product_name} />
              <div className="product-details">
                <h2>{item.product_name}</h2>
                <p>Precio: ${item.product_price}</p>
                <p>Cantidad: {item.quantity}</p>
                <p>Subtotal: ${item.product_price * item.quantity}</p>
              </div>
              <div className="buttons-section">
                <div className="quantity-buttons">
                  <button onClick={() => handleQuantityChange(item, -1)}>
                    -
                  </button>
                  <button onClick={() => handleQuantityChange(item, 1)}>
                    +
                  </button>
                </div>
                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(item.product_id)}
                >
                  Eliminar
                </button>
              </div>
            </div>
          ))}

          <div className="total-price">
            <h2>Precio Total: ${totalPrice}</h2>
          </div>

          {/* Botón Confirmar Orden */}
          <button className="button-with-padding" onClick={handleConfirmOrder}>
            Confirmar Orden
          </button>
        </>
      )}
    </div>
  );
};

export default CartPage;
