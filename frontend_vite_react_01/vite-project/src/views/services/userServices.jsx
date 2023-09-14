import  { useState, useEffect } from 'react';
import { getServices,deleteService } from '../../api/servicesApi';
import ServicesList2 from '../../components/servicios/servicesList2';
const UserServices = () => {
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
  
///ME falta hacer la consulta con el id del usuario para traer sus servicios, pero lo más importante
//El fomulario para editar y crear un nuevo servicio, en ese caso en esta vista poner un boton para agregar
//Buscar un componente para eso MUAK
export default UserServices