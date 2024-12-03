import { useParams } from "react-router-dom";
import { products } from "../../assets/assets";
import "./ProductPage.css";

function ProductPage() {
  const { id } = useParams(); // Obtén el ID desde la URL
  const product = products.find((p) => p.product_id === Number(id)); // Busca el producto por ID

  if (!product) {
    return <h1>Producto no encontrado</h1>;
  }

  return (
    <div className="product-page">
      <h1>{product.product_name}</h1>
      <div className="content">
        {/* Imagen del producto */}
        <div>
          <img src={product.product_image} alt={product.product_name} />
          <p className="price">
            <span>Precio:</span> ${product.product_price}
          </p>
        </div>

        {/* Descripción del producto */}
        <div className="details">
          <p>{product.product_desc}</p>
        </div>
      </div>

      {/* Tabla de características */}
      <table>
        <thead>
          <tr>
            <th>Característica</th>
            <th>Detalle</th>
          </tr>
        </thead>
        <tbody>
          {/* Por simplicidad, no hay características específicas en la API */}
          <tr>
            <td>Categoría</td>
            <td>{product.product_category}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ProductPage;
