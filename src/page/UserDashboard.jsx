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
                <p>Bienvenue dans le DashBoard user</p>
                </div>
            </main>
            </body>
            </>
    )       
}

export default UserDashboard;