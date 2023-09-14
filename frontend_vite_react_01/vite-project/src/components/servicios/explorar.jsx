import  { useState, useEffect } from 'react';
import { getServices,deleteService,lastServicesAdded } from '../../api/servicesApi';
//import CardServices from './cardService';
//import CardService2 from './cardService2';
//import CardService3 from './cardService3';
import CardServiceOnly from './cardServiceOnly';


const Explorar = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    // Realizar una solicitud para obtener los servicios cuando el componente se monta
    const fetchData = async () => {
      try {
        const data = await getServices();
        setServices(data); 
      } catch (error) {
        console.error('Error al obtener los servicios:', error);
      }
    };

    fetchData();
  }, []);

    const handleDeleteService = async (serviceId) => {
    try {
      // Lógica para eliminar el servicio
      await deleteService(serviceId);
      // Actualiza el estado de servicios después de eliminar
      const updatedServices = services.filter((service) => service._id !== serviceId);
      setServices(updatedServices);
    } catch (error) {
      console.error('Error al eliminar el servicio:', error);
    }
  };

  return (
      
          services.map((service) => (
            <CardServiceOnly  service={{...service}} key={service._id}></CardServiceOnly>
    ))
)
};

export default Explorar;
