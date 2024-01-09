import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HeaderUsers from "../component/HeaderUsers";
import { useVerifyIfUserIsLogged } from "./../utils/security-utils";
import { jwtDecode } from "jwt-decode";

const UserManageSelf = () => {
  useVerifyIfUserIsLogged();

  const { id } = useParams();
  const [message, setMessage] = useState(null);
  const [user, setUser] = useState(null);
  const token = localStorage.getItem("jwt");

  
  useEffect(() => {
    userFetch();
  }, []);

  const userFetch = async () => {
    if (token) {
      const decodedToken = jwtDecode(token)
      const userResponse = await fetch(`http://localhost:3000/api/users/${decodedToken.dataId}`);
    const userResponseData = await userResponse.json();
    setUser(userResponseData.data);
    console.log(decodedToken.dataId)
    }
    
  }

  const handleUpdateUser = async (event) => {
    event.preventDefault();    
    
    const email = event.target.email.value
    const username = event.target.username.value
    const editUser = {
      email: email,
      username: username
    }   
    const editUserJson = JSON.stringify(editUser)
    const token = localStorage.getItem("jwt");
    const decodedToken = jwtDecode(token);
    const updateUserResponse = await fetch(`http://localhost:3000/api/users/${decodedToken.dataId}`, {
        method: "PUT",
        headers: {          
          Authorization: "Bearer " + token,
          "Content-Type": "application/json"
        },
        body: editUserJson,
      });  
      if (updateUserResponse.status === 201) {
        setMessage("Mise à jour de l'utilisateur OK");
      } else {
        setMessage("Erreur - impossible de mettre à jour");
      }
    
  };

  return (
    <body>
      <main>
        <div className="main_rectangle">
          <HeaderUsers />
          
          <h1>Informations de l'utilisateur :</h1> 
          <div className="container_admin">
            <div className="div_admin">
              <>{message && <p>{message}</p>}</>
              {user && (
          <form onSubmit={handleUpdateUser}>
            <div>
          <label>
            Email :
            <input type="text" name="email" defaultValue={user.email}/>
          </label>
        </div>
        <div>
          <label>
            Username
            <input type="text" name="username" defaultValue={user.username}/>
          </label>
        </div>
            <input type="submit" />
          </form>
        )}
            </div>
          </div>
        </div>
      </main>
    </body>
  );
};

export default UserManageSelf;
