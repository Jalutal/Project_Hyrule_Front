import React from 'react';
import Header from '../component/guest/Header';
import Footer from '../component/guest/Footer';
import './HomePage.css';



const HomePage = () => {
  return (
    <body>
      <main>
        <div className="main_rectangle">
          <Header />        
          <section className="main_section">
            <div className="bloc_main">              
              <h1>Bienvenue dans la bibliothèque d'Hyrule !</h1>
              <p>Le repaire ultime des passionnés de l'univers légendaire de Zelda ! Plongez au coeur de notre royaume virtuel où les pages s'animent avec des récits captivants, des aventures épiques, et des histoires inédites inspirées de l'univers envoûtant des jeux vidéo Zelda.</p>
              <p>Que vous soyez un héros intrépide, un voyageur du temps ou un simple admirateur des mystères de la Triforce, notre communauté dédiée à la fanfiction Zelda vous invite à explorer des mondes parallèles, à découvrir des personnages inattendus et à revisiter les classiques de la saga sous un nouvel angle.</p>
              <p>Rejoignez-nous pour partager votre amour pour Zelda, échanger des idées avec d'autres fans créatifs, et plonger dans des aventures qui transcendent les écrans.</p>            
            </div>
            <a href="/login" className='link_homePage'>
            <div className="bloc_news">
              <img src="/assets/img/portraits/zelda-botw-1568662408004_v2_4x3.jpg" alt="" />
              <h2>Toi aussi publie ton histoire !</h2>
              <p>Découvre notre communauté et partage tes créations ou découvre celles des autres.</p>
            </div>
            </a>
          </section> 
        </div>
        <Footer /> 
      </main>
    </body>
  );
};

export default HomePage;