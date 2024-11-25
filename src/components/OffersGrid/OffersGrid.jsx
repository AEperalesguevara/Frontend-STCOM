import "./OffersGrid.css";

const products = [
  {
    id: 1,
    name: "Laptop Gamer",
    brand: "HP",
    description:
      "Laptop potente con procesador Intel Core i7 y gráfica NVIDIA RTX.",
    price: "$1,200.00",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Smartphone",
    brand: "Samsung",
    description: "Galaxy S23 con pantalla AMOLED y triple cámara.",
    price: "$999.99",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Auriculares Bluetooth",
    brand: "Sony",
    description: "Auriculares con cancelación activa de ruido y sonido Hi-Fi.",
    price: "$199.99",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    name: "Monitor 4K",
    brand: "Dell",
    description: "Monitor UHD de 27 pulgadas ideal para gaming y trabajo.",
    price: "$450.00",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 5,
    name: "Smartwatch",
    brand: "Apple",
    description: "Apple Watch Series 8 con seguimiento de salud avanzada.",
    price: "$499.99",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 6,
    name: "Tablet",
    brand: "Lenovo",
    description: "Tablet ligera con pantalla Full HD y gran batería.",
    price: "$299.99",
    image: "https://via.placeholder.com/150",
  },
];

const OffersGrid = () => {
  const handleSeeMore = () => {
    alert("¡Redirigiendo a más productos!");
  };

  return (
    <div>
      <h1 style={{ textAlign: "center", margin: "20px 0", color: "white" }}>
        Ofertas
      </h1>
      <div className="product-grid">
        {products.slice(0, 4).map((product) => (
          <div className="product-card" key={product.id}>
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-brand">{product.brand}</p>
            <p className="product-description">{product.description}</p>
            <p className="product-price">{product.price}</p>
          </div>
        ))}
      </div>
      <div style={{ textAlign: "center", margin: "20px 0" }}>
        <button onClick={handleSeeMore} className="see-more-button">
          Ver más
        </button>
      </div>
    </div>
  );
};

export default OffersGrid;
