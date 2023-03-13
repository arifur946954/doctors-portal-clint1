import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/Authprovider';

const PrivateRoute = ({ children }) => {
  const {loading,user}=  useContext(AuthContext);
  const location = useLocation();
  if(loading){
    return <div className="radial-progress" style={{"value":100}}>100%</div>
  }
  if(user){
    return children;
  }
  
    return <Navigate to="/login" state={{ from: location }} replace />;
  
  
    // return (
    //     <div>
            
    //     </div>
    // );
};

export default PrivateRoute;