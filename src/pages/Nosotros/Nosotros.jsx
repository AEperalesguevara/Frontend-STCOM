import "./Nosotros.css";
import { assets } from "../../assets/assets";

const Nosotros = () => {
  return (
    <div className="nosotros">
      <div className="nosotros-header">
        <h1 className="nosotros-title">ST COM EIRL</h1>
      </div>
      <div className="nosotros-content">
        <img src={assets.us} alt="Nuestra Empresa" className="nosotros-image" />
        <div className="nosotros-text">
          <div className="nosotros-vision">
            <h2>Visión</h2>
            <p>
              En ST COM EIRL, nuestra misión es brindar soluciones tecnológicas
              integrales y de alta calidad. Ofrecemos servicios técnicos
              especializados para todo tipo de tecnología, incluyendo PCs,
              impresoras, cámaras, servidores y más. Nos dedicamos a garantizar
              que tus dispositivos funcionen de manera óptima, mientras te
              asesoramos en la compra de equipos de vanguardia adaptados a tus
              necesidades.
            </p>
            <p>
              Con más de 20 años en el mercado, hemos construido una sólida
              reputación gracias a nuestro compromiso con la excelencia y la
              innovación. Nuestra pasión por la tecnología nos impulsa a
              mantenernos actualizados con las últimas tendencias del sector,
              asegurando que nuestros clientes siempre tengan las mejores
              opciones a su alcance.
            </p>
          </div>
          <div className="nosotros-contacto">
            <h2>Contacto</h2>
            <div className="contacto-trabajador">
              <h3>Juan Pérez</h3>
              <p>Especialista en hardware y redes</p>
              <p>Email: juan.perez@example.com</p>
              <p>Teléfono: +51 987 654 321</p>
            </div>
            <div className="contacto-trabajador">
              <h3>María López</h3>
              <p>Especialista en software y soporte técnico</p>
              <p>Email: maria.lopez@example.com</p>
              <p>Teléfono: +51 123 456 789</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nosotros;
