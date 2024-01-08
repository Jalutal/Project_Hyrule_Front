import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import HeaderAdmin from "../component/HeaderAdmin";
import { useVerifyIfUserIsLogged } from "./../utils/security-utils";



const AdminManageUser = () => {
  useVerifyIfUserIsLogged();
  const [users, setUsers] = useState(null);
  const token = localStorage.getItem("jwt");
  const decodedToken = jwtDecode(token);
 

  
  // Requête Fetch pour récupérer (get) tous les utilisateurs
  useEffect(() => {
    (async () => {
     
        const usersResponse = await fetch("http://localhost:3000/api/users");
   
        const usersResponseData = await usersResponse.json();
        setUsers(usersResponseData);

    })();
  }, []);



  // Requête fetch pour supprimer un utilisateur
  const handleDeleteUsers = async (event, usersId) => {
    try {
      await fetch("http://localhost:3000/api/users/" + usersId, {
        method: "DELETE",
        headers: { Authorization: "Bearer " + token }
      });
      
      const usersResponse = await fetch("http://localhost:3000/api/users");
      const usersResponseData = await usersResponse.json();
      setUsers(usersResponseData);
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

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