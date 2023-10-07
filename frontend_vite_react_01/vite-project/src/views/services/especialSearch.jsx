import { useEffect, useState,useContext } from 'react';
import {busquedaMatchmaking} from '../../api/servicesApi';
import { UserContext } from '../../contexts/userContext';
import SearchForm from '../../components/servicios/forms/searchForm';
import "../../components/loader1.css";
import Loader2 from '../../components/loaders/loader2';

import { CardServiceContext } from "../../contexts/cardServiceContext";
import CardService4 from '../../components/servicios/cards/cardService4';

const EspecialSearch = () => {

  const {setServices, setIsSearch, isSearch, services} = useContext(CardServiceContext);
  const [isLoading, setIsLoading] = useState(false);
  const[errorSearch, setErrorSearch] = useState(false);
  const { userData} = useContext(UserContext);
  const [idUser, setIdUser] = useState('');

  const handleSearch = async (searchParams) => {
    setIsLoading(true);
  
    try {
      const { diaSemana, horaBusquedaInicio, horaBusquedaFinal, estado, nombre,
        tipo_servicio, parqueadero_carro, parqueadero_moto, permite_mascota, 
        area_0,tipo_habitacion_1, tipo_vehiculo_2, area_otro_servicio_3,id_cliente } = searchParams;
  

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
        id_cliente
      });
      console.log('Estoy afuera');
      console.log(results);
  
      // Actualiza los resultados y el estado de carga
      setServices(results.orderedServices);
      setIsSearch(true);
      setIsLoading(false);
      setErrorSearch(false);

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
            {isLoading ? (
              <div className="loader-container relative ">
              <h1 className="text-center absolute top-5 left-0 w-full bg-transparent text-black text-2xl">
                Cargando...
              </h1>
              <div className="loader"></div>
            </div>
            ) : errorSearch? (
              <div className=" loader-container relative ">
                <h1 className="text-center absolute top-5 left-0 w-full bg-transparent text-black text-2xl">No se encontraron servicios con los criterios de búsqueda</h1>
                <br />
                <Loader2 />
              </div>
            ) : isSearch? (
              <CardService4 />
            ): (
              <div className=" loader-container relative ">
                <h1 className="text-center absolute top-5 left-0 w-full bg-transparent text-black text-2xl">
                  Busca servicios que vayan contigo</h1>
              </div>
            )}
            {console.log('Estos son los servicios: ', services)}
          </div>
        );
      }
export default EspecialSearch