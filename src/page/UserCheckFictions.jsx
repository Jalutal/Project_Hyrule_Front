import React, { useState, useEffect } from 'react';
import HeaderUsers from "../component/HeaderUsers";

const UserCheckFictions = () => {
  
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

  return (
    <>
      <body>
        <main>
          <div className="main_rectangle">
            <HeaderUsers />
            <section>
            <h1>Liste des Fictions:</h1>
          <ul>
            {fictions ? (
              <>
                {fictions.map((fiction) => (
                  <article key={fiction.id}>
                    <button onClick={() => handleFictionClick(fiction.id)}>
                      <h3>{fiction.fictionname}</h3>
                    </button>
                  </article>
                ))}
              </>
            ) : (
              <p>En cours de chargement</p>
            )}
          </ul>
            </section>
          </div>
        </main>
      </body>
    </>
  );
}

export default UserCheckFictions;
