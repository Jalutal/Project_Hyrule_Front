import HeaderUsers from "../../component/users/HeaderUsers";
import Footer from "../../component/guest/Footer";
import { useEffect, useState } from "react";
import { useVerifyIfUserIsLogged } from "../../utils/security-utils";
import "./userDashboard.scss";


const UserDashboard = ({login, isLogin}) => {
  useVerifyIfUserIsLogged();

  const [users, setUsers] = useState(null);
  const token = localStorage.getItem("jwt");

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
    <>
      <body>
        <main>
          <div className="main_rectangle">
            <HeaderUsers />
            <h1 className="h1_dashUser">Bienvenue dans le DashBoard user</h1>
            <p className="dash_user">Vous pouvez gérer ici la modification de vos information ou bien nous faire partager votre histoire.</p>
            
          </div>
          <Footer />
        </main>
      </body>
    </>
    )       
}

export default UserDashboard;