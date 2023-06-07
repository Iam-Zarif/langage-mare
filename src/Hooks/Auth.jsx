import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";


const Auth = () => {
   const auths = useContext(AuthContext);
   return auths;
};

export default Auth;