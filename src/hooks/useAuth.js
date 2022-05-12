import { useEffect, useState } from "react";
import jwt from "jwt-decode";

const useAuth = () => {
  const [auth, setAuth] = useState(false);
  useEffect(() => {
   // try {
      //const token = localStorage.getItem("token");
      //   const token =
      //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Ik1hcmlhbWUgRWwgQWxhb3VpIiwicm9sZSI6ImNsaWVudCIsImlhdCI6MTUxNjIzOTAyMn0.dD5vFHUDDTo7JcXXbp9W-Twa2aR6dzd4kQpG8xu_C4w";
     // const user = jwt(token);
      //console.log("user", user);
      //if (user) {
        //setAuth(user);
      //}
    //} catch (error) {}
    const user={name:"Mariame El Alaoui",role:"partner"};
    setAuth(user);
  }, []);

  return auth;
};

export default useAuth;
