import { useEffect,useContext } from 'react';
import { useParams } from 'react-router-dom';
import { getServicesById } from '../../api/servicesApi';
import { getUserId } from '../../api/usersApi';
import { CardServiceContext } from "../../contexts/cardServiceContext";
import { ServiceContext } from '../../contexts/serviceContext';
import CardServiceOnly from '../../components/servicios/cardServiceOnly';

const ServiceDetails = () => {
  const { id } = useParams();
  const {setOnlyService,setUserDataOnlyService,setButtonClick,savedServiceIds} = useContext(CardServiceContext);
  const {getImages} = useContext(ServiceContext);

  useEffect(() => {
    // Realizar una solicitud para obtener los servicios cuando el componente se monta
    const fetchData = async () => {
      try {
        const data = await getServicesById(id);
        setOnlyService(data);

        const userId = await getUserId(data.id_usuario);
        setUserDataOnlyService(userId);

        await getImages(id);

        if (savedServiceIds.has(data._id)){
          setButtonClick(true);
        }else{
          setButtonClick(false);
        }

      } catch (error) {
        console.error('Error al obtener los servicios:', error);
      }
    };

    fetchData();
  }, [id, setOnlyService,setUserDataOnlyService,setButtonClick,savedServiceIds,getImages]);

  return (
    <CardServiceOnly />
  );
};

export default ServiceDetails;
