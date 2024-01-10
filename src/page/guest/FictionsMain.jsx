import React, { useEffect, useState } from "react";

const FictionsMain = ({ fictionId }) => {
  const [fiction, setFiction] = useState(null);

  useEffect(() => {
    const fetchFiction = async () => {
      try {
        const fictionResponse = await fetch(`http://localhost:3000/api/fanfics/${fictionId}`);
        const fictionResponseData = await fictionResponse.json();
        setFiction(fictionResponseData.data);
      } catch (error) {
        console.error('Erreur lors de la récupération de la fiction:', error);
      }
    };
    fetchFiction();
  }, [fictionId]);

  return (
    <>
      {fiction ? (
        <article>
          <h2>{fiction.fictionname}</h2>
          <h3>{fiction.summary}</h3>
          <p>{fiction.story}</p>
        </article>
      ) : (
        <p>En cours de chargement</p>
      )}
      
    </>
  );
};

export default FictionsMain;
