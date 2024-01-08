import React from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';
import './HomePage.css';

const HomePage = () => {
  return (
    <body>
      <main>
        <div className="main_rectangle">
          <Header />

          <section className="sub_header">
            <div>
              <h2>Une sélection des fictions</h2>
            </div>
          </section>

          <section className="main_section">
            <div className="bloc_news">
              <img src="/assets/img/portraits/media-8295.jpg" alt="" />
              <h2>La Course dans la vallée</h2>
              <p>Dans la vallée, Link aperçoit un attroupement. Bien vite, il réalise qu'une course va débuter dont l'enjeu dépasse ce qu'il imagine.</p>            </div>
            <div className="bloc_news">
              <img src="/assets/img/portraits/the-legend-of-zelda-bre-58ac6ec34dc97.jpg" alt="" />
              <h2>L'attaque du château</h2>
              <p>Quand une attaque de grande ampleur frappe sans prévenir le château de Zelda, Revali a une stratégie toute trouvée.</p>
            </div>
            <div className="bloc_news">
              <img src="/assets/img/portraits/the_legend_of_zelda__tears_of_the_kingdom___official_trailer__2_____the_legend_of_zelda__tears_of_the_kingdom___official_trailer__2_2023_3_27_123238-488_1080p_s.webp" alt="" />
              <h2>Au secours des Gorons</h2>
              <p>Un message inquiétant de Yonobo pousse Link et Midonia à partir en direction de la montagne du feu.</p>
            </div>
            <div className="bloc_news">
              <img src="/assets/img/portraits/urbosa_2840.webp" alt="" />
              <h2>Les flèches de foudre</h2>
              <p>Urbosa part en quête des Flèches de foudre noires, celle qui seraient capables de terrasser un Lynel en 1 coup.</p>
            </div>
          </section>
          
          <Footer /> 
        </div>
      </main>
    </body>
  );
};

export default HomePage;