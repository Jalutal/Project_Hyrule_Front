import React, { useState, useEffect } from 'react';
import HeaderUsers from "../../component/users/HeaderUsers";
import { useParams } from "react-router-dom";
import "./userCheckFictions.scss";

const UserFictionsPage = () => {
  const [fictions, setFictions] = useState([]);
  const [user, setUser] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const userResponse = await fetch(`http://localhost:3000/api/users/${id}`);
      const userResponseData = await userResponse.json();
      setUser(userResponseData);
      console.log(userResponseData)
    })();
  }, [id]);

  useEffect(() => {
    const fetchUserFictions = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/fanfics'); // Ajustez l'URL de l'API en conséquence
        const data = await response.json();
        setFictions(data);
      } catch (error) {
        console.error('Erreur lors de la récupération des fictions de l\'utilisateur :', error);
      }
    };

    fetchUserFictions();
  }, []);

  return (
    <body>
      <main>
        <div className="main_rectangle">
          <HeaderUsers />
          <h1>Fictions de l'utilisateur</h1>
          <ul>
            {fictions ? (
              <div>
                {fictions
                  .filter((fiction) => fiction.UserId === user.id)
                  .map((fiction) => (
                  <article key={fiction.id}>
                    {console.log(fiction)}
                   </article>
                  ))}
              </div>
            ) : (
              <p>En cours de chargement</p>
            )}
          </ul>
        </div>
      </main>
    </body>
  );
};

export default UserFictionsPage;