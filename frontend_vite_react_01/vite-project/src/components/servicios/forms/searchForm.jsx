import PropTypes from 'prop-types';
import  { useContext } from 'react';
import { SearchContext } from '../../../contexts/searchContext'; 
import TasesoriasAcademicas from '../searchFormsTipos/tAsesoriasAcademicas';
import Thabitaciones from '../searchFormsTipos/tHabitaciones';
import Ttransporte from '../searchFormsTipos/tTransporte';
import TotrosServicios from '../searchFormsTipos/tOtrosServicios';
import SubmitBoton from '../searchFormsTipos/submitBoton';

const SearchForm = ({ onSearch, isLoading, idUser }) => {
  const { searchParams, handleChange } = useContext(SearchContext);
  const selectDesing='capitalize shadow-2xl p-2 border w-full outline-none focus:border-solid focus:border-[2px] focus:border-[#93c5fd] placeholder:text-black'
  const divDesing = "text-center mb-4"
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const sanitizedSearchParams = {
      ...searchParams,
      id_cliente: idUser,
      parqueadero_carro: searchParams.parqueadero_carro ? searchParams.parqueadero_carro : "",
      parqueadero_moto: searchParams.parqueadero_moto ? searchParams.parqueadero_moto : "",
      permite_mascota: searchParams.permite_mascota ? searchParams.permite_mascota : ""
    };
    // Envía la solicitud de búsqueda al servidor con los parámetros actualizados
    //console.log('Nuevos parámetros:', sanitizedSearchParams);
    //console.log('idUser EN form', idUser);
    //console.log('El id del cliente', sanitizedSearchParams.id_cliente);
    onSearch(sanitizedSearchParams);
  };
  
  return (
    <div className="mx-auto max-w-6xl mt-28 md:mt-32 lg:mt-32 p-2 md:p-4 lg:p-6 rounded-lg border border-gray-300 border-solid ">
      <form onSubmit={handleSubmit} className='px-4'>
        <div className={divDesing}>
          <h1 className='block uppercase tracking-wide text-lg text-gray-600 font-bold'> Buscador especializado </h1>
          <label className='block mb-2 tracking-wide text-lg text-gray-600 font-bold' htmlFor="tipo_servicio">Categoría:</label>
          <select
            id="tipo_servicio"
            name="tipo_servicio"
            value={searchParams.tipo_servicio}
            onChange={handleChange}
            disabled={isLoading}
            className={selectDesing}
            required
          >
            <option value="" disabled>Selecciona una categoría</option>
            <option value="Asesorías Académicas">Asesorías Académicas</option>
            <option value="Servicio de habitaciones">Servicio de habitaciones</option>
            <option value="Servicio de transporte">Servicio de Transporte</option>
            <option value="Otros servicios">Otros servicios</option>
          </select>
        </div>

        <TasesoriasAcademicas />
        <Thabitaciones />
        <Ttransporte />
        <TotrosServicios />
        <SubmitBoton />
      </form>
    </div>
  );
};
SearchForm.propTypes = {
  onSearch: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  idUser: PropTypes.string.isRequired
  
}
export default SearchForm;
