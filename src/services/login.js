import { toast } from "react-toastify";
import http from "./http";

export const onConnect = async (email, password) => {
  try {
    const { data } = await http.post("/login", { email, password });
    console.log("data", data);
    if (data) localStorage.setItem("data", JSON.stringify(data));

    return data;
  } catch (error) {
    toast.error("Email ou mot de passe incorrect");
    return null;
  }
};
