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

const App = () => {
  
  const {role} = useAuth();
  const isPartner = role === "partner";
  return (
    <div>
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
          <Route path="newadvert" element={<NewAdvert/>} />
          <Route path="mymessages" element={<MyMesages/>}/>
        </Routes>
      </div>
    </div>
  );
};
export default App;
