import "./header.scss";

const Header = () => {
    return(
        <header>
            <div class="header">                    
                <div class="logos">                        
                    <div class="img_logo">
                        <a href="/"><img src="/assets/img/aef1968f-9bee-411c-b98e-c688c8aa9eb9.jpeg" alt="La Biliothèque d'Hyrule" /></a>
                        <a href="/" class="nav-link">                        
                            <p class="logo_text">La Bibliotheque d'Hyrule </p>
                            <p>Le site des FanFictions sur l'univers de Zelda</p>
                        </a> 
                    </div>   
                </div>  
                <nav class="nav">
                    <ul>
                        <li class="li_nav"><a href="/newfic" class="nav-link">Nouvelles Fictions</a></li>
                        <li class="li_nav"><a href="/categories" class="nav-link">Catégories</a></li>
                        <li class="li_nav"><a href="/contact" class="nav-link">Contact</a></li>
                        <li class="li_nav"><a href="/login" class="nav-link-last"><img src="/assets/img/connexion.png" alt="Connexion des utilisateurs" /></a></li>
                    </ul>
                </nav>
            </div>    
        </header>
    )
}

export default Header;