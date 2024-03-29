import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import HeaderAdmin from "../../component/admin/HeaderAdmin";
import { useVerifyIfUserIsLogged } from "../../utils/security-utils";
import "./adminManageUsers.scss";


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
  const handleDeleteUser = async (event, UserId) => {
    await fetch("http://localhost:3000/api/users/" + UserId, {
      method: "DELETE",
      headers: { Authorization: "Bearer " + token },
    });

    const usersResponse = await fetch("http://localhost:3000/api/users");
    const usersResponseData = await usersResponse.json();
    setUsers(usersResponseData);
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
                  {decodedToken.data.role !== 2 && (
                    <button onClick={(event) => handleDeleteUser(event, user.id)}>Supprimer: {user.username}</button>
                  )}
                  </article>
                );
                })}
                </>
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

export default AdminManageUser;