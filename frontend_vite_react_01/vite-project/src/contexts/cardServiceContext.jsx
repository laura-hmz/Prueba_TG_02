import { createContext, useState, useEffect, useContext,useCallback } from 'react';
import PropTypes from 'prop-types';
import { UserContext } from './userContext';
import {getUserId} from '../api/usersApi';
import {getSavedServiceList} from '../api/savedServicesApi';
//import {getServices} from '../api/servicesApi';

export const CardServiceContext = createContext(null);

export const CardServiceProvider = ({ children }) => {
  const { userData } = useContext(UserContext);

  //const [userId, setUserId] = useState('');
  const [services, setServices] = useState([]);
  const [userDetails, setUserDetails] = useState({});
  const [isSearch, setIsSearch] = useState(false);
  
  const [savedServiceIds, setSavedServiceIds] = useState(new Set());

  //const [savedServices, setSavedServices] = useState([]);



  const getSavedServices = useCallback(async () => {
    try {
      const savedServicesIdList = await getSavedServiceList(userData._id);
      setSavedServiceIds(new Set (savedServicesIdList));

      // Mueve el console.log aquí para acceder a serviceSaved después de que se haya establecido
      console.log('Los servicios guardados son', savedServicesIdList);
    } catch (error) {
      console.error('Error al obtener los servicios:', error);
    }
  }, [userData ]);
  
  useEffect(() => {
    if (userData) {
      getSavedServices();
      
      console.log(userData._id, 'MUAK MU MUAK');
    }
  }, [userData, getSavedServices]);
  

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

    //getSavedServices,
    userDetails,
    setUserDetails,
    services,
    setServices,
    savedServiceIds,
    setSavedServiceIds,
    getSavedServices,
    isSearch,
    setIsSearch

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
