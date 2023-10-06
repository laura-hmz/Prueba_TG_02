import { createContext, useState, useEffect, useContext,useCallback } from 'react';
import PropTypes from 'prop-types';
import { UserContext } from './userContext';
import {getServicesById} from '../api/servicesApi';

export const CardServiceContext = createContext(null);

export const CardServiceProvider = ({ children }) => {
  const { userData } = useContext(UserContext);
  const [tipoServicio, setTipoServicio] = useState('');
  const [service, setService] = useState(null)
  const [userId, setUserId] = useState('');

  const fetchData = useCallback(async (id) => {
    try {
      const data = await getServicesById(id);
      setTipoServicio(data.tipo_servicio);
    } catch (error) {
      console.error('Error al obtener los servicios:', error);
    }
  }, []);

  // Efecto para actualizar id_usuario cuando userData cambie
  useEffect(() => {
    if (userData) {
      setUserId(userData._id);
    }
    
  }, [userData]);


  const CardServiceContextValue = {
    service,
    setService,
    fetchData,
    tipoServicio,
    setTipoServicio,
    userId
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
