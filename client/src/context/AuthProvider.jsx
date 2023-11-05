import { Children, createContext, useState } from "react";
import app from "../firebase/firebase.config";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export const authContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ Children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = () => {
    // setLoading(true);
    // return createUserWithEmailAndPassword(auth, e.email, e.password);
    console.log("Hue");
  };
  const authInfo = {
    createUser,
  };
  return (
    <authContext.Provider value={authInfo}> {Children}</authContext.Provider>
  );
};

export default AuthProvider;
