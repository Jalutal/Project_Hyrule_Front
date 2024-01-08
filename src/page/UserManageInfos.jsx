import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import HeaderAdmin from "../component/HeaderAdmin";
import { useVerifyIfUserIsLogged } from "./../utils/security-utils";


const UserManageInfos = () => {
    useVerifyIfUserIsLogged();
  const [user, setUser] = useState(null);
  const token = localStorage.getItem("jwt");
  const decodedToken = jwtDecode(token);
 
  useEffect(() => {
    (async () => {
        const userResponse = await fetch(`http://localhost:3000/api/users/${decodedToken.userId}`);
        const userResponseData = await userResponse.json();
        setUser(userResponseData.data);
        console.log(userResponseData.data);
      })();
    }, [decodedToken.dataId]);



  // Requête fetch pour supprimer un utilisateur
  const handleDeleteUser = async (event, usersId) => {
    await fetch(`http://localhost:3000/api/users/${decodedToken.dataId}`, {
      method: "DELETE",
      headers: { Authorization: "Bearer " + token }
    })
    const usersResponse = await fetch("http://localhost:3000/api/users");
    const usersResponseData = await usersResponse.json();
    setUser(usersResponseData)
  }

  return (
    <body>
      <main>
        <div className="main_rectangle">
        <HeaderAdmin />
        
        <h1>Liste des utilisateurs :</h1> 
        <div className="container_admin">       
        <div className="div_admin">
        {user ? (
                    <article>
                      <div>
                        <h2 className="user">{user.username}</h2>
                        {decodedToken.data.role !== 3 && (
                            <button onClick={handleDeleteUser}>Supprimer</button>
                        )}
                      </div>
                        
                    </article>
                ) : (
                    <p>En cours de chargement</p>
                )}</div>
        </div>
           
        </div>


      </main>
    </body>
  );
};

export default UserManageInfos;