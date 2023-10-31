import  { useState, useEffect, useContext} from 'react';
import { deleteService,listServicesIdUser } from '../../api/servicesApi';
import CardServiceModify from '../../components/servicios/cardServiceModify';
import { UserContext } from '../../contexts/userContext';
import FolderLoader from '../../components/loaders/notFoundLoaders/folderLoader';
import PageHeader from '../../components/headers/pageHeader';


const UserServices = () => {
    const [services, setServices] = useState([]);
    const { userData } = useContext(UserContext);
    const [isLoading, setIsLoading] = useState(true)
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
        finally {
          setIsLoading(false); // Indicador de carga: los datos han sido cargados
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
        <PageHeader title="Mis Servicios" />
        {isLoading ? (
          null
        ) : Array.isArray(services) && services.length > 0 ? (
          <CardServiceModify services={services} onDeleteService={handleDeleteService} />
        ) : (
          <FolderLoader />
        )}
      </>
    );
  };

export default UserServices