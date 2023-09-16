import  { useState, useEffect } from 'react';
import {lastServicesAdded, getServices } from '../api/servicesApi';
//import ServicesList1 from '../components/servicios/servicesList1';
import CardService3 from '../components/servicios/cardService3';

const Home = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
      // Realizar una solicitud para obtener los servicios cuando el componente se monta
      const fetchData = async () => {
        try {
          const data = await getServices();
          console.log(data);
          setServices(data); 
        } catch (error) {
          console.error('Error al obtener los servicios:', error);
        }
      };
  
      fetchData();
    }, []);
  
    return (
      <CardService3 services={services} />
  ) 
}

export default Home