import "../../components/loader1.css";
import CardService4 from "../../components/servicios/cards/cardService4";
import { CardServiceContext } from "../../contexts/cardServiceContext";
import { UserContext } from "../../contexts/userContext";
import { useContext, useEffect } from "react";
import {getSavedServicesByUserId} from '../../api/savedServicesApi'
import SpaceLoader from "../../components/loaders/notFoundLoaders/spaceLoader";
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

   }, [userData, services, setServices, setIsSearch]);
  

    return (
        <>

        {/* Verifica si services es un arreglo antes de pasarlo a CardService3 */}
       {Array.isArray(services) && services.length > 0 ? (
        <CardService4 />
        ) : (
          <SpaceLoader />
        
      )}
        </>

       

    )
}
export default SavedServices