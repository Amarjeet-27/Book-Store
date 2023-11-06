import { useContext } from "react";
import AuthProvider from "../context/AuthProvider";
import { useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthProvider);
  const location = useLocation();

  // if(loading){
  //     return
  // }
  return <div>PrivateRoute</div>;
};

export default PrivateRoute;
