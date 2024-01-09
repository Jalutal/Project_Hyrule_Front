import React, { useState, useEffect } from 'react';
import HeaderUsers from "../component/HeaderUsers";

const UserCheckFictions = () => {
  const [fictions, setFictions] = useState(null);
  const [selectedFictionId, setSelectedFictionId] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const token = /* récupérer le token JWT stocké côté client */ "votre_token_jwt";
        const userInfoResponse = await fetch("http://localhost:3000/api/users/info", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        const userInfoData = await userInfoResponse.json();
        setCurrentUser(userInfoData.data.userId);
      } catch (error) {
        console.error('Erreur lors de la récupération des informations de l\'utilisateur:', error);
      }
    };

    fetchUserInfo();
  }, []);

  useEffect(() => {
    const fetchFictions = async () => {
      try {
        const fictionsResponse = await fetch("http://localhost:3000/api/fanfics");
        const fictionsResponseData = await fictionsResponse.json();

        // Filtrer les fictions pour n'inclure que celles de l'utilisateur actuel
        const userFictions = fictionsResponseData.filter(fiction => fiction.UserId === currentUser);

        // Tri des fictions par date de création (createdAt)
        const sortedFictions = userFictions.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        setFictions(sortedFictions);
      } catch (error) {
        console.error('Erreur lors de la récupération des fictions:', error);
      }
    };

    if (currentUser) {
      fetchFictions();
    }
  }, [currentUser]);

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
};

export default UserCheckFictions;
