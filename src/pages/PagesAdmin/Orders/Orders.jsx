// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import "./Orders.css";

const Order = () => {
  const [purchases, setPurchases] = useState([]);

  // Obtener todas las compras desde el backend
  const fetchAllPurchases = async () => {
    try {
      const response = await axios.get(
        `https://backend-stcom.up.railway.app/api/purchase/all-purchases`
      );
      console.log(response.data); // Depuración

      if (response.data.success) {
        setPurchases(response.data.data);
        console.log("Compras actualizadas");
      } else {
        toast.error("Error al obtener compras");
      }
    } catch (error) {
      console.error("Fallo al conectar con el servidor:", error);
      toast.error("Fallo al conectar con el servidor");
    }
  };

  useEffect(() => {
    fetchAllPurchases();
  }, []);
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
            <p>
              <strong>Usuario ID:</strong> {purchase.userId}
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

export default Order;
