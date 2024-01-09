import Header from "../component/Header";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateUser = () => {
    const [message, setMessage] = useState(null);
    const navigate = useNavigate();
    const handleRegistration = async (event) => {
        event.preventDefault();
        const username = event.target.username.value;
        const password = event.target.password.value;
        const confirmPassword = event.target.confirmPassword.value;
        const email = event.target.email.value;
        if (password !== confirmPassword) {
            setMessage(`Le mot de passe ne correspond pas.`);
            return;
    }
        const registerData = {
            username: username,
            password: password,
            email: email,
            RoleId: 2
        };
        const registerDataJson = JSON.stringify(registerData);
        const registerResponse = await fetch("http://localhost:3000/api/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: registerDataJson,
        }); 
        if (registerResponse.status === 201) {
            setMessage("Vous vous êtes bien enregistré");
            navigate("/login");
         } else {    
            setMessage("Erreur lors de l'enregistrement");
    }


  };
    return (
        <body>
        <main>
        <div className="main_rectangle">
            <Header />
            {message && <p>{message}</p>}
      <form onSubmit={handleRegistration} className="login_form">
      <h2 className="login_create">Créez votre compte :</h2>
        <label>
          Username : 
          <input type="text" name="username" />
        </label>
        <label>
          Password : 
          <input type="password" name="password" />
        </label>
        <label>
          Confirmez le Password : 
          <input type="password" name="confirmPassword" />
        </label>
        <label>
          Email : 
          <input type="text" name="email" />
        </label>
        <img src="/assets/img/sticker-zelda-sheikah-logo-02-removebg-preview.png" alt="Connexion" />
        <input type="submit" value="Inscription" className="input" />
      </form>
        </div>
        </main>
        </body>
    )       
}

export default CreateUser;