import { useState } from "react";

import OrderUser from "../OrderUser/OrdersUser";

import "./User.css";

const User = () => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <div className="dashboard">
      <h1>Panel de Control</h1>
      <div className="accordion">
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
              <OrderUser />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default User;
