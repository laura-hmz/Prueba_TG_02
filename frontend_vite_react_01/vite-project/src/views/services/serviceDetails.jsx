import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getServicesById } from '../../api/servicesApi';
import CardServiceOnly from '../../components/servicios/cardServiceOnly';

const ServiceDetails = () => {
  const { id } = useParams();
  const [service, setService] = useState({});

  useEffect(() => {
    // Realizar una solicitud para obtener los servicios cuando el componente se monta
    const fetchData = async () => {
      try {
        const data = await getServicesById(id);
        console.log(data);
        setService(data);
      } catch (error) {
        console.error('Error al obtener los servicios:', error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <CardServiceOnly service={service} />
  );
};

export default ServiceDetails;
