// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import "./Orders.css";
import { assets } from "../../../assets/assets";

const Order = () => {
  const [purchases, setPurchases] = useState([]);

  // Obtener todas las compras desde el backend
  const fetchAllPurchases = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/purchase/all-purchases`
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
            <img src={assets.STCOMlogo} alt="Purchase" />
            <div>
              <p>
                <strong>Fecha:</strong>{" "}
                {new Date(purchase.date).toLocaleDateString()}
              </p>
              <p>
                <strong>Precio Total:</strong> ${purchase.totalPrice}
              </p>
              <p>
                <strong>Usuario ID:</strong> {purchase.userId}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Order;
