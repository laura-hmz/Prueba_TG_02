import  { useState, useEffect, useContext} from 'react';
import { deleteService,listServicesIdUser } from '../../api/servicesApi';
//import ServicesList2 from '../../components/servicios/servicesList2';
import CardServiceModify from '../../components/servicios/cardServiceModify';
import { UserContext } from '../../contexts/userContext';


const UserServices = () => {
    const [services, setServices] = useState([]);
    const { userData } = useContext(UserContext);
    //const [nombre, setNombre] = useState('');

    useEffect(() => {
      // Realizar una solicitud para obtener los servicios cuando el componente se monta
      const fetchData = async () => {
        try {
          const data = await listServicesIdUser(userData._id);
          setServices(data); 
        } catch (error) {
          console.error('Error al obtener los servicios:', error);
        }
      };
  
      if(userData !== null){

        fetchData();
        //setNombre(userData.nombre)
      }

    }, [ userData ]);
  
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
      <>
        {/* 
        <h1>NOMBRE {nombre}</h1>
       {isAuthenticated ? (
        <>
          <h2>{userData ? '¡Hola!, ' + userData.nombre : 'Cargando...'}</h2>
        </>) :
        (
          <p>No estás autenticado</p>
        )}
        */}

        {/* Verifica si services es un arreglo antes de pasarlo a CardService3 */}
        {Array.isArray(services) && services.length > 0 ? (
        <CardServiceModify services={services} onDeleteService={handleDeleteService}></CardServiceModify>
        ) : (
        <p>No has registrado ningún servicio para ofrecer </p>
      )}
    </>
  )
  };

export default UserServices