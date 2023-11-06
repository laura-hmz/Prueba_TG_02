import  { useState, useEffect, useContext,useCallback} from 'react';
import { deleteService,listServicesIdUser } from '../../api/servicesApi';
import CardServiceModify from '../../components/servicios/cards/cardServiceModify';
import { UserContext } from '../../contexts/userContext';
import FolderLoader from '../../components/loaders/notFoundLoaders/folderLoader';
import PageHeader from '../../components/headers/pageHeader';

const UserServices = () => {
    const [services, setServices] = useState([]);
    const { userData } = useContext(UserContext);
    const [isLoading, setIsLoading] = useState(true)
    //const [nombre, setNombre] = useState('');

    const fetchData = useCallback(async () => {
      setIsLoading(true);
      try {
        const data = await listServicesIdUser(userData._id);
        setServices(data); 
      } catch (error) {
        console.error('Error al obtener los servicios:', error);
      }
      finally {
        setIsLoading(false); // Indicador de carga: los datos han sido cargados
      }
    }, [ userData._id]);
  

    useEffect(() => {
      if(userData !== null){
        fetchData();
      }
    }, [ userData, fetchData]);
  
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
        <PageHeader title="Mis Servicios" />
        {isLoading ? (
          null
        ) : Array.isArray(services) && services.length > 0 ? (
          <CardServiceModify services={services} onDeleteService={handleDeleteService} fetchData={fetchData}/>
        ) : (
          <FolderLoader />
        )}
      </>
    );
  };

export default UserServices