import { useState } from 'react';
import {busquedaMatchmaking} from '../../api/servicesApi';
import SearchForm from '../../components/servicios/forms/searchForm';
import CardService3 from '../../components/servicios/cardService3';
import "../../components/loader1.css";
const EspecialSearch = () => {

const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (searchParams) => {
    setIsLoading(true);
  
    try {
      const { diaSemana, horaBusquedaInicio, horaBusquedaFinal, estado, nombre,
        tipo_servicio, parqueadero_carro, parqueadero_moto, permite_mascota, 
        area_0,tipo_habitacion_1, tipo_vehiculo_2, area_otro_servicio_3,id_cliente } = searchParams;
  
      // Llama a tu función de búsqueda en el backend
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
      setSearchResults(results);
      setIsLoading(false);
    } catch (error) {
      // Maneja cualquier error que pueda ocurrir durante la búsqueda
      console.error('Error en la búsqueda:', error);
      setIsLoading(false);
    }
  };
    return (
        <div >
            <SearchForm onSearch={handleSearch} isLoading={isLoading} />
            {isLoading ? (
              <div className="loader-container relative ">
              <h1 className="text-center absolute top-5 left-0 w-full bg-transparent text-black text-2xl">
                Cargando...
              </h1>
              <div className="loader"></div>
            </div>
            ) : (
            <CardService3 services={searchResults.orderedServices} />
            )}
        </div>
    )
}
export default EspecialSearch