import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/login";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import PersonalInformation from "./components/PersonalInformation";
import Messages from "./components/Messages";
import Locations from "./components/Locations";
import Favorite from "./components/Favorite";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="personal-information" element={<PersonalInformation />}/>
          <Route path="messages" element={<Messages />} />   
          <Route path="locations" element={<Locations />} />
          <Route path="favorite" element={<Favorite />} />
        </Routes>
      </div>
    </div>
  );
};
export default App;
