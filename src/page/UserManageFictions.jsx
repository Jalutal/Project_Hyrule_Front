import HeaderUsers from "../component/HeaderUsers";

import { useVerifyIfUserIsLogged } from "../utils/security-utils";

const UserManageFictions = () => {
  useVerifyIfUserIsLogged();

  

 

        return (
            <>
            <body>
            <main>
              <div className="main_rectangle">
                <HeaderUsers />
                <p><a href="/user/checkfictions">Voir mes fictions</a></p>
                <p><a href="/user/createfiction">Créer une fiction</a></p>
                </div>
            </main>
            </body>
            </>
    )       
}

export default UserManageFictions;