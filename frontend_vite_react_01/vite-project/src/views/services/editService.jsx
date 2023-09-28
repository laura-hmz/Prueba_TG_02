import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Utiliza useNavigate en lugar de useHistory
import { getServicesById } from '../../api/servicesApi';
import TransportServiceForm2 from "../../components/servicios/forms/transportServiceForm2"
//import RoomServiceForm2 from "../../components/servicios/forms/roomServiceForm2"

const EdithService = () => {
  console.log('EdithService');
  const { id } = useParams();
  const [service, setService] = useState({});
  //const navigate = useNavigate(); // Utiliza useNavigate en lugar de useHistory

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

  const updatedServiceData = async () => {
    try {
      const data = await getServicesById(id);
      setService(data);
    } catch (error) {
      console.error('Error al obtener los servicios:', error);
    }
  }
  
 

  const option = 'show';
  //console.log('option', option);

  return (
    <div>
      <TransportServiceForm2 service={service} option={option} updatedServiceData={updatedServiceData}/> 
    </div>
  );
};

export default EdithService;
