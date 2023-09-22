
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getServicesById } from '../../api/servicesApi';
import TransportServiceForm2 from "../../components/servicios/forms/transportServiceForm2"

const EdithService = () => {
  const { id } = useParams();
  const [service, setService] = useState({});

  useEffect(() => {
    // Realizar una solicitud para obtener los servicios cuando el componente se monta
    const fetchData = async () => {
      try {
        const data = await getServicesById(id);
        setService(data);
      } catch (error) {
        console.error('Error al obtener los servicios:', error);
      }
    };

    fetchData();
  }, [id]);

  const option='show';

  return (
    <TransportServiceForm2 service={service} option={option}/>
  );
};

export default EdithService;