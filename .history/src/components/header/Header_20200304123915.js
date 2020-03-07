import React from "react";
import "./header.scss";

function Header() { 
  return (
    <nav className="navbar">
       <h3 className="logo">Logo</h3>
       <img src="./img/bag-icon.svg" alt="" />
    </nav>
  );
}

export default Header;
