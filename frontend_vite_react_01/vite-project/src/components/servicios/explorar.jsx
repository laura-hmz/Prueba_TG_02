
//import { getServices,deleteService,lastServicesAdded,listServicesIdUser, getServicesById } from '../../api/servicesApi';
import {getUserId} from '../../api/usersApi';
import {listServicesIdUser} from '../../api/servicesApi';
//import CardService2 from './cardService2';
//import CardService3 from './cardService3';
//import CardServiceOnly from './cardServiceOnly';
//import SearchForm from './forms/searchForm';
//import ServicesList1 from './servicesList1';
//import RegisterForm from './forms/registerForm';
//import { UserContext } from '../../contexts/userContext';
//import TransportServiceForm3 from './forms/trasnportServiceForms3';
import  {  useEffect, useContext } from 'react';
//import { ServiceContext } from '../../contexts/serviceContext';
import { CardServiceContext } from '../../contexts/cardServiceContext';
//import { ServiceContext } from '../../contexts/serviceContext';
//import CardService4 from './cards/cardService4';
//import Loader2 from '../../components/loaders/loader2'
//import EncuestaForm from "../encuesta/encuestaForm";
import HomeAnimation from '../loaders/animation/homeAnimation';
//import PreguntasForm from "../encuesta/preguntas";
//import SubirImg from '../imageCloudinary/subirImg';
//import ImageGallery from '../imageCloudinary/imageGalery';
//import CardUser from '../usuarios/cardUser/cardUser';
//import PageHeaderHome from '../headers/pageHerderHome';
//import CardService4 from './cards/cardService4';
//import CardServicesDetailsUser from './cards/cardServicesDetailsUser';
const Explorar = () => {
  //const { userData} = useContext(UserContext);
  //const {setServices, services, setIsSearch} = useContext(CardServiceContext);
  //const {images, setImages, getImages } = useContext(ServiceContext);
  //const [ideService, setIdeService] = useState('');
  const {setUserDataOnlyService, setServicesUserDetails} = useContext(CardServiceContext);
  const id= '64e2ff80fed5d5347f0c5b24'

  useEffect(() => {
    // Realizar una solicitud para obtener los servicios cuando el componente se monta
    const fetchData = async () => {
      try {
      
        const userId = await getUserId(id);
        setUserDataOnlyService(userId);
        const data = await listServicesIdUser(id);
        setServicesUserDetails(data);

      } catch (error) {
        console.error('Error al obtener los servicios:', error);
      }
    };

    fetchData();
  }, [ setUserDataOnlyService, setServicesUserDetails ]);

  return (
    <>
      <HomeAnimation />
    </>
    
  );
 
};

export default Explorar;
