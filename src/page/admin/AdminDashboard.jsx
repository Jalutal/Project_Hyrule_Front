import HeaderAdmin from "../../component/admin/HeaderAdmin";
import { useVerifyIfAdminIsLogged } from "../../utils/security-utils";
import "./adminDashboard.scss";

const Admin = () => {
  useVerifyIfAdminIsLogged();  

    return (
      <>
      <body>
        <main>
          <div className="main_rectangle">
            <HeaderAdmin />
            <h1 className="dash_admin">Bienvenue dans le DashBoard Admin.</h1>
            <p className="dash_admin">Vous pouvez gérer ici la La suppression des utlisateurs ou des fictions.</p>
          </div>
        </main>
      </body>
      </>
)       
};

export default Admin;