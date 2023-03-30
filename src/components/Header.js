import React from "react";
import { Link } from 'react-router-dom';
import "../styles/components/header.scss";
import "../styles/settings.scss";

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <img src="./images/logo.png" alt="Logo" />

        </div>

        <div className="menu">
          <Link to="/" className="header-nav-link header-nav-link-menu">Accueil</Link>
          <Link to="/categories" className="header-nav-link header-nav-link-menu">Catégories</Link>
          <Link to="/about" className="header-nav-link header-nav-link-menu">À propos</Link>
        </div>

        <div className="recherche">
          <Link to="/search" className="header-nav-link header-nav-link-recherche">Recherche</Link>
          <img src="./images/recherche.png" alt="Recherche" />
        </div>
      </div>
    </header>
  );
}

export default Header;
