import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import HeaderAdmin from "../component/HeaderAdmin";
import { useVerifyIfUserIsLogged } from "./../utils/security-utils";



const AdminManageFictions = () => {
  useVerifyIfUserIsLogged();
  const [fictions, setFictions] = useState(null);
  const token = localStorage.getItem("jwt");
  const decodedToken = jwtDecode(token);
 

  
  // Requête Fetch pour récupérer (get) toutes les fictions
  useEffect(() => {
    (async () => {     
      const fictionsResponse = await fetch("http://localhost:3000/api/fanfics");   
      const fictionsResponseData = await fictionsResponse.json();
      setFictions(fictionsResponseData);
    })();
  }, []);



  // Requête fetch pour supprimer une fiction
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
        <div className="div_admin">
        </div>
        </div>
        
        

        <h1>Liste des fictions :</h1> 
        <div className="container_admin">       
        <div>
        {fictions ? (
          <>
          {fictions.map((fiction) => {
            return(
              <article>
                <h2>{fiction.fictionname}</h2>
                {decodedToken.data.role !== 2 && (
                  <button onClick={(event) => handleDeleteFictions(event, fiction.id)}>Supprimer: {fiction.fictionname}</button>
                )}
              </article>
            );
          })}
  </>
) : (
  <p>En cours de chargement</p>
)}</div>
        <div className="div_admin">
        </div>
        </div>
        </div>


      </main>
    </body>
  );
};

export default AdminManageFictions;