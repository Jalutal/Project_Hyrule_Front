import "./headerUsers.scss";
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

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
      <div className={`header_user ${menuOpen ? 'menu-open' : ''}`}>
        <div className="logos_user">
          <div className="img_logo_user">
            <a href="/">
              <img src="/assets/img/aef1968f-9bee-411c-b98e-c688c8aa9eb9.jpeg" alt="La Biliothèque d'Hyrule" />
            </a>
            <a href="/" className="nav-link_user">
              <p className="logo_text_user">La Bibliotheque d'Hyrule </p>
              <p className="logo_under">Le site des FanFictions sur l'univers de Zelda</p>
            </a>
          </div>
        </div>
        <button className="burger-menu-button" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </button>
        <nav className={`nav_user ${menuOpen ? 'menu-open' : ''}`}>
        <ul>
            {window.innerWidth > 425 && (
            <li class="li_nav_user"><a href="/user" class="nav-link_user">Dashboard</a></li>
            )}
            <li class="li_nav_user"><a href="/user/manageinfos" class="nav-link_user">Gérer mes infos</a></li>
            <li class="li_nav_user"><a href="/user/createfiction" class="nav-link_user">Créer une fiction</a></li>
            <li class="li_nav_user"><a href="/login" className="userLogout" onClick={handleLogout}>Se déconnecter</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;