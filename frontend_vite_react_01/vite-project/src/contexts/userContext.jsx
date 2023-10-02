import { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getUserByEmail, createUser } from '../api/usersApi.js';
import { useAuth0 } from "@auth0/auth0-react";
import { useCallback } from 'react';

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [userEmail, setUserEmail] = useState('');
  const [userData, setUserData] = useState(null);
  const { isAuthenticated, user, isLoading } = useAuth0();
  const [userExists, setUserExists] = useState(false);
const [paginaRegistro, setPaginaRegistro] = useState('1');

  const [userDataAux, setUserDataAux] = useState({
       
    correo: userEmail,
    nombre: '',
    sexo: '',
    carrera: '',
    semestre: '',
    ciudad_residencia: '',
    edad: '',
    estado: 1,
    puntuacion: 0,
    resultados_encuesta: [],

  });

  const getUserData = useCallback(async () => {
    try {
      if (isAuthenticated) {
        setUserEmail(user.email);
        const userDataFromDatabase = await getUserByEmail(user.email);
        if (userDataFromDatabase.message === undefined) {
          console.log('el usuario si existe en la base de datos')
          setUserExists(true);
          setUserData(userDataFromDatabase);

        } else if (userExists === false) {
            console.log('el usuario no existe en la base de datos')
            setUserExists(false);
        }
        
      }
    } catch (error) {
      console.error('Error al obtener los datos del usuario:', error);
    }
  }, [isAuthenticated, user, userExists]);

  const registerUser = async () => {
    try {
      console.log('registrando usuario');
      createUser(userDataAux);
      setUserData(userDataAux);
      userExists(true);
    } catch (error) {
      console.error('Error al registrarbusuario:', error);
    }
  }

  useEffect(() => {
    // ...

    getUserData();
  }, [isAuthenticated, user, getUserData]);

  const userContextValue = {
    userEmail,
    userData,
    setUserData, 
    setUserEmail, 
    isLoading,
    isAuthenticated,
    user,
    userExists,
    userDataAux,
    setUserDataAux,
    registerUser,
    paginaRegistro,
    setPaginaRegistro
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


