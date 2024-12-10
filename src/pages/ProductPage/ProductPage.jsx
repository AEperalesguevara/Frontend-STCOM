import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";
import { CartContext } from "../../Context/CartContext";
import "./ProductPage.css";

function ProductPage() {
  const { addToCart } = useContext(CartContext);
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    // Solicita el producto a la API
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `https://backend-stcom.up.railway.app/api/products/${id}`
        );
        if (!response.ok) {
          throw new Error("Error al obtener el producto");
        }
        const data = await response.json();
        const foundProduct = data.products.find((p) => p.id === Number(id));
        setProduct(foundProduct);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product, quantity);
      console.log(
        "Producto añadido al carrito:",
        product,
        "Cantidad:",
        quantity
      );
      alert(
        `¡${product.name} se agregó al carrito con cantidad de ${quantity}!`
      );
    }
  };

  const handleQuantityChange = (delta) => {
    setQuantity((prev) => Math.max(1, prev + delta));
  };

  if (loading) return <h1>Cargando producto...</h1>;
  if (error) return <h1>Error: {error}</h1>;
  if (!product) return <h1>Producto no encontrado</h1>;

  return (
    <div className="product-page">
      <h1>{product.name}</h1>
      <div className="content">
        <div>
          <img
            src={`https://backend-stcom.up.railway.app/${product.image}`}
            alt={product.name}
          />
          <p className="price">
            <span>Precio:</span> ${product.price}
          </p>
        </div>
        <div className="details">
          <p>{product.description}</p>
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
