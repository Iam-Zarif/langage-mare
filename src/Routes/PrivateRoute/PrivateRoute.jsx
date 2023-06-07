/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Navigate, useLocation } from "react-router-dom";
import Auth from "../../Hooks/Auth";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import 'react-loading-skeleton/dist/skeleton.css'
const PrivateRoute = ({children}) => {
    const location = useLocation();
    const {user,loading} = Auth();
    
if(loading){
  return <SkeletonTheme baseColor="#202020" highlightColor="#444">
    <p>
      <Skeleton count={20} />
    </p>
  </SkeletonTheme>

}
      
    if(user){
        return children
    }
    return <Navigate to="/login" state={{from:location}} replace> </Navigate>
};

export default PrivateRoute;