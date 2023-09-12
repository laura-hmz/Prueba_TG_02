import  { useState, useEffect } from 'react';
import { getServices,deleteService } from '../../api/servicesApi';
import ServicesList2 from './servicesList2';


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
    <ServicesList2 services={services} onDeleteService={handleDeleteService}></ServicesList2>
)
};

export default Explorar;
