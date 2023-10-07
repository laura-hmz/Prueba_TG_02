
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
  const { userData} = useContext(UserContext);
  const {setServices, services, setIsSearch} = useContext(CardServiceContext);

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getServices();
        setServices(data);
        setIsSearch(false);
        
      
      } catch (error) {
        console.error('Error al obtener los servicios:', error);
      }
    };
    
    fetchData();

   }, [userData, setServices, setIsSearch]);

  

  return (
    <div >
      {services? <CardService4  />: <h1>AYUDAME DIOS</h1>}
    </div>
  );
};

export default Explorar;
