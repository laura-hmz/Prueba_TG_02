
import {getUserId} from '../../api/usersApi';
import {listServicesIdUser} from '../../api/servicesApi';
import  {  useEffect, useContext } from 'react';
import { CardServiceContext } from '../../contexts/cardServiceContext';
import { useParams } from 'react-router-dom';

import CardUser from '../../components/usuarios/cardUser/CardUser';
import CardServicesDetailsUser from '../../components/servicios/cards/cardServicesDetailsUser';
import PageHeaderHome from '../../components/headers/pageHerderHome';
const UserDetails = () => {
    const { id } = useParams();
  const {setUserDataOnlyService, setServicesUserDetails} = useContext(CardServiceContext);
  

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
  }, [ setUserDataOnlyService, setServicesUserDetails,id ]);

  return (
    <>
      <CardUser/>
      <PageHeaderHome title="Servicios ofrecidos por el usuario"/>
      <CardServicesDetailsUser/>
    </>
    
  );
 
};

export default UserDetails;
