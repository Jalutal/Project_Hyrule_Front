import { useNavigate } from "react-router-dom";


const HeaderAdmin = () => {


    const navigate = useNavigate();

    const handleLogout = () => {
      // sortir le token du local storage
      localStorage.removeItem("jwt");
  
      // redirige l'utilisateur vers la page de login
      navigate("/login");
    };

    return(
        <header>
                <div class="header">                    
                    <div class="logos">                        
                        <div class="img_logo">
                            <a href="/">
                            <img src="/assets/img/aef1968f-9bee-411c-b98e-c688c8aa9eb9.jpeg" alt="La Biliothèque d'Hyrule" />
                            </a>
                            <a href="/" class="nav-link">                        
                            <p class="logo_text">La Bibliotheque d'Hyrule </p>
                            <p>Le site des FanFictions sur l'univers de Zelda</p>
                            </a> 
                        </div>
                        
                    </div>  
                    <nav class="nav">
                        <ul>
                            <li class="li_nav"><a href="/admin" class="nav-link">Dashboard</a></li>
                            <li class="li_nav"><a href="/admin/manageusers" class="nav-link">Gérer les utilisateurs</a></li>
                            <li class="li_nav"><a href="/admin/managefictions" class="nav-link">Gérer les fictions</a></li>
                            <li class="li_nav"><button className="adminLogout" onClick={handleLogout}>Se déconnecter</button></li>
                        </ul>
                    </nav>
                </div>    
            </header>
    )
}

export default HeaderAdmin;