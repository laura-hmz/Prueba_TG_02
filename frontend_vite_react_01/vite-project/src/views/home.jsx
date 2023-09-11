import  { useState, useEffect } from 'react';
import {lastServicesAdded } from '../api/servicesApi';
import ServicesList1 from '../components/servicios/servicesList1';

const Home = () => {
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
      <ServicesList1 services={services} />
  ) 
}

export default Home