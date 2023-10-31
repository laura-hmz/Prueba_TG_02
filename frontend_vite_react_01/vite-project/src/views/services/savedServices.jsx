import "../../components/loader1.css";
import CardService4 from "../../components/servicios/cards/cardService4";
import { CardServiceContext } from "../../contexts/cardServiceContext";
import { UserContext } from "../../contexts/userContext";
import { useContext, useEffect, useState } from "react";
import {getSavedServicesByUserId} from '../../api/savedServicesApi'
import SpaceLoader from "../../components/loaders/notFoundLoaders/spaceLoader";
import PageHeader from "../../components/headers/pageHeader";
const SavedServices = () => {
  const { userData} = useContext(UserContext);
  const {services,setServices,setIsSearch } = useContext(CardServiceContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getSavedServicesByUserId(userData._id);
        setServices(data);
        setIsSearch(false);
        
      
      } catch (error) {
        console.error('Error al obtener los servicios:', error);
      }finally {
        setIsLoading(false); // Indicador de carga: los datos han sido cargados
      }
    };
    fetchData();

   }, [userData, services, setServices, setIsSearch]);
    return (
      <>
        <PageHeader title="Servicios Guardados"/>
        {/* Verifica si services es un arreglo antes de pasarlo a CardService3 */}
        {isLoading ? (
          null
        ) : Array.isArray(services) && services.length > 0 ? (
          <CardService4 />
        ) : (
          <SpaceLoader />
        )}
      </>
    )
}
export default SavedServices