import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getServicesById } from '../../api/servicesApi';
import { getUserId } from '../../api/usersApi';
import CardServiceOnly from '../../components/servicios/cardServiceOnly';

const ServiceDetails = () => {
  const { id } = useParams();
  const [service, setService] = useState({});
  const [userData, setUserData] = useState({});

  useEffect(() => {
    // Realizar una solicitud para obtener los servicios cuando el componente se monta
    const fetchData = async () => {
      try {
        const data = await getServicesById(id);
        console.log(data);
        setService(data);
        const userId = await getUserId(data.id_usuario);
        setUserData(userId);
      } catch (error) {
        console.error('Error al obtener los servicios:', error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <CardServiceOnly service={service} userData={userData} />
  );
};

export default ServiceDetails;
