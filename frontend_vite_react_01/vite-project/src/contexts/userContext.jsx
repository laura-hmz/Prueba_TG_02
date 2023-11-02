import { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getUserByEmail, createUser, updateUser } from '../api/usersApi.js';
import { useAuth0 } from "@auth0/auth0-react";
import { useCallback } from 'react';
export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [userEmail, setUserEmail] = useState('');
  const [userData, setUserData] = useState(null);
  const { isAuthenticated, user, isLoading } = useAuth0();
  const [isLoadingUser, setIsLoadingUser] = useState(false);
  const [userExists, setUserExists] = useState(false);
  const [paginaRegistro, setPaginaRegistro] = useState('1');
  const [currentOption, setCurrentOption] = useState('show');
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
    resultados_encuesta_habitaciones: [],
    resultados_encuesta_asesorias: [],
    resultados_encuesta_transporte: [],
    telefono: '',

  });

  const getUserData = useCallback(async () => {
    try {
      if (isAuthenticated) {
        setUserEmail(user.email);
        const userDataFromDatabase = await getUserByEmail(user.email);
        //setIsLoadingUser(false);
        if (userDataFromDatabase.message === undefined) {
          //console.log('el usuario si existe en la base de datos')
          setUserData(userDataFromDatabase);
          setUserExists(true);
          setIsLoadingUser(false);
          //console.log('aquii londing user', isLoadingUser);

        } else if (userExists === false) {
          //console.log('el usuario no existe en la base de datos')
          setUserExists(false);
          setIsLoadingUser(false);
        }
        
      }
    } catch (error) {
      console.error('Error al obtener los datos del usuario:', error);
    }
  }, [isAuthenticated, user, userExists]);

  const registerUser = async () => {
    try {
      //console.log('registrando usuario');
      createUser(userDataAux);
      setUserExists(true);
      getUserData();
     
    } catch (error) {
      console.error('Error al registrarbusuario:', error);
    }
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
  
      setUserDataAux((prevUserData) => ({
        ...prevUserData,
        [name]: value,
      }));
    //}
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //console.log('Esto es lo que se va a guardar',userDataAux);
    userDataAux.correo=userEmail;
    setUserData(userDataAux);
    await updateUser(userDataAux);
    setCurrentOption('show');
    //console.log('currrentOption',currentOption);
  }

  useEffect(() => {
    // ...
    setIsLoadingUser(true);
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
    setPaginaRegistro,
    handleChange,
    handleSubmit,
    currentOption,
    setCurrentOption,
    isLoadingUser
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


