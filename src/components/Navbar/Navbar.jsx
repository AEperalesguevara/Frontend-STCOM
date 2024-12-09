import "./Navbar.css";
import { assets } from "../../assets/assets";
import LoginPopup from "../LoginPopup/LoginPopup";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const updateUserState = () => {
      const token = localStorage.getItem("token");
      const userData = JSON.parse(localStorage.getItem("user"));

      if (token && userData) {
        setIsLoggedIn(true);
        setUser(userData);
      } else {
        setIsLoggedIn(false);
        setUser(null);
      }
    };

    updateUserState();
    window.addEventListener("storage", updateUserState);

    return () => window.removeEventListener("storage", updateUserState);
  }, []);

  const handleLoginClick = () => {
    setPopupVisible(true);
  };

  const handleClosePopup = () => {
    setPopupVisible(false);
    window.location.reload();
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    setUser(null);
    navigate("/"); // Redirigir al inicio después de cerrar sesión
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const goToAdminPanel = () => {
    navigate("/admin");
  };

  const goToUserPanel = () => {
    navigate("/userpanel");
  };

  return (
    <div className="navbar">
      <div className="navbar-top">
        <div className="navbar-logo">
          <img src={assets.STCOMlogo} alt="Logo de STCOM" />
        </div>
        <div className="navbar-contact">
          <p>Teléfono: (+51) 979651113 - (+51) 995577397</p>
        </div>
      </div>

      <div className="navbar-bottom">
        <div className="navbar-links">
          <a href="/">Inicio</a>
          <a href="/nosotros">Nosotros</a>
          <a href="/catalog">Catálogo</a>
          <a href="/service">Servicio Técnico</a>
        </div>

        {/* Botón del carrito */}
        <button className="cart-btn" onClick={() => navigate("/cart")}>
          🛒 Carrito
        </button>

        <div className="navbar-login">
          {isLoggedIn ? (
            <div className="profile-section" onClick={toggleDropdown}>
              <img
                src={user?.photoURL || assets.defaultProfile}
                alt="Perfil"
                className="profile-pic"
              />
              {dropdownOpen && (
                <div className="dropdown-menu">
                  <button onClick={() => alert("Ir a perfil")}>Perfil</button>

                  {/* Botón adicional solo para admin */}
                  {user?.role === "admin" && (
                    <button onClick={goToAdminPanel}>Admin Panel</button>
                  )}
                  {user?.role === "user" && (
                    <button onClick={goToUserPanel}>User Panel</button>
                  )}

                  <button onClick={handleLogout}>Cerrar Sesión</button>
                </div>
              )}
            </div>
          ) : (
            <button className="login" onClick={handleLoginClick}>
              Iniciar Sesión
            </button>
          )}
        </div>
      </div>

      {isPopupVisible && <LoginPopup onClose={handleClosePopup} />}
    </div>
  );
};

export default Navbar;
