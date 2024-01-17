import { jwtDecode } from "jwt-decode";
import React, { useEffect, useState } from "react";
import "./fictionMain.scss";

const FictionsMain = ({ fictionId }) => {
  const [fiction, setFiction] = useState(null);
  const token = localStorage.getItem("jwt");

  useEffect(() => {
    const fetchFiction = async () => {
      try {
        const fictionResponse = await fetch(`http://localhost:3000/api/fanfics/${fictionId}`);
        const fictionResponseData = await fictionResponse.json();
        setFiction(fictionResponseData.data);
      } catch (error) {
        console.error('Erreur lors de la récupération de la fiction:', error);
      }
    };
    fetchFiction();
  }, [fictionId]);

  const handleCreateComment = async (event, fictionsId) => {
    event.preventDefault();    
    const decodedToken = jwtDecode(token);    
    const comment = event.target.comment.value;    
    const commentToCreate = {
      comment: comment,      
      FanficId: fiction.id,
      UserId: decodedToken.dataId,
    };
    console.log(decodedToken)
    console.log(commentToCreate)     
    const commentToCreateJson = JSON.stringify(commentToCreate);    
    try {
      const commentResponse = await fetch("http://localhost:3000/api/comments" , {
      method: "POST",
      headers: {
        "Content-Type": "application/json",         
        Authorization: "Bearer " + token,
      },     
      body: commentToCreateJson,      
    });
      console.log(commentToCreate)

    if (commentResponse.ok) {   
      alert("Commentaire créé.");      
      window.location.reload();
    } else {
      alert("Le commentaire n'as pu être créé. Veuillez rééssayer. ");
    }

    } catch (error) {
      alert("Une erreur est survenue. Veullez rééssayer");
    }    
    };
console.log(fiction)

  return (
    <>
      {fiction ? (
        <>
        <article>
          <h2>{fiction.fictionname}</h2>
          <p>Auteur : {fiction.User !== null ?
              (
                <p>{fiction.User.username}</p>
              ) : 
              (
                <p>null</p>
              )  
        }</p>
          <p dangerouslySetInnerHTML={{ __html: fiction.story }} className="fic_font"></p>
          {/* <p>Auteur : {fiction.User.username}</p> */}
        </article>

<article className="comments">
<h2>Les commentaires : </h2>
{fiction.Comments.length > 0 && (
  <article>
  {fiction.Comments.map((comment) => {
    return(
      <>
    <p><span className="comment_underline">Utilisateur</span> : {comment.User.username}</p>  
    <p className="comment_spacer"><span className="comment_underline">Commentaire</span> : {comment.comment}</p></>
    )
    

})} </article>
) }
    

    <form onSubmit={(event) => handleCreateComment(event, fiction.id)} className="comments_create">                  
      <label>
        <p>Commentaire  :</p> 
        <textarea  type="text" name="comment" />
      </label>
      <input type="submit" className="comment_submit"/>
    </form>
  </article>
</>

      ) : (
        <p>En cours de chargement</p>



      )}
      
                      


    </>
  );
};

export default FictionsMain;
