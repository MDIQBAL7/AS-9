import React, { use } from 'react';
import { AuthContext } from './AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {
    const {user} = use(AuthContext);
    const location = useLocation();
   
    if(user){
        return children;
    }
    else{
        return <Navigate state={location?.pathname} to={'/login'}></Navigate>
    }
   
};

export default PrivateRoute;