import "./header.scss";
import React, { useState } from 'react';
import logo from '../../assets/img/aef1968f-9bee-411c-b98e-c688c8aa9eb9.jpeg';
import log from '../../assets/img/connexion.png';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
    setMenuOpen(!menuOpen);
};


    return(
        <header>
      <div className={`header_guest ${menuOpen ? 'menu-open' : ''}`}>
        <div className="logos_guest">
          <div className="img_logo_guest">
            <a href="/">
              <img src={logo} alt="La Biliothèque d'Hyrule" />
            </a>
            <a href="/" className="nav-link_guest">
              <p className="logo_text_guest">La Bibliotheque d'Hyrule </p>
              <p className="logo_under">Le site des FanFictions sur l'univers de Zelda</p>
            </a>
          </div>
        </div>
        <button className="burger-menu-button" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </button>
        <nav className={`nav_guest ${menuOpen ? 'menu-open' : ''}`}>
          <ul>
            <li className="li_nav_guest"><a href="/newfic" className="nav-link_guest">Nouvelles Fictions</a></li>
            <li className="li_nav_guest"><a href="/categories" className="nav-link_guest">Catégories</a></li>
            <li className="li_nav_guest"><a href="/contact" className="nav-link_guest">Contact</a></li>
            <li className="li_nav_guest"><a href="/login" className="nav-link-last_guest"><img src={log} alt="Connexion des utilisateurs" /></a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;