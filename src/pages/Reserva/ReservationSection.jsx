import { useState } from "react";
import "./ReservationSection.css";
import { assets } from "../../assets/assets";

const ReservationSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    desc: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/api/reservation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("¡Reserva realizada con éxito!");
        // Reinicia el formulario después de una reserva exitosa
        setFormData({
          name: "",
          email: "",
          phone: "",
          date: "",
          time: "",
          desc: "",
        });
      } else {
        alert("Error al realizar la reserva. Inténtalo nuevamente.");
      }
    } catch (error) {
      console.error("Error al enviar la reserva:", error);
      alert("Error de red. Inténtalo nuevamente.");
    }
  };

  return (
    <div className="reservation-section">
      <div className="reservation-image">
        <img src={assets.st} alt="Decorative Restaurant" />
      </div>
      <div className="reservation-form-container">
        <form className="reservation-form" onSubmit={handleSubmit}>
          <h2>Solicitud de servicio</h2>
          <label>
            Nombre:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Correo electrónico:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Teléfono:
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Fecha:
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Hora:
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Descripción del problema
            <input
              type="text"
              name="desc"
              value={formData.desc}
              onChange={handleChange}
              required
            />
          </label>
          <button type="submit">Solicitar</button>
        </form>
      </div>
    </div>
  );
};

export default ReservationSection;
