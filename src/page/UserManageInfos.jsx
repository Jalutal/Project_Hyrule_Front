import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import HeaderAdmin from "../component/HeaderAdmin";

const UserManageSelf = () => {
  const [user, setUser] = useState(null);
  const token = localStorage.getItem("jwt");
  const decodedToken = jwtDecode(token);

  // Requête Fetch pour récupérer (get) l'utilisateur actuellement connecté
  useEffect(() => {
    (async () => {
      try {
        const userResponse = await fetch("http://localhost:3000/api/users/" + decodedToken.data.id, {
          headers: { Authorization: "Bearer " + token },
        });

        if (!userResponse.ok) {
          throw new Error(`Erreur lors de la récupération de l'utilisateur: ${userResponse.status}`);
        }

        const userData = await userResponse.json();
        setUser(userData);
      } catch (error) {
        console.error("Une erreur s'est produite lors de la récupération de l'utilisateur:", error.message);
      }
    })();
  }, [token, decodedToken.data.id]);

  // Requête fetch pour supprimer l'utilisateur actuellement connecté
  const handleDeleteUser = async () => {
    try {
      await fetch("http://localhost:3000/api/users/" + decodedToken.data.id, {
        method: "DELETE",
        headers: { Authorization: "Bearer " + token },
      });

      // Rediriger vers la page de déconnexion ou afficher un message de succès
    } catch (error) {
      console.error("Une erreur s'est produite lors de la suppression de l'utilisateur:", error.message);
    }
  };

  return (
    <body>
      <main>
        <div className="main_rectangle">
          <HeaderAdmin />
          
          <h1>Informations de l'utilisateur :</h1> 
          <div className="container_admin">
            <div className="div_admin">
              {user ? (
                <article>
                  <h2>{user.username}</h2>
                  <p>{user.id}</p>
                  <button onClick={handleDeleteUser}>Supprimer mon compte</button>
                </article>
              ) : (
                <p>En cours de chargement</p>
              )}
            </div>
          </div>
        </div>
      </main>
    </body>
  );
};

export default UserManageSelf;
