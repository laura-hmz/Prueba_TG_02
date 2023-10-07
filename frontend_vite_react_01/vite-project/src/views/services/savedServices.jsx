import "../../components/loader1.css";
import CardService4 from "../../components/servicios/cards/cardService4";
import { CardServiceContext } from "../../contexts/cardServiceContext";
import { UserContext } from "../../contexts/userContext";
import { useContext, useEffect } from "react";
import {getSavedServicesByUserId} from '../../api/savedServicesApi'
const SavedServices = () => {
  const { userData} = useContext(UserContext);
  const {services,setServices,setIsSearch } = useContext(CardServiceContext);
  useEffect(() => {

    const fetchData = async () => {
      try {
        const data = await getSavedServicesByUserId(userData._id);
        setServices(data);
        setIsSearch(false);
        
      
      } catch (error) {
        console.error('Error al obtener los servicios:', error);
      }
    };
    fetchData();

   }, [userData, services, setServices]);
  

    return (
        <>
        {services? <CardService4 />:
        <h1>No has guardado ningun servicio,¡No esperes más para explorar!</h1>}
        </>
    )
}
export default SavedServices