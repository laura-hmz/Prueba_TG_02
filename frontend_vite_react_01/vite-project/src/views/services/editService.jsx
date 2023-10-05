import { useEffect,useContext,useState } from 'react';
import { useParams } from 'react-router-dom';
import TransportServiceForms3 from "../../components/servicios/forms/trasnportServiceForms3"
import AcademyServiceForm from "../../components/servicios/forms/academyServiceForm"


import { ServiceContext } from '../../contexts/serviceContext';
import RoomServiceForm2 from '../../components/servicios/forms/roomServiceForm2';
import OtherServiceForm from '../../components/servicios/forms/otherServiceForm';
const EdithService = () => {
  console.log('EdithService');
  const { id } = useParams();
  const {fetchData, setCurrentOption, tipoServicio } = useContext(ServiceContext);
  const [tipoServicioAux, setTipoServicioAux] = useState('');
  useEffect(() => {
    fetchData(id);
    setCurrentOption('show');
    setTipoServicioAux(tipoServicioAux);
  

  

  }, [fetchData, id, setCurrentOption, tipoServicio, tipoServicioAux]);
  

  return (

    <>
      {tipoServicio === 'Servicio de transporte' ? (
        <TransportServiceForms3 />
      ) : tipoServicio === 'Asesorías Académicas' ? (
        <AcademyServiceForm />
      ) :  tipoServicio === 'Servicio de habitaciones' ? (
        <RoomServiceForm2 />
      ):<OtherServiceForm />}
    </>
    
  );
};

export default EdithService;
