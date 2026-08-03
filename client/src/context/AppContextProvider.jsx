import React from 'react'
import { useState } from "react";
import { AppContext } from './context';

export { AppContext };

const AppContextProvider = (props) => {
  const [user, setUser] = useState(null);
  const [showLogin, setShowLogin] = useState(false);

  const value = {
    user,
    setUser,
    showLogin,
    setShowLogin
  };

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;