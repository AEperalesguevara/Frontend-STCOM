import { useState } from "react";
import { useContext } from "react";
import PropTypes from "prop-types"; // Importa prop-types
import axios from "axios";
import { AuthContext } from "../../Context/AuthContext";
import "./LoginPopup.css";

const LoginPopup = ({ onClose }) => {
  const { setUser } = useContext(AuthContext);
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    role: "user",
    city: "",
    identityNo: "",
    phone: "",
    ruc: "",
  });
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = isLogin
      ? "https://backend-stcom.up.railway.app/api/auth/login"
      : "https://backend-stcom.up.railway.app/api/auth/register";

    try {
      const response = await axios.post(url, formData);

      console.log("Respuesta del servidor:", response.data);

      if (isLogin && response.data.success) {
        const { token, user } = response.data;

        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));

        console.log("Token guardado:", token);
        console.log("Usuario guardado:", user);
        setUser(user);

        onClose(); // Cierra el popup después de iniciar sesión
      } else if (!isLogin && response.data.success) {
        alert("¡Usuario registrado correctamente!");

        console.log("Intentando iniciar sesión automáticamente...");

        // Realiza el login automático después de registrar
        try {
          const loginResponse = await axios.post(
            "https://backend-stcom.up.railway.app/api/auth/login",
            {
              email: formData.email,
              password: formData.password,
            }
          );

          if (loginResponse.data.success) {
            const { token, user } = loginResponse.data;

            localStorage.setItem("token", token);
            localStorage.setItem("user", JSON.stringify(user));

            console.log("Inicio de sesión automático exitoso.");

            onClose(); // Cierra el popup después del login automático
          } else {
            console.error("Error al iniciar sesión automáticamente.");
          }
        } catch (loginError) {
          console.error(
            "Error al iniciar sesión automático:",
            loginError.message
          );
        }
      }
    } catch (error) {
      console.log("Error en el registro/inicio de sesión:", error.message);
      setMessage(error.response?.data?.message || "Error en la solicitud.");
    }
  };

  return (
    <div className="login-popup">
      <button className="close-button" onClick={onClose}>
        ✖
      </button>
      <div className="tabs">
        <button
          onClick={() => setIsLogin(true)}
          className={isLogin ? "active" : ""}
        >
          Iniciar Sesión
        </button>
        <button
          onClick={() => setIsLogin(false)}
          className={!isLogin ? "active" : ""}
        >
          Registrarse
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        {!isLogin && (
          <>
            <input
              type="text"
              name="firstName"
              placeholder="Nombre"
              value={formData.firstName}
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Apellido"
              value={formData.lastName}
              onChange={handleInputChange}
              required
            />

            <input
              type="text"
              name="city"
              placeholder="Ciudad"
              value={formData.city}
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              name="identityNo"
              placeholder="Número de Identidad"
              value={formData.identityNo}
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              name="phone"
              placeholder="Teléfono"
              value={formData.phone}
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              name="ruc"
              placeholder="RUC (Opcional)"
              value={formData.ruc}
              onChange={handleInputChange}
            />
          </>
        )}
        <input
          type="email"
          name="email"
          placeholder="Correo Electrónico"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          value={formData.password}
          onChange={handleInputChange}
          required
        />
        <button type="submit">
          {isLogin ? "Iniciar Sesión" : "Registrarse"}
        </button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

// Validación de props con prop-types
LoginPopup.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default LoginPopup;
