import Header from "../../component/Header";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.scss";

const Login = () => {
  const [message, setMessage] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;
    const loginData = {
      username,
      password,
    };
    const loginDataJson = JSON.stringify(loginData);
    const loginResponse = await fetch("http://localhost:3000/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: loginDataJson,
    });
    const loginResponseData = await loginResponse.json();
    const token = loginResponseData.data;

    if (token) {
      localStorage.setItem("jwt", token);
      setMessage("Vous êtes bien connecté");
      navigate("/user/");
    } else {
      setMessage("Erreur lors de la connexion");
    }
  };

    return (
        <body>
          <main>
            <div className="main_rectangle">
              <Header />
              {message && <p>{message}</p>}
              <form onSubmit={handleLogin} className="login_form">
                <h2 className="login_create">Identifiez-vous :</h2>
                <label>
                  Username : 
                  <input type="text" name="username" />
                </label>
                <label>
                  Password : 
                  <input type="password" name="password" />
                </label>
                <img src="/assets/img/sticker-zelda-sheikah-logo-02-removebg-preview.png" alt="Connexion" />
                <input type="submit" value="Connexion" className="input" />
              </form>
              <p className="login_create"><a href="/createuser">Créer un compte</a></p>
            </div>
          </main>
        </body>
    )       
}

export default Login;