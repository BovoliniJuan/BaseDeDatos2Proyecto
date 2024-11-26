import React from "react";
import { useNavigate } from "react-router-dom";

const TopMenu = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div style={styles.menuContainer}>
      <ul style={styles.menuList}>
        <li style={styles.menuItem} onClick={() => handleNavigation("../home")}>Inicio</li>
        <li style={styles.menuItem} onClick={() => handleNavigation("/tablaTickets")}>Tickets</li>
        <li style={styles.menuItem} onClick={() => handleNavigation("/tablaEmpresas")}>Empresas</li>
        <li style={styles.menuItem} onClick={() => handleNavigation("/TablaEmpleados")}>Empleados</li>
      </ul>
    </div>
  );
};

const styles = {
  menuContainer: {
    position: "fixed",
    top: 0,
    width: "100%",
    backgroundColor: "#904e55",
    padding: "10px 0",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    zIndex: 1000,
  },
  menuList: {
    display: "flex",
    justifyContent: "start",
    listStyleType: "none",
    margin: 0,
    padding: 0,
    cursor: "pointer",
  },
  menuItem: {
    margin: "0 15px",
    color: "#fff",
    textDecoration: "none",
    fontSize: "16px",
    fontWeight: "bold",
    transition: "color 0.3s ease",
  },
};

export default TopMenu;
