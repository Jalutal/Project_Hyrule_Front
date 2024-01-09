import HeaderUsers from "../component/HeaderUsers";

import { useVerifyIfUserIsLogged } from "../utils/security-utils";

const UserDashboard = () => {
  useVerifyIfUserIsLogged();

  

  

        return (
            <>
            <body>
            <main>
              <div className="main_rectangle">
                <HeaderUsers />
                <h1 className="dash_user">Bienvenue dans le DashBoard user.</h1>
                <p className="dash_user">Vous pouvez gérer ici la modification de vos information ou bien nous faire partager votre histoire.</p>
                </div>
            </main>
            </body>
            </>
    )       
}

export default UserDashboard;