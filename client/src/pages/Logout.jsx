import React, { useContext, useState } from "react";
import { AuthContext } from "../Components/Context/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Logout = () => {
  const { logOut } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const from = location.state?.from?.pathname || "/";

  const handleLogout = () => {
    logOut().then(() => {
      toast.success("Login successful!");
      navigate(from, { replace: true });
    }).catch((err) => {
        setError(err.message);
        toast.error(`Login failed: ${err.message}`);
      });
  };

  return <div>Logout</div>;
};

export default Logout;
