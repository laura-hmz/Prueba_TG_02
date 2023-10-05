import { useEffect,useContext } from 'react';
import { useParams } from 'react-router-dom';
import TransportServiceForms3 from "../../components/servicios/forms/trasnportServiceForms3"


import { ServiceContext } from '../../contexts/serviceContext';
const EdithService = () => {
  console.log('EdithService');
  const { id } = useParams();
  const {fetchData, setCurrentOption } = useContext(ServiceContext);
  
  useEffect(() => {
    fetchData(id);
    setCurrentOption('show');
    //console.log('me estoy actualzando')

  }, [fetchData, id, setCurrentOption]);
  

  return (
    <div >
    <TransportServiceForms3 /> 
    
  </div>
  );
};

export default EdithService;
