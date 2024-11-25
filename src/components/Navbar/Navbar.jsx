import "./Navbar.css";
import { assets } from "../../assets/assets";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-top">
        <div className="navbar-logo">
          <img src={assets.STCOMlogo} alt="Logo de STCOM" />{" "}
        </div>
        <div className="navbar-contact">
          <p>Teléfono: (+51) 979651113 - (+51) 995577397</p>
        </div>
      </div>
      <div className="navbar-bottom">
        <div className="navbar-links">
          <a href="/home">Inicio</a>
          <a href="/about">Nosotros</a>
          <a href="/catalog">Catalogo</a>
          <a href="/technical-service">Servicio Técnico</a>
          <a href="/offers">Ofertas</a>
        </div>
        <div className="navbar-login">
          <button>Iniciar Sesión</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
