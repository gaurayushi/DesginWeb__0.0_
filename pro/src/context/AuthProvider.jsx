import React, { useEffect, useState, createContext } from 'react';
import { getLocalStorage, setLocalStorage } from '../utils/localStorage';

export const AuthContext = createContext(); 

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null); 

  useEffect(() => {
    setLocalStorage();
    const { employees, admin } = getLocalStorage();
    if (employees && admin) {
      setUserData({ employees, admin });
    }

    const storedUser = localStorage.getItem("loggedInUser");
    if (storedUser) {
      setUserData(JSON.parse(storedUser)); // ✅ Ensure logged-in user data is set
    }
  }, []);

  return (
    <AuthContext.Provider value={{ userData, setUserData }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
