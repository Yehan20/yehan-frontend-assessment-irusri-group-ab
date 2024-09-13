import React, { useEffect } from 'react';
import {  Navigate } from 'react-router-dom';
import { useGlobalContext } from '../context/auth-context';


const PrivateRoute = ({ children}) => {
  const {user,loading} = useGlobalContext();



  if(loading && !user) {
     return <>.....</>
  }
  

  return (
    <>
       
       {user ? children  : <Navigate to="/login" />}
        
     </>
    
    
  );
};

export default PrivateRoute;
