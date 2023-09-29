import { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getUserByEmail } from '../api/usersApi.js';

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [userEmail, setUserEmail] = useState('');
  const [userData, setUserData] = useState(null);

  const getUserData = async () => {
    try {
      const userData = await getUserByEmail(userEmail);
      setUserData(userData);
    } catch (error) {
      console.error('Error al obtener los datos del usuario:', error);
    }
  };

  useEffect(() => {
    if (userEmail) {
      getUserData();
    }
  }, [userEmail]);

  return (
    <UserContext.Provider 
        value={[userEmail, setUserEmail]}>
      {children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.node
};


