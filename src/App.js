import HomePage from './page/HomePage';
import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Login from './page/Login';
import NewFictions from './page/NewFictions';
import FictionsMain from './page/FictionsMain';
import Admin from './page/AdminDashboard';
import User from './page/UserDashboard';
import Categories from './page/Categories';
import ContactsPage from './page/ContactsPage';
import UserManageFictions from './page/UserManageFictions';
import UserCreateFictionPage from './page/UserCreateFictionPage';
import UserCheckFictions from './page/UserCheckFictions';
import AdminManageUser from './page/AdminManageUsers';
import AdminManageFictions from './page/AdminManageFictions';
import UserManageInfos from './page/UserManageInfos';
import MentionsLegales from './page/MentionsLegales';


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
        <Route path="/newfic/details/:id" element={<FictionsMain />} />
        <Route path="/newfic" element={<NewFictions />} />
        <Route path="/contact" element={<ContactsPage />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/mentionslegales" element={<MentionsLegales />} />

        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/manageusers" element={<AdminManageUser />} />
        <Route path="admin/managefictions" element={<AdminManageFictions />} />
        <Route path="/user" element={<User />} />
        <Route path="/user/fictions" element={<UserCreateFictionPage />} />
        <Route path="/user/checkfictions" element={<UserCheckFictions />} />
        <Route path="/user/manageinfos" element={<UserManageInfos />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
