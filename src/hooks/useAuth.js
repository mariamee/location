import { useEffect, useState, useContext } from "react";
import { UserContext } from "utils/contexts";

import jwt from "jwt-decode";

const useAuth = () => {
  const [auth, setAuth] = useState(false);
  const { user, setUser } = useContext(UserContext);
  const localData = localStorage.getItem("data");

  console.log("user context", user);
  useEffect(() => {
    try {
      const data = JSON.parse(localData);
      // if (!user) setUser(data);
      // const token =
      // "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Ik1hcmlhbWUgRWwgQWxhb3VpIiwicm9sZSI6ImNsaWVudCIsImlhdCI6MTUxNjIzOTAyMn0.dD5vFHUDDTo7JcXXbp9W-Twa2aR6dzd4kQpG8xu_C4w";
      // const user = jwt(data?.token);
      setAuth(data);
    } catch (error) {}
    // const user={name:"Mariame El Alaoui",role:"partner"};
    // setAuth(user);
  }, [localData]);

  return auth;
};

export default useAuth;
