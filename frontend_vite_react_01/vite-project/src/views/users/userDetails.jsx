
import {getUserId} from '../../api/usersApi';
import {listServicesIdUser} from '../../api/servicesApi';
import  {  useEffect, useContext,useState } from 'react';
import { CardServiceContext } from '../../contexts/cardServiceContext';
import { useParams } from 'react-router-dom';

import CardUser from '../../components/usuarios/cardUser/cardUser';
import CardServicesDetailsUser from '../../components/servicios/cards/cardServicesDetailsUser';
import PageHeaderHome from '../../components/headers/pageHerderHome';
import Advertencia404 from '../../components/avisosPersonalizados/advertenciaPersonalizada404';
const UserDetails = () => {
  const { id } = useParams();
  const {setUserDataOnlyService, setServicesUserDetails} = useContext(CardServiceContext);
  const [userExist, setUserExist] = useState(false);
  

  useEffect(() => {
    // Realizar una solicitud para obtener los servicios cuando el componente se monta
    const fetchData = async () => {
      try {
      
        const userId = await getUserId(id);
        console.log(userId);

        if (userId === undefined || userId === null) {
          setUserExist(false);
        }else if (userId !== undefined && userId !== null) {
          setUserExist(true);
          setUserDataOnlyService(userId);

          const data = await listServicesIdUser(id);
          setServicesUserDetails(data);
        }

      } catch (error) {
        console.error('Error al obtener los servicios:', error);
      }
    };

    fetchData();
  }, [ setUserDataOnlyService, setServicesUserDetails,id ]);

  return (
    <>
      {userExist ? 
        <>
        <CardUser/>
        <PageHeaderHome title="Servicios ofrecidos por el usuario"/>
        <CardServicesDetailsUser/>
        </>
      : 
        <Advertencia404 mensaje={'no encontramos el usuario que desea consultar'}/>
      }
      
    </>
    
  );
 
};

export default UserDetails;
