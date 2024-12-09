import { useEffect, useState, useContext } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { AuthContext } from "../../Context/AuthContext";
import "./OrdersUser.css";

const OrderUser = () => {
  const [purchases, setPurchases] = useState([]);
  const { user } = useContext(AuthContext); // Obtiene el usuario autenticado

  // Obtener compras solo para el usuario autenticado
  const fetchUserPurchases = async () => {
    if (!user || !user.id) {
      console.error("Usuario no autenticado o ID faltante.");
      return;
    }
    console.log("Usuario:", user);

    try {
      if (user && user.id) {
        const response = await axios.get(
          `http://localhost:3000/api/purchase/user-purchases/${user.id}`
        );

        if (response.data) {
          setPurchases(response.data);
          console.log("Compras del usuario actual actualizadas");
          console.log(response.data);
        } else {
          toast.error("No se encontraron compras");
        }
      }
    } catch (error) {
      console.error("Fallo al obtener compras:", error);
      toast.error("Error al conectar con el servidor");
    }
  };

  useEffect(() => {
    if (user && user.id) {
      fetchUserPurchases();
    }
  }, [user]);

  return (
    <div className="order add">
      <h3>Compras Realizadas</h3>
      <div className="order-list">
        {purchases.map((purchase, index) => (
          <div key={index} className="order-item">
            <h4>Compra #{purchase.id}</h4>
            <p>
              <strong>Fecha:</strong>{" "}
              {new Date(purchase.date).toLocaleDateString()}
            </p>
            <p>
              <strong>Total:</strong> ${purchase.totalPrice}
            </p>

            <div className="order-products">
              <h5>Productos:</h5>
              {purchase.items.map((item, i) => (
                <div key={i} className="product-item">
                  <p>
                    <strong>{item.productName}</strong> (Cantidad:{" "}
                    {item.quantity})
                  </p>
                  <p>Precio unitario: ${item.productPrice}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderUser;
