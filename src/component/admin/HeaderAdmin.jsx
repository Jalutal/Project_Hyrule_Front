import "./headerAdmin.scss";
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import logo from '../../assets/img/aef1968f-9bee-411c-b98e-c688c8aa9eb9.jpeg';

const Header = () => {

    const navigate = useNavigate();

    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    };

    const handleLogout = () => {
    // sortir le token du local storage
    localStorage.removeItem("jwt");
    // redirige l'utilisateur vers la page de login
    navigate("/login");
    };


    return(
        <header>
      <div className={`header_admin ${menuOpen ? 'menu-open' : ''}`}>
        <div className="logos_admin">
          <div className="img_logo_admin">
            <a href="/">
              <img src={logo} alt="La Biliothèque d'Hyrule" />
            </a>
            <a href="/" className="nav-link_admin">
              <p className="logo_text_admin">La Bibliotheque d'Hyrule </p>
              <p className="logo_under">Le site des FanFictions sur l'univers de Zelda</p>
            </a>
          </div>
        </div>
        <button className="burger-menu-button" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </button>
        <nav className={`nav_admin ${menuOpen ? 'menu-open' : ''}`}>
          <ul>
          {window.innerWidth > 425 && (
            <li className="li_nav_admin"><a href="/admin" className="nav-link_admin">Dashboard</a></li>
          )}
            <li className="li_nav_admin"><a href="/admin/manageusers" className="nav-link_admin">Gérer les utilisateurs</a></li>
            <li className="li_nav_admin"><a href="/admin/managefictions" className="nav-link_admin">Gérer les fictions</a></li>
            <li className="li_nav_admin"><a href="/login" className="adminLogout" onClick={handleLogout}>Se déconnecter</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;