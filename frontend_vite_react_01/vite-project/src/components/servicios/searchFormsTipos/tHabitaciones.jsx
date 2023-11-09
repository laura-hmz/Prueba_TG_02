import { useContext } from 'react';
import { SearchContext } from '../../../contexts/searchContext';
import SearchFormsStyle from '../servicesComponentesStyle/searchFormsStyle';
import FiltroPrecio from './filtroPrecio';
import SearchInstruccion from '../../headers/searchInstruccion';

const Thabitaciones = () => {
    const {searchParams, handleChange, isLoading} = useContext(SearchContext);
    const {
        labelClassname,
        divGrid,
        divGridSub,
        selectDesing,
        labelCheckBox,
    } = SearchFormsStyle;

    return (
        <>
         {searchParams.tipo_servicio === 'Servicio de habitaciones' && (
          <>
            <SearchInstruccion />
            <div className={divGrid}>
               {/*Columna izquierda*/}
              <div className={divGridSub}>
                <label className={labelClassname} htmlFor="tipo_habitacion_1">¿Qué buscas?:</label>
                <select
                  className={selectDesing}
                  id="tipo_habitacion_1"
                  name="tipo_habitacion_1"
                  value={searchParams.tipo_habitacion_1}
                  onChange={handleChange}
                  disabled={isLoading}
                >
                  <option value="">- Sin especificar -</option> 
                  <option value="Apartamento">Apartamento</option>
                  <option value="Habitacion">Habitación</option>
                  <option value="Hospedaje">Hospedaje</option>
                </select>

              </div>

               {/*Columna derecha*/}
                <div className={divGridSub}>
                  <FiltroPrecio></FiltroPrecio>  
                </div>
              
            </div>
            <h1 className={labelClassname}>¿Qué caracteristicas buscas?:</h1>
            <div className={divGrid}>
              <div className={divGridSub}>
                <label className={labelCheckBox} htmlFor="parqueadero_carro">
                  <input
                      type="checkbox"
                      id="parqueadero_carro"
                      name="parqueadero_carro"
                      checked={searchParams.parqueadero_carro}
                      onChange={handleChange}
                      disabled={isLoading}
                  />
                  <span className="ml-2 mr-4">Parqueadero de carro</span>
                </label>
              </div>
              <div className={divGridSub}>
              <label className={labelCheckBox} htmlFor="parqueadero_moto">
                    <input
                      type="checkbox"
                      id="parqueadero_moto"
                      name="parqueadero_moto"
                      checked={searchParams.parqueadero_moto}
                      onChange={handleChange}
                      disabled={isLoading}
                    />
                     <span className="ml-2 mr-4">Parqueadero moto</span>
                  </label>
              </div>
              <div className={divGridSub}>
              <label className={labelCheckBox} htmlFor="permite_mascota">
                    <input
                      type="checkbox"
                      id="permite_mascota"
                      name="permite_mascota"
                      checked={searchParams.permite_mascota}
                      onChange={handleChange}
                      disabled={isLoading}
                    />
                      <span className="ml-2 mr-4">Permiten mascotas</span>
                  </label>
              </div>
              
            </div>        
          </>
        )}
        </>
        
    );

}
export default Thabitaciones
