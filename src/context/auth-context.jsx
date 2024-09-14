import bcrypt from "bcryptjs/dist/bcrypt";
import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [alert, setAlert] = useState("");
  const [loggedOut, setLoggedOut] = useState(false);
  const [loading, setLoading] = useState(true);
 
  // used to updated local storage as an helper function
  const updateLocalSotrage = (user) => {
    localStorage.setItem(
      "user",
      JSON.stringify(user),
    );
  }
  
  // used to hash password for proteciton
  const hashPassword = (password) => {
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);
    return hashedPassword;
  }
 
  // authenticates user
  const login = (userData) => {
    setAlert("");

    // check if u have user is there
    if (localStorage.getItem("user")) {
      // check if password match
      let password = userData.password;
      let matchingUser = JSON.parse(localStorage.getItem("user"));
 

      if (bcrypt.compareSync(password, matchingUser.password)) {
        setUser({ ...matchingUser, logged: true });

        updateLocalSotrage({ ...matchingUser, logged: true })
        setLoggedOut(false);
        return;
      } 

      setAlert({ type: "error", message: "Wrong Password" });
      return;
    }
    setAlert({ type: "error", message: "Wrong Email or Password" });
  };

  // checks local storage to get user
  const getUser = () => {
    if (localStorage.getItem("user")) {
      // check if password match
      setLoading(false);

      let loggedUser = JSON.parse(localStorage.getItem("user"));
      if (loggedUser.logged) {
        setUser(loggedUser);
      }

      setLoggedOut(false);
    }
    setLoading(false);
  };
  
  // 
  const register = (user) => {

    const hashedPassword = hashPassword(user.password); // make this hashed
    const { confirmPassword, ...rest } = user; // remove confirm password
    const modifiedUser = { ...rest, password: hashedPassword, logged: true, todos: [] };
    updateLocalSotrage(modifiedUser)
    setUser(modifiedUser);
    setLoggedOut(false);
  };
  
  // updates the logout and updates the local storage i considered having multiple users so implemented a loging property in object
  const logout = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    setUser("");
    updateLocalSotrage({ ...user, logged: false });
    setLoggedOut(true);
  };
  
  // check user when app loads
  useEffect(() => {
    getUser();
  }, []);
  
  // reponsible for manging logout messages
  useEffect(()=>{
    if(loggedOut) setLoggedOut(false)
  },[loggedOut])

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        register,
        alert,
        setAlert,
        loading,
        loggedOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AuthContext); // custom funciton so we dont need to call contexts agian
};

export { useGlobalContext, AuthContext };

export default AuthProvider;
