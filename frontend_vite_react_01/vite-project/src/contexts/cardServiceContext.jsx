import { createContext, useState, useEffect, useContext,useCallback } from 'react';
import PropTypes from 'prop-types';
import { UserContext } from './userContext';
import {getUserId} from '../api/usersApi';
import {getSavedServiceList,deleteServiceSaved2,createServiceSaved} from '../api/savedServicesApi';
//import {getServices} from '../api/servicesApi';

export const CardServiceContext = createContext(null);

export const CardServiceProvider = ({ children }) => {
  const { userData } = useContext(UserContext);

  //const [userId, setUserId] = useState('');
  const [services, setServices] = useState([]);
  const [userDetails, setUserDetails] = useState({});
  const [isSearch, setIsSearch] = useState(false);
  const [savedServiceIds, setSavedServiceIds] = useState(new Set());
  const [onlyService, setOnlyService] = useState({});
  const [userDataOnlyService, setUserDataOnlyService] = useState({});
  const [buttonClick, setButtonClick] = useState(false);
  const [servicesUserDetails, setServicesUserDetails] = useState([]);

  const getSavedServices = useCallback(async () => {
    try {
      const savedServicesIdList = await getSavedServiceList(userData._id);
      setSavedServiceIds(new Set (savedServicesIdList));

      
      //console.log('Los servicios guardados son', savedServicesIdList);
    } catch (error) {
      console.error('Error al obtener los servicios:', error);
    }
  }, [userData ]);
  
  useEffect(() => {
    if (userData) {
      getSavedServices();
 
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

  const handleClick = (serviceId) => {
    // Verifica si el servicio ya está guardado
    if (savedServiceIds.has(serviceId)) {
      // Si ya está guardado, elimínalo del conjunto
      savedServiceIds.delete(serviceId);
      deleteServiceSaved2(userData._id, serviceId);
      setButtonClick(false);
      //console.log('user id', userData._id);
      //console.log('service id', serviceId);
      //console.log('buton click', buttonClick);

    } else {
      // Si no está guardado, agrégalo al conjunto
      savedServiceIds.add(serviceId);
      const savedServiceData = {
        id_usuario: userData._id,
        id_servicio: serviceId,
      };
      createServiceSaved(savedServiceData);
      setButtonClick(true);
      //console.log('lo que se crea', savedServiceIds);
    }
  }

  const CardServiceContextValue = {
    userDetails,
    setUserDetails,
    services,
    setServices,
    savedServiceIds,
    setSavedServiceIds,
    getSavedServices,
    isSearch,
    setIsSearch,
    handleClick, 
    onlyService,
    setOnlyService,
    userDataOnlyService,
    setUserDataOnlyService,
    buttonClick, 
    setButtonClick,
    servicesUserDetails,
    setServicesUserDetails
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
