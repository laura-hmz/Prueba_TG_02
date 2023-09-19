import { useState } from 'react';
import {busquedaMatchmaking} from '../../api/servicesApi';
import SearchForm from '../../components/servicios/forms/searchForm';
import CardService3 from '../../components/servicios/cardService3';

const SearchService = () => {

const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (searchParams) => {
    setIsLoading(true);
  
    try {
      const { diaSemana, horaBusquedaInicio, horaBusquedaFinal, estado, nombre,
        tipo_servicio, nombre_caracteristica, descripcion_caracteristica, area_0,
        tipo_habitacion_1, tipo_vehiculo_2, area_otro_servicio_3,id_cliente } = searchParams;
  
      // Llama a tu función de búsqueda en el backend
      const results = await busquedaMatchmaking({
        diaSemana,
        horaBusquedaInicio,
        horaBusquedaFinal,
        estado,
        nombre,
        tipo_servicio,
        nombre_caracteristica,
        descripcion_caracteristica,
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
        <div>
            <h1>Buscador Especializado</h1>
            <SearchForm onSearch={handleSearch} isLoading={isLoading} />
            {isLoading ? (
            <h1>Cargando...</h1>
            
            ) : (
            
            
            <CardService3 services={searchResults.orderedServices} />
            
            )}
        </div>
    )
}
export default SearchService 