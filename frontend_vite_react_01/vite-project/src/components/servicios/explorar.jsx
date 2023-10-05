
//import { getServices,deleteService,lastServicesAdded,listServicesIdUser, getServicesById } from '../../api/servicesApi';
//import {busquedaMatchmaking} from '../../api/servicesApi';
//import CardService2 from './cardService2';
//import CardService3 from './cardService3';
//import CardServiceOnly from './cardServiceOnly';
//import SearchForm from './forms/searchForm';
//import ServicesList1 from './servicesList1';
//import RegisterForm from './forms/registerForm';
//import { UserContext } from '../../contexts/userContext';
import TransportServiceForm3 from './forms/trasnportServiceForms3';
import  {  useEffect, useContext } from 'react';
import { ServiceContext } from '../../contexts/serviceContext';
//import Loader2 from '../../components/loaders/loader2'
import CamposBase from './servicesCampos/estadoCampo';

const Explorar = () => {
  //const { userData, userEmail, isAuthenticated } = useContext(UserContext);
  //const [idUser, setIdUser] = useState([]);
  const id = '6518004f9d0c36e7de53935c';

  const {fetchData,setCurrentOption } = useContext(ServiceContext);
  
  useEffect(() => {
    //fetchData(id);
    setCurrentOption('register');
    console.log('me estoy actualzando')

  }, [fetchData, setCurrentOption]);
  

  return (
    <div >
    <TransportServiceForm3 /> 
    
  </div>
  );
};

export default Explorar;
