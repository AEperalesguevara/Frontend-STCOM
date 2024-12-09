import { useState } from "react";
import "./Add.css";
import { categories, brands } from "../../../assets/assets"; // Importa las categorías y marcas
import axios from "axios";
import { toast } from "react-toastify";
import { assets } from "../../../assets/assets";

const Add = () => {
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: categories[0].category_name, // Categoría predeterminada
    brand: brands[0].brand_name, // Marca predeterminada
    isOnSale: false,
  });

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    console.log("Formulario enviado");

    if (!image) {
      toast.error("Por favor selecciona una imagen.");
      return null;
    }

    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("description", data.description);
      formData.append("price", Number(data.price));
      formData.append("category", data.category);
      formData.append("brand", data.brand);
      formData.append("isOnSale", data.isOnSale);
      formData.append("image", image);

      const response = await axios.post(
        `https://backend-stcom.up.railway.app/api/products/add`,
        formData
      );

      if (response.data.success) {
        toast.success(response.data.message);
        setData({
          name: "",
          description: "",
          price: "",
          category: categories[0].category_name,
          brand: brands[0].brand_name,
          isOnSale: false,
        });
        setImage(false);

        console.log("Formulario limpio");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      toast.error("Error al agregar el producto.");
    }
  };

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div className="add-tech-product">
      <form className="flex-col" onSubmit={onSubmitHandler}>
        {/* Subir imagen */}
        <div className="add-img-upload flex-col">
          <p>Subir imagen</p>
          <input
            onChange={(e) => {
              setImage(e.target.files[0]);
              e.target.value = "";
            }}
            type="file"
            accept="image/*"
            id="image"
            hidden
          />
          <label htmlFor="image">
            <img
              src={!image ? assets.upload_area : URL.createObjectURL(image)}
              alt="Vista previa"
            />
          </label>
        </div>

        {/* Nombre del producto */}
        <div className="add-product-name flex-col">
          <p>Nombre del Producto</p>
          <input
            name="name"
            onChange={onChangeHandler}
            value={data.name}
            type="text"
            placeholder="Escribir aquí"
            required
          />
        </div>

        {/* Descripción del producto */}
        <div className="add-product-description flex-col">
          <p>Descripción del Producto</p>
          <textarea
            name="description"
            onChange={onChangeHandler}
            value={data.description}
            rows={6}
            placeholder="Escribir aquí"
            required
          />
        </div>

        {/* Categoría y precio */}
        <div className="add-category-price">
          <div className="add-category flex-col">
            <p>Categoría del Producto</p>
            <select
              name="category"
              onChange={onChangeHandler}
              value={data.category}
            >
              {categories.map((cat) => (
                <option key={cat.category_name} value={cat.category_name}>
                  {cat.category_name}
                </option>
              ))}
            </select>
          </div>
          <div className="add-price flex-col">
            <p>Precio</p>
            <input
              type="number"
              name="price"
              onChange={onChangeHandler}
              value={data.price}
              placeholder="Ejemplo: 999.99"
              required
            />
          </div>
        </div>

        {/* Marca */}
        <div className="add-brand flex-col">
          <p>Marca</p>
          <select name="brand" onChange={onChangeHandler} value={data.brand}>
            {brands.map((brand) => (
              <option key={brand.brand_name} value={brand.brand_name}>
                {brand.brand_name}
              </option>
            ))}
          </select>
        </div>

        {/* En oferta */}
        <div className="add-onsale flex-col">
          <label>
            <input
              type="checkbox"
              name="isOnSale"
              onChange={onChangeHandler}
              checked={data.isOnSale}
            />
            ¿En oferta?
          </label>
        </div>

        {/* Botón de enviar */}
        <button type="submit" className="add-btn">
          AGREGAR PRODUCTO
        </button>
      </form>
    </div>
  );
};

export default Add;
