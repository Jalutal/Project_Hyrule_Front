import { jwtDecode } from "jwt-decode";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const FictionsMain = ({ fictionId }) => {
  const [fiction, setFiction] = useState(null);
  const [comments, setComments] = useState(null);
  const [fictionsId, setFictionsId] = useState(null);
  const { id }=useParams ();
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




  // useEffect(() => {
  //   (async () => {
  //     const commentsResponse = await fetch("http://localhost:3000/api/comments");
  //     const commentsResponseData = await commentsResponse.json();
  //     setComments(commentsResponseData);
  //   })();
  // }, []);



  // useEffect(() => {
  //   (async () => {
  //     const fictionsIdResponse = await fetch(`http://localhost:3000/api/fanfics/${fictionId}`);
  //     const fictionsIdResponseData = await fictionsIdResponse.json();
  //     setFictionsId(fictionsIdResponseData);
  //   })();
  // }, [id]);




console.log(fiction)

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


  return (
    <>
      {fiction ? (
        <>
        <article>
          <h2>{fiction.fictionname}</h2>
          <p>{fiction.story}</p>
        </article>

<article>
<h2>Les commentaires : </h2>
{fiction.Comments.length > 0 && (
  <article>
  {fiction.Comments.map((comment) => {
    return(
      <>
    <p>Utilisateur : {comment.User.username}</p>  
    <p>Commentaire : {comment.comment}</p></>
    )
    

})} </article>
) }
    

    <form onSubmit={(event) => handleCreateComment(event, fiction.id)}>                  
      <label >
        Commentez  : 
        <textarea  type="text" name="comment" />
      </label>
      <input type="submit" />
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
