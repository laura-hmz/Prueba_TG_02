import { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getUserByEmail } from '../api/usersApi.js';
import { useAuth0 } from "@auth0/auth0-react";
import { useCallback } from 'react';

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [userEmail, setUserEmail] = useState('');
  const [userData, setUserData] = useState(null);
  const { isAuthenticated, user, isLoading } = useAuth0();

  const getUserData = useCallback(async () => {
    try {
      if (isAuthenticated) {
        setUserEmail(user.email);

        // Obtén los datos del usuario desde la base de datos utilizando el correo electrónico
        const userDataFromDatabase = await getUserByEmail(user.email);
        setUserData(userDataFromDatabase);
        
        console.log("userData", userDataFromDatabase);
      }
    } catch (error) {
      console.error('Error al obtener los datos del usuario:', error);
    }
  }, [isAuthenticated, user]);

  useEffect(() => {
    // ...

    getUserData();
  }, [isAuthenticated, user, getUserData]);

  const userContextValue = {
    userEmail,
    userData, 
    setUserEmail, 
    isLoading,
    isAuthenticated,
    user
  };

  return (
    <UserContext.Provider 
      value={userContextValue}>
      {children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.node
};


