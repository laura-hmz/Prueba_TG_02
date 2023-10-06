
import { getServices,deleteService,lastServicesAdded,listServicesIdUser, getServicesById } from '../../api/servicesApi';
//import {busquedaMatchmaking} from '../../api/servicesApi';
//import CardService2 from './cardService2';
//import CardService3 from './cardService3';
//import CardServiceOnly from './cardServiceOnly';
//import SearchForm from './forms/searchForm';
//import ServicesList1 from './servicesList1';
//import RegisterForm from './forms/registerForm';
import { UserContext } from '../../contexts/userContext';
//import TransportServiceForm3 from './forms/trasnportServiceForms3';
import  {  useEffect, useContext, useState } from 'react';
import { ServiceContext } from '../../contexts/serviceContext';
import { CardServiceContext } from '../../contexts/cardServiceContext';
import CardService4 from './cards/cardService4';
//import Loader2 from '../../components/loaders/loader2'

const Explorar = () => {
  //const { userData, userEmail, isAuthenticated } = useContext(UserContext);
  //const [idUser, setIdUser] = useState([]);
  //const id = '6518004f9d0c36e7de53935c';

  //const {fetchData,setCurrentOption } = useContext(ServiceContext);
  //const [services, setServices] = useState([]);
  const { userData} = useContext(UserContext);
  const {setServices, services, setMostrarGuardados} = useContext(CardServiceContext);

  
  useEffect(() => {
    // Realizar una solicitud para obtener los servicios cuando el componente se monta
    const fetchData = async () => {
      try {
        const data = await getServices();
        setServices(data);
        setMostrarGuardados(false);
      
      } catch (error) {
        console.error('Error al obtener los servicios:', error);
      }
    };
    
    fetchData();
  }, [userData, setServices, setMostrarGuardados]);
  

  return (
    <div >
     <CardService4  />
    </div>
  );
};

export default Explorar;
