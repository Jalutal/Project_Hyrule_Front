
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import HeaderAdmin from "../component/HeaderAdmin";



const Admin = () => {

  const [fictions, setFictions] = useState(null);
  const token = localStorage.getItem("jwt");
  const decodedToken = jwtDecode(token);
 

  
  

  useEffect(() => {
    const fetchFictions = async () => {
      try {
        const fictionsResponse = await fetch("http://localhost:3000/api/fanfics");
        const fictionsResponseData = await fictionsResponse.json();
        setFictions(fictionsResponseData);
      } catch (error) {
        console.error('Erreur lors de la récupération des fictions:', error);
      }
    };

    fetchFictions();
  }, []);


  const handleDeleteFictions = async (event, fictionId) => {
    await fetch("http://localhost:3000/api/fanfics/" + fictionId, {
      method: "DELETE",
      headers: { Authorization: "Bearer " + token }
    })
    const fictionsResponse = await fetch("http://localhost:3000/api/fanfics");
    const fictionsResponseData = await fictionsResponse.json();
    setFictions(fictionsResponseData)
  }




  return (
    <body>
      <main>
        <div className="main_rectangle">
        <HeaderAdmin />
        <div className="container_admin">       
        <div>
          <p>Bienvenue sur le Dashboard admin.</p>
          <p>Selectionnez l'action à effectuer dans la barre de navigation.</p>
        </div>
        </div>
        </div>
      </main>
    </body>
  );
};

export default Admin;