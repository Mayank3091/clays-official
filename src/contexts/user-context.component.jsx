import React, { useState, useEffect } from 'react';
import {
  authStateChangedListener,
  createUserDocumentFromAuth,
} from '../utils/firebase.utils';

const UserContext = React.createContext({
  currentUser: null,
  setCurrentUser() {},
});

export const ContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = authStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserContext;
