import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h3>Sobre Nosotros</h3>
          <p>
            Somos una empresa dedicada a ofrecer soluciones tecnológicas
            innovadoras. Creemos en la creación de valor a través de la
            tecnología y la creatividad.
          </p>
        </div>
        <div className="footer-section links">
          <h3>Enlaces Rápidos</h3>
          <ul>
            <li>
              <a href="#">Inicio</a>
            </li>
            <li>
              <a href="#">Servicios</a>
            </li>
            <li>
              <a href="#">Contacto</a>
            </li>
          </ul>
        </div>
        <div className="footer-section contact">
          <h3>Contacto</h3>
          <p>Email: stcomeirl@hotmail.com</p>
          <p>Teléfono: +51 979651113</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Empresa. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
