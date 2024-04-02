import React from "react";
import homeImage from "../home.png"
import { Link } from "react-router-dom";
function Header({ setIsAdding }) {
  return (
    <header>
      <h1
        style={{
          textAlign: "center",
          backgroundColor: "#1e3b63",
          color: "white",
          padding: "30px",
          fontFamily:"Times New Roman', Times, serif"
          
           }}
      >
        Employee Management Software
      </h1>
      <div >
        <Link to={"/"}><img src={homeImage} alt="" height="20px" width="20px"/> Home</Link> 
      </div>

      <div style={{ marginTop: "30px", marginBottom: "18px" }}>
        <button onClick={() => setIsAdding(true)} className="round-button">
          Add Employee
        </button>
      </div>
    </header>
  );
}

export default Header;
