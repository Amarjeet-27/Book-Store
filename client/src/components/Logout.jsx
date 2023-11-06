import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();
  const { logout } = useContext(AuthContext);
  const handleLogout = () => {
    logout()
      .then(() => {
        alert("Logout Successfully");
        navigate("/");
      })
      .catch((error) => {
        alert("Some error in Logout");
      });
  };
  return (
    <div className="h-screen bg-teal-100 flex items-center justify-center ">
      <button
        className="bg-red-700 px-8 py-2 text-white rounded"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default Logout;
