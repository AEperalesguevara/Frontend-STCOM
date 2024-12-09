// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "./List.css";

const List = () => {
  const url = "https://backend-stcom.up.railway.app";
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(`${url}/api/products`);
      if (response.data.success) {
        setList(response.data.products);
      } else {
        toast.error("Error al obtener productos");
      }
    } catch (error) {
      console.error("Error al conectar con el servidor:", error);
      toast.error("Fallo al conectar con el servidor");
    }
  };

  const removeProduct = async (productId) => {
    try {
      const response = await axios.post(`${url}/api/products/remove`, {
        id: productId,
      });
      if (response.data.success) {
        await fetchList();
        toast.success(response.data.message);
      } else {
        toast.error("Error al eliminar producto");
      }
    } catch (error) {
      console.error("Error al eliminar producto:", error);
      toast.error("Error en el servidor al eliminar producto");
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className="list add flex-col">
      <p>Lista de Productos Tecnológicos</p>
      <div className="list-table">
        <div className="list-table-format title">
          <b>Imagen</b>
          <b>Nombre</b>
          <b>Categoría</b>
          <b>Marca</b>
          <b>Precio</b>
          <b>Descripción</b>
          <b>Acción</b>
        </div>
        {list.map((product) => (
          <div key={product.id} className="list-table-format">
            <img
              src={`https://backend-stcom.up.railway.app/${product.image}`}
              alt={product.name}
            />
            <p>{product.name}</p>
            <p>{product.category}</p>
            <p>{product.brand}</p>
            <p>${product.price}</p>
            <p>{product.description}</p>
            <p className="cursor" onClick={() => removeProduct(product.id)}>
              ❌
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
