import { useState } from "react";
import Add from "../PagesAdmin/Add/Add";
import List from "../PagesAdmin/List/List";
import Order from "../PagesAdmin/Orders/Orders";
import Reservas from "../PagesAdmin/Reservas/Reservas";
import "./Admin.css";

const Admin = () => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <div className="dashboard">
      <h1>Panel de Control</h1>
      <div className="accordion">
        {/* Sección de Añadir Producto */}
        <div className="accordion-item">
          <div
            className="accordion-header"
            onClick={() => toggleSection("add")}
          >
            <h2>Añadir Producto</h2>
            <span>{activeSection === "add" ? "▲" : "▼"}</span>
          </div>
          {activeSection === "add" && (
            <div className="accordion-content">
              <Add />
            </div>
          )}
        </div>

        {/* Sección de Lista de Productos */}
        <div className="accordion-item">
          <div
            className="accordion-header"
            onClick={() => toggleSection("list")}
          >
            <h2>Lista de Productos</h2>
            <span>{activeSection === "list" ? "▲" : "▼"}</span>
          </div>
          {activeSection === "list" && (
            <div className="accordion-content">
              <List />
            </div>
          )}
        </div>

        {/* Sección de Pedidos */}
        <div className="accordion-item">
          <div
            className="accordion-header"
            onClick={() => toggleSection("orders")}
          >
            <h2>Pedidos</h2>
            <span>{activeSection === "orders" ? "▲" : "▼"}</span>
          </div>
          {activeSection === "orders" && (
            <div className="accordion-content">
              <Order />
            </div>
          )}
        </div>

        {/* Sección de Reservas */}
        <div className="accordion-item">
          <div
            className="accordion-header"
            onClick={() => toggleSection("reservas")}
          >
            <h2>Reservas</h2>
            <span>{activeSection === "reservas" ? "▲" : "▼"}</span>
          </div>
          {activeSection === "reservas" && (
            <div className="accordion-content">
              <Reservas />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Admin;
