import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-datepicker/dist/react-datepicker.css";

import { Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Login from "./components/login";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import PersonalInformation from "./components/PersonalInformation";
import Messages from "./components/Messages";
import Locations from "./components/Locations";
import Post from "components/Post";
import Favorits from "components/Favorits";
import NavbarPartner from "components/partner/NavbarPartner";
import useAuth from "hooks/useAuth";
import PartnerHome from "components/partner/PartnerHome";
import Myadvert from "components/partner/Myadverts";
import ModifyAdvert from "components/partner/ModifyAdvert";
import NewAdvert from "components/partner/NewAdvert";
import MyMesages from "components/partner/MyMessages";
import MyRequests from "components/partner/MyRequests";
import MyComments from "components/partner/MyComments";
import LoginAdmin from "components/Admin/LoginAdmin";
import { UserContext } from "utils/contexts";
import { ROLE_IDS } from "utils/constants";

const App = () => {
  const [user, setUser] = useState(null);
  const role_id = useAuth()?.role?.role_id;

  const isPartner = role_id == ROLE_IDS.PARTENER;
  const isAdmin = role_id == ROLE_IDS.ADMIN;
  const isClient = role_id == ROLE_IDS.CLIENT;
  const localData = localStorage.getItem("data");

  return (
    <>
      <ToastContainer />
      <UserContext.Provider value={{ user, setUser }}>
        {isPartner && <NavbarPartner />}
        {!isPartner && <Navbar />}
        <div className="container mt-3">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
            <Route
              path="personal-information"
              element={<PersonalInformation />}
            />
            <Route path="messages" element={<Messages />} />
            <Route path="locations" element={<Locations />} />
            <Route path="post/:id" element={<Post />} />
            <Route path="favorite" element={<Favorits />} />
            <Route path="partner" element={<PartnerHome />} />
            <Route path="myadvert" element={<Myadvert />} />
            <Route path="modifyadvert" element={<ModifyAdvert />} />
            <Route path="newadvert" element={<NewAdvert />} />
            <Route path="mymessages" element={<MyMesages />} />
            <Route path="myrequests" element={<MyRequests />} />
            <Route path="mycomments" element={<MyComments />} />
            <Route path="loginadmin" element={<LoginAdmin />} />
          </Routes>
        </div>
      </UserContext.Provider>
    </>
  );
};
export default App;
