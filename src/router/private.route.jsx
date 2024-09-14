import React from 'react';
import {  Navigate } from 'react-router-dom';
import { useGlobalContext } from '../context/auth-context';

// Protecting the List route 

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
