import { useEffect, useState } from "react";
import "./Reservas.css";
import { toast } from "react-toastify";
import axios from "axios";
import { assets } from "../../../assets/assets";

const Reservas = () => {
  const [serviceReservations, setServiceReservations] = useState([]);

  const fetchAllServiceReservations = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/reservation");
      if (response.data.success) {
        setServiceReservations(response.data.reservations.reverse());
      } else {
        toast.error("Error al obtener las reservas de servicio técnico");
      }
    } catch (error) {
      if (error) {
        toast.error("Error en la conexión con el servidor");
      }
    }
  };

  useEffect(() => {
    fetchAllServiceReservations();
  }, []);

  return (
    <div className="service-reservation">
      <h3>Reservas de Servicio Técnico</h3>
      <div className="service-reservation-list">
        {serviceReservations.map((reservation, index) => (
          <div key={index} className="service-reservation-item">
            <img
              src={assets.STCOMlogo}
              alt=""
              className="service-reservation-item-icon"
            />
            <div>
              <p className="service-reservation-item-name">
                {reservation.name}
              </p>
              <p className="service-reservation-item-email">
                {reservation.email}
              </p>
              <p className="service-reservation-item-phone">
                {reservation.phone}
              </p>
              <p className="service-reservation-item-date">
                {new Date(reservation.date).toLocaleDateString()} a las{" "}
                {reservation.time}
              </p>
              <p className="service-reservation-item-desc">
                Descripción: {reservation.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reservas;
