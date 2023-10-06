import { createContext, useState, useEffect, useContext,useCallback } from 'react';
import PropTypes from 'prop-types';
import { UserContext } from './userContext';
import {getUserId} from '../api/usersApi';

export const CardServiceContext = createContext(null);

export const CardServiceProvider = ({ children }) => {
  const { userData } = useContext(UserContext);
  const [mostrarGuardados, setMostrarGuardados] = useState(false);

  const [userId, setUserId] = useState('');
  const [services, setServices] = useState([]);
  const [userDetails, setUserDetails] = useState({});
  const [savedServiceIds, setSavedServiceIds] = useState(new Set());

  const fetchData = useCallback(async () => {
    try {
      //const data = await getServicesById(id);
      //setTipoServicio(data.tipo_servicio);
    } catch (error) {
      console.error('Error al obtener los servicios:', error);
    }
  }, []);

  // Efecto para actualizar id_usuario cuando userData cambie
  useEffect(() => {
    if (userData) {
      setUserId(userData._id);

    //   if (mostrarGuardados){

    //   }
    }
  }, [userData]);

  useEffect(() => {
    // Función para obtener los datos de un usuario por su ID
    const getUser = async (id) => {
      try {
        const userData = await getUserId(id);
        return userData; // Devuelve todos los datos del usuario
      } catch (error) {
        console.error('Error al obtener los datos del usuario:', error);
        return null; // Devuelve null en caso de error
      }
    };
  
    // Verifica si services es un arreglo antes de intentar iterarlo
    if (Array.isArray(services)) {
      // Obtiene y almacena los datos de usuario para cada servicio
      const fetchUserDetails = async () => {
        const userDetails = {};
        for (const service of services) {
          const userData = await getUser(service.id_usuario);
          userDetails[service._id] = userData;
        }
        setUserDetails(userDetails); // Almacena los detalles del usuario
      };
  
      fetchUserDetails(); // Llama a la función para obtener los detalles del usuario
    }
  }, [services, setUserDetails]);

  const CardServiceContextValue = {

    fetchData,
    userDetails,
    setUserDetails,
    userId,
    services,
    setServices,
    savedServiceIds,
    setSavedServiceIds,
    mostrarGuardados,
    setMostrarGuardados
  };

  return (
    <CardServiceContext.Provider value={CardServiceContextValue}>
      {children}
    </CardServiceContext.Provider>
  );
};

CardServiceProvider.propTypes = {
  children: PropTypes.node,
};
