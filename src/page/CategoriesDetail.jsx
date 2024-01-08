import React, { useState, useEffect } from 'react';
import FictionsMain from './FictionsMain';

const CategoriesDetail = ({ category }) => {
  const [allFictions, setAllFictions] = useState(null);
  const [categoryFictions, setCategoryFictions] = useState(null);
  const [selectedFictionId, setSelectedFictionId] = useState(null);

  useEffect(() => {
    const fetchAllFictions = async () => {
      try {
        const allFictionsResponse = await fetch('http://localhost:3000/api/fanfics');
        const allFictionsResponseData = await allFictionsResponse.json();

        if (allFictionsResponseData) {
          setAllFictions(allFictionsResponseData);
        } else {
          setAllFictions([]);
        }
      } catch (error) {
        console.error('Erreur lors de la récupération de toutes les fictions:', error);
      }
    };

    fetchAllFictions();
  }, []);

  useEffect(() => {
    // Filtrer les fictions par la catégorie spécifiée
    if (allFictions && category) {
      const filteredFictions = allFictions.filter(fiction => fiction.category === category);
      setCategoryFictions(filteredFictions);
    }
  }, [allFictions, category]);

  const handleFictionClick = (fictionId) => {
    setSelectedFictionId(fictionId);
  };

  return (
    <div>
      <h1>Histoires de la catégorie "{category}" :</h1>
      {categoryFictions ? (
        <>
          {categoryFictions.map((fiction) => (
            <article key={fiction.id}>
              <button onClick={() => handleFictionClick(fiction.id)}>
                <h3>{fiction.fictionname}</h3>
              </button>
            </article>
          ))}
        </>
      ) : (
        <p>Aucune histoire dans cette catégorie</p>
      )}
      {selectedFictionId && (
        <div>
          <FictionsMain fictionId={selectedFictionId} />
        </div>
      )}
    </div>
  );
};

export default CategoriesDetail;
