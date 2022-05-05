import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/login";

import Navbar from "./components/Navbar";
import Register from "./components/Register";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
