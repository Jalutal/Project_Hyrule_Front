import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import HeaderAdmin from "../component/HeaderAdmin";



const AdminManageUser = () => {

  const [users, setUsers] = useState(null);
  const token = localStorage.getItem("jwt");
  const decodedToken = jwtDecode(token);
 

  
  // Requête Fetch pour récupérer (get) tous les utilisateurs
  useEffect(() => {
    (async () => {
      try {
        const usersResponse = await fetch("http://localhost:3000/api/users");
  
        if (!usersResponse.ok) {
          throw new Error(`Erreur lors de la récupération des utilisateurs: ${usersResponse.status}`);
        }  
        const usersResponseData = await usersResponse.json();
        setUsers(usersResponseData);
      } catch (error) {
        console.error("Une erreur s'est produite lors de la récupération des utilisateurs:", error.message);
      }
    })();
  }, []);



  // Requête fetch pour supprimer un utilisateur
  const handleDeleteUsers = async (event, usersId) => {
    await fetch("http://localhost:3000/api/users/" + usersId, {
      method: "DELETE",
      headers: { Authorization: "Bearer " + token }
    })
    const usersResponse = await fetch("http://localhost:3000/api/users");
    const usersResponseData = await usersResponse.json();
    setUsers(usersResponseData)
  }

  return (
    <body>
      <main>
        <div className="main_rectangle">
        <HeaderAdmin />
        
        <h1>Liste des utilisateurs :</h1> 
        <div className="container_admin">       
        <div className="div_admin">
        {users ? (
          <>
          {users.map((user) => {
            return(
              <article>
                <h2>{user.username}</h2>
                <p>{user.id}</p>
                {decodedToken.data.RoleId !== 3 && (
                  <button onClick={(event) => handleDeleteUsers(event, user.id)}>Supprimer: {user.username}</button>
                )}
              </article>
            );
          })}
          </>
  ) : (
      <p>En cours de chargement</p>
        )}</div>
        </div>
           
        </div>


      </main>
    </body>
  );
};

export default AdminManageUser;