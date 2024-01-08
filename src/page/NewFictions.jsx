import React, { useState, useEffect } from 'react';
import Header from "../component/Header";
import FictionsMain from "./FictionsMain";
import Footer from '../component/Footer';

const NewFictions = () => {
  const [fictions, setFictions] = useState(null);
  const [selectedFictionId, setSelectedFictionId] = useState(null);

  useEffect(() => {
    const fetchFictions = async () => {
      try {
        const fictionsResponse = await fetch("http://localhost:3000/api/fanfics");
        const fictionsResponseData = await fictionsResponse.json();
        // Tri des fictions par date de création (createdAt)
        const sortedFictions = fictionsResponseData.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        setFictions(sortedFictions);
      } catch (error) {
        console.error('Erreur lors de la récupération des fictions:', error);
      }
    };

    fetchFictions();
  }, []);

  const handleFictionClick = (fictionId) => {
    setSelectedFictionId(fictionId);
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = new Date(dateString).toLocaleDateString(undefined, options);
    return formattedDate;
  };

  return (
    <body>
    <main>
    <div className="main_rectangle">
      <Header />
      <div className="content-container">
        <section>
          <h1>Liste des Fictions:</h1>
          <ul>
            {fictions ? (
              <>
                {fictions.map((fiction) => (
                  <article key={fiction.id}>
                    <button onClick={() => handleFictionClick(fiction.id)}>
                      <h3>{fiction.fictionname}</h3>
                      <p>Date de création : {formatDate(fiction.createdAt)}</p>
                    </button>
                  </article>
                ))}
              </>
            ) : (
              <p>En cours de chargement</p>
            )}
          </ul>
        </section>
        {selectedFictionId && (
          <div>
            <FictionsMain fictionId={selectedFictionId} />
          </div>
        )}
      </div>
      <Footer />
    </div>
    </main>
    </body>
  );
};

export default NewFictions;
