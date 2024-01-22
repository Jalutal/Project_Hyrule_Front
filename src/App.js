import HomePage from './page/HomePage';
import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Login from './page/guest/Login';
import NewFictions from './page/guest/NewFictions';
import FictionsMain from './page/guest/FictionsMain';
import Admin from './page/admin/AdminDashboard';
import User from './page/users/UserDashboard';
import Categories from './page/guest/Categories';
import ContactsPage from './page/guest/ContactsPage';
import UserCreateFictionPage from './page/users/UserCreateFictionPage';
import UserCheckFictions from './page/users/UserCheckFictions';
import AdminManageUser from './page/admin/AdminManageUsers';
import AdminManageFictions from './page/admin/AdminManageFictions';
import UserManageInfos from './page/users/UserManageInfos';
import MentionsLegales from './page/guest/MentionsLegales';
import CreateUser from './page/guest/CreateUser';


function App() {
  return (
    <>
    <Helmet>
        <title>La Bibliothèque d'Hyrule</title>
    </Helmet>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/createuser" element={<CreateUser />} />
        <Route path="/newfic/details/:id" element={<FictionsMain />} />
        <Route path="/newfic" element={<NewFictions />} />
        <Route path="/contact" element={<ContactsPage />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/mentionslegales" element={<MentionsLegales />} />

        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/manageusers" element={<AdminManageUser />} />
        <Route path="admin/managefictions" element={<AdminManageFictions />} />
        <Route path="/user" element={<User />} />
        <Route path="/user/createfiction" element={<UserCreateFictionPage />} />
        <Route path="/user/checkfictions" element={<UserCheckFictions />} />
        <Route path="/user/manageinfos" element={<UserManageInfos />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;