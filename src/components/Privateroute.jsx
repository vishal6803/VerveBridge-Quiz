import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../contexts/userContext";
function Privateroute({ children }) {
  const [user, setUser] = useState(null);
  const { isLogin } = useContext(UserContext);
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser);
  }, []);
  return isLogin ? { children } : "User not loggedin";
}

export default Privateroute;
