
import HeaderUsers from "../../component/users/HeaderUsers";
import Footer from '../../component/guest/Footer';
import React, { useState } from 'react';
import "./userCreateFictionPage.scss";

const UserCreateFictionPage = () => {
  const [message, setMessage] = useState(null);
  const [formData, setFormData] = useState({
    fictionname: '',
    story: '',
    category: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  const token = localStorage.getItem("jwt");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(formData);
      const response = await fetch('http://localhost:3000/api/fanfics', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: "Bearer " + token,
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        // La mise à jour a réussi, vous pouvez gérer la redirection ou d'autres actions ici
        setMessage('Création réussie !');
      } else {
        // La mise à jour a échoué, vous pouvez gérer les erreurs ici
        console.error('Échec de la création');
      }
    } catch (error) {
      console.error('Erreur lors de la création', error);
    }
  };

  return (
    <body>
      <main>
        <div className="main_rectangle">
          <HeaderUsers />          
          {message && <p>{message}</p>}<h1 className="login_create">Créer une fiction</h1>
          <form onSubmit={handleSubmit} className="login_form_create">
          
          <div className="create_left"> 
            <label>
              Nom de la fiction:
              <input type="text" name="fictionname" value={formData.fictionname} onChange={handleChange} />
            </label>
            <label>
              Categorie:
              <input type="text" name="category" value={formData.category} onChange={handleChange} />
            </label>    
            </div>
            <div>
            <label>
              Histoire:
              <textarea name="story" value={formData.story} onChange={handleChange}></textarea>
            </label>
            
            <button type="submit" className="input">Envoyer</button>
            </div>
          </form>
        </div>
        <Footer />
      </main>
    </body>
  );
};

export default UserCreateFictionPage;
