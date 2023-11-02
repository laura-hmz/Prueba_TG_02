import { useEffect,useContext,useState } from 'react';
import { useParams } from 'react-router-dom';
import { getServicesById } from '../../api/servicesApi';
import { getUserId } from '../../api/usersApi';
import { CardServiceContext } from "../../contexts/cardServiceContext";
import { ServiceContext } from '../../contexts/serviceContext';
import CardServiceOnly from '../../components/servicios/cardServiceOnly';
import Advertencia404 from '../../components/avisosPersonalizados/advertenciaPersonalizada404';
import BackButton from '../../components/botoneNavegacion/backButton';

const ServiceDetails = () => {
  const { id } = useParams();
  const {setOnlyService,setUserDataOnlyService,setButtonClick,savedServiceIds} = useContext(CardServiceContext);
  const {getImages} = useContext(ServiceContext);
  const [servicioExiste, setServicioExiste] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Realizar una solicitud para obtener los servicios cuando el componente se monta
    const fetchData = async () => {
      try {
        const data = await getServicesById(id);
        if(data === undefined || data === null){
          setServicioExiste(false);
           
        } 
        else if (data !== undefined && data !== null) {
          setServicioExiste(true);
          setOnlyService(data);
          const userId = await getUserId(data.id_usuario);
          setUserDataOnlyService(userId);
          await getImages(id);
          if (savedServiceIds.has(data._id)){
            setButtonClick(true);
          }else{
            setButtonClick(false);
          }
        }
      } catch (error) {
        console.error('Error al obtener los servicios:', error);
      }finally {
        setIsLoading(false); 
      }
    };

    fetchData();
  }, [id, setOnlyService,setUserDataOnlyService,setButtonClick,savedServiceIds,getImages]);

  return (
    <>
      
      {isLoading ? (
          null
        ) : servicioExiste?  (
          <CardServiceOnly />
        ) : (
          <Advertencia404 mensaje={'no encontramos el servicio que deseas consultar'}/>
        )}
      
    </>
  );
};

export default ServiceDetails;
