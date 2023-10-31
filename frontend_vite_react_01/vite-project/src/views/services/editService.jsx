import { useEffect,useContext,useState } from 'react';
import { useParams } from 'react-router-dom';
import TransportServiceForms3 from "../../components/servicios/forms/trasnportServiceForms3"
import AcademyServiceForm from "../../components/servicios/forms/academyServiceForm"
import { UserContext } from '../../contexts/userContext';
import { ServiceContext } from '../../contexts/serviceContext';
import RoomServiceForm2 from '../../components/servicios/forms/roomServiceForm2';
import OtherServiceForm from '../../components/servicios/forms/otherServiceForm';
import {getServicesById} from '../../api/servicesApi';
import Advertencia404 from '../../components/avisosPersonalizados/advertenciaPersonalizada404';
const EdithService = () => {
  //console.log('EdithService');
  const { id } = useParams();
  const {setCurrentOption, tipoServicio, setIdServiceForImg,
    getImages,setServiceData, setTipoServicio} = useContext(ServiceContext);
  //const [tipoServicioAux, setTipoServicioAux] = useState('');
  const [userHasPermissionToEditService, setUserHasPermissionToEditService] = useState(false);
  const { userData } = useContext(UserContext);
  const [servicioExiste, setServicioExiste] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  

  useEffect(() => {
    // fetchData(id);
    // setIdServiceForImg(id);
    // getImages(id);
    // setCurrentOption('show');
    //setTipoServicioAux(tipoServicioAux);

     const fetchData2 = async () => {
      try {
          
        const data = await getServicesById(id);

        if(data === undefined || data === null){
          setServicioExiste(false);
           
        } 
        else if (data !== undefined && data !== null && data.id_usuario === userData._id) {
          setServicioExiste(true);
          setUserHasPermissionToEditService(true);
          setTipoServicio(data.tipo_servicio);
          setServiceData(data);
          setIdServiceForImg(id);
          getImages(id);
          setCurrentOption('show');

        }
        
       } catch (error) {
        console.error('Error al obtener los servicios:', error);
       } finally {
        setIsLoading(false); // Indicador de carga: los datos han sido cargados
      }
       
     };
    
     fetchData2();

  }, [ getImages, id, setCurrentOption,setIdServiceForImg, setServiceData, setTipoServicio, userData._id]);
  

  return (
    <>
      {isLoading ? (
        // Indicador de carga mientras se obtienen los datos
        null
      ) : servicioExiste && userHasPermissionToEditService ? (
        tipoServicio === 'Servicio de transporte' ? (
          <TransportServiceForms3 />
        ) : tipoServicio === 'Asesorías Académicas' ? (
          <AcademyServiceForm />
        ) : tipoServicio === 'Servicio de habitaciones' ? (
          <RoomServiceForm2 />
        ) : (
          <OtherServiceForm />
        )
      ) : (
        <Advertencia404 mensaje={'no encontramos el servicio que deseas editar'} />
      )}
    </>
  );
};

export default EdithService;
