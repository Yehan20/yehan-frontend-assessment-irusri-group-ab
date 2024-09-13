
// src/context/UserContext.js
import React, { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(""); // Replace with actual user state
  const [alert, setAlert] = useState('')
  const [loggedOut,setLoggedOut] = useState(false);
  const [loading,setLoading] = useState(true);

  // IF Browser closes we clear the session of 

  const login = (userData) => {
    setAlert('');

    // check if u have user is there 
    if (localStorage.getItem('user')) {
      // check if password match
      let password = userData.password;
      let matchingUser = JSON.parse(localStorage.getItem('user'))
      console.log(matchingUser.password, password)
      if (password === matchingUser.password) {
        setUser({...matchingUser,logged:true})
        localStorage.setItem('user', JSON.stringify({...matchingUser,logged:true}))

        setLoggedOut(false)
        return
      }
      setAlert({ type: 'error', message: 'Wrong Password' })
      return;

    }
    setAlert({ type: 'error', message: 'Wrong Email or Password' })

  };



  const getUser = () => {
 
    if (localStorage.getItem('user')) {
      // check if password match
      setLoading(false);
      
      let loggedUser = JSON.parse(localStorage.getItem('user'))
      if(loggedUser.logged){
        setUser(loggedUser);
      }
  
      setLoggedOut(false)
     
    }
    setLoading(false)
  

  }

  const register = (user) => {

    const modifiedUser = { ...user, logged: true, todos: [] }
    localStorage.setItem('user', JSON.stringify(modifiedUser))
    sessionStorage.setItem('user', JSON.stringify(modifiedUser))
    setUser(user)
    setLoggedOut(false)
  }

  const logout = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    console.log(user)
    setUser('')
    localStorage.setItem('user',JSON.stringify({...user,logged:false}))
    setLoggedOut(true)

  };

  useEffect(() => {
    getUser()
  }, [])

  return (
    <AuthContext.Provider value={{ user, login, logout, register, alert, setAlert,loading,logout,loggedOut }}>
      {children}
    </AuthContext.Provider>
  );
};


const useGlobalContext = () => {
  return useContext(AuthContext)
}

export { useGlobalContext, AuthContext }

export default AuthProvider