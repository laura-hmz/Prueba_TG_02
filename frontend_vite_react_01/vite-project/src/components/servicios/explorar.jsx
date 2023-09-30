import  { useState, useEffect } from 'react';
import { getServices,deleteService,lastServicesAdded,listServicesIdUser } from '../../api/servicesApi';
import {busquedaMatchmaking} from '../../api/servicesApi';
//import CardService2 from './cardService2';
import CardServiceModify from './cardServiceModify';
//import CardServiceOnly from './cardServiceOnly';
import TransportServiceForm2 from './forms/transportServiceForm2';
//import SearchForm from './forms/searchForm';
//import ServicesList1 from './servicesList1';
import RegisterForm from './forms/registerForm';
import { UserContext } from '../../contexts/userContext';
import { useContext } from 'react';


const Explorar = () => {
  const [services, setServices] = useState([]);
  // intento para obtener los serviciosmatchmaking
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  
  const { userData, userEmail, isAuthenticated } = useContext(UserContext);

  const handleSearch = async (searchParams) => {
    setIsLoading(true);
  
    try {
      const { diaSemana, horaBusquedaInicio, horaBusquedaFinal, estado, nombre,
        tipo_servicio, nombre_caracteristica, descripcion_caracteristica, area_0,
        tipo_habitacion_1, tipo_vehiculo_2, area_otro_servicio_3,id_cliente } = searchParams;
  
      // Llama a tu función de búsqueda en el backend
      const results = await busquedaMatchmaking({
        diaSemana,
        horaBusquedaInicio,
        horaBusquedaFinal,
        estado,
        nombre,
        tipo_servicio,
        nombre_caracteristica,
        descripcion_caracteristica,
        area_0,
        tipo_habitacion_1,
        tipo_vehiculo_2,
        area_otro_servicio_3,
        id_cliente
      });
      console.log('Estoy afuera');
      console.log(results);
  
      // Actualiza los resultados y el estado de carga
      setSearchResults(results);
      setIsLoading(false);
    } catch (error) {
      // Maneja cualquier error que pueda ocurrir durante la búsqueda
      console.error('Error en la búsqueda:', error);
      setIsLoading(false);
    }
  };
  
//////////////HAsta acá

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
    }

  }, [userData]);

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
      <h1>Home {userEmail}</h1>
  
      {/* Verifica si services es un arreglo antes de pasarlo a CardService3 */}
      {Array.isArray(services) && services.length > 0 ? (
        <CardServiceModify services={services} onDeleteService={handleDeleteService}></CardServiceModify>
      ) : (
        <p>No has registrado ningún servicio para ofrecer </p>
      )}
    </>
  );
};

export default Explorar;
