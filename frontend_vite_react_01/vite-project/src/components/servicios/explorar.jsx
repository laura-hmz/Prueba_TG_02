import  { useState, useEffect } from 'react';
import { getServicesById } from '../../api/servicesApi';
import ServicesList1 from './servicesList1';
import CardService from './cardService';

const Explorar = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    // Realizar una solicitud para obtener los servicios cuando el componente se monta
    const fetchData = async () => {
      try {
        const data = await lastServicesAdded();
        console.log(data);
        setServices(data); 
      } catch (error) {
        console.error('Error al obtener los servicios:', error);
      }
    };

    fetchData();
  }, []);

  return (
  <CardService></CardService>
)
};

export default Explorar;
