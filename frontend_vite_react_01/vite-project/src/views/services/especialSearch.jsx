import { useEffect, useState,useContext } from 'react';
import {busquedaMatchmaking} from '../../api/servicesApi';
import { UserContext } from '../../contexts/userContext';
import SearchForm from '../../components/servicios/forms/searchForm';
import { CardServiceContext } from "../../contexts/cardServiceContext";
import { SearchContext } from "../../contexts/searchContext";
import CardService4 from '../../components/servicios/cards/cardService4';
import PageHeaderHome from "../../components/headers/pageHerderHome";
import InvitacionAbuscar from "../../components/servicios/searchFormsTipos/componenteInvitacionAbuscar";
import NoSeEncontraronServicios from "../../components/servicios/searchFormsTipos/componenteNoSeEncontraronServicios";
import Cargando from "../../components/servicios/searchFormsTipos/componenteCargando";

const EspecialSearch = () => {

  const {setServices, setIsSearch, isSearch} = useContext(CardServiceContext);
  const {isLoading, setIsLoading} = useContext(SearchContext);
  const[errorSearch, setErrorSearch] = useState(false);
  const { userData} = useContext(UserContext);
  const [idUser, setIdUser] = useState('');
  const handleSearch = async (searchParams) => {
    setIsLoading(true);
  
    try {
      const { diaSemana, horaBusquedaInicio, horaBusquedaFinal, estado, nombre,
        tipo_servicio, parqueadero_carro, parqueadero_moto, permite_mascota, 
        area_0,tipo_habitacion_1, tipo_vehiculo_2, area_otro_servicio_3,id_cliente,
        precioMinimo, precioMaximo } = searchParams;
  
      const results = await busquedaMatchmaking({
        diaSemana,
        horaBusquedaInicio,
        horaBusquedaFinal,
        estado,
        nombre,
        tipo_servicio,
        parqueadero_carro, 
        parqueadero_moto, 
        permite_mascota,
        area_0,
        tipo_habitacion_1,
        tipo_vehiculo_2,
        area_otro_servicio_3,
        id_cliente,
        precioMinimo,
        precioMaximo
      });
      //console.log(results);
      // Actualiza los resultados y el estado de carga
      if(results.message){
        setErrorSearch(true);
      } else {
        setServices(results.orderedServices);
        setIsSearch(true);
        setErrorSearch(false);
      }
      setIsLoading(false);

    } catch (error) {
      console.error('No se encontraron servicios con los criterios de búsqueda:', error);
      setIsLoading(false);
      setErrorSearch(true);
    }
  };
  useEffect(() => {
    if(userData !== null){
      setIdUser(userData._id);
    }
  } , [userData,setIsSearch]);

    return (
        <div >
            <SearchForm onSearch={handleSearch} isLoading={isLoading} idUser={idUser} />
            <PageHeaderHome title="Resultados de búsqueda" />
            {isLoading ? (
              <Cargando />
            ) : errorSearch? (
              <NoSeEncontraronServicios />
            ) : isSearch? (
              <CardService4 />
            ): (
                  <InvitacionAbuscar />
            )}
            
          </div>
        );
      }
export default EspecialSearch