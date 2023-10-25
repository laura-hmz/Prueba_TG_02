import { useContext } from 'react';
import { SearchContext } from '../../../contexts/searchContext';
import SearchFormsStyle from '../servicesComponentesStyle/searchFormsStyle';
import FiltroPrecio from './filtroPrecio';

const Ttransporte = () => {
    const {searchParams, handleChange, isLoading, optionsHora} = useContext(SearchContext);
    const {
        labelClassname,
        divGrid,
        divGridSub,
        selectDesing,
        
    } = SearchFormsStyle;

    return (
        <>
         {searchParams.tipo_servicio === 'Servicio de transporte' && (
                <>
                  <div className={divGrid}>
                    {/*Columna izquierda*/}
                    <div className={divGridSub}>
                      <label className={labelClassname} htmlFor="tipo_vehiculo_2">Tipo de vehículo:</label>
                      <select
                        className={selectDesing}
                        id="tipo_vehiculo_2"
                        name="tipo_vehiculo_2"
                        value={searchParams.tipo_vehiculo_2}
                        onChange={handleChange}
                        disabled={isLoading}
                      >
                        <option value="">- Sin especificar -</option> 
                        <option value="carro">Carro</option>
                        <option value="moto">Moto</option>
                      </select>
                      

                    </div>
                    <div className={divGridSub}>
                    <label className={labelClassname} htmlFor="diaSemana">Día de la semana:</label>
                      <select
                        className={selectDesing}
                        id="diaSemana"
                        name="diaSemana"
                        value={searchParams.diaSemana}
                        onChange={handleChange}
                        disabled={isLoading}
                      >
                        <option value="">- Ninguno -</option> 
                        <option value="Lunes">Lunes</option>
                        <option value="Martes">Martes</option>
                        <option value="Miercoles">Miércoles</option>
                        <option value="Jueves">Jueves</option>
                        <option value="Viernes">Viernes</option>
                        <option value="Sabado">Sábado</option>
                        <option value="Domingo">Domingo</option>
                      </select>


                    </div>

                    
                  </div>
                  <div className={divGrid}>
                    <div className={divGridSub}>
                      <div className={divGrid}>
                        <div className={divGridSub}>
                          <label className={labelClassname} htmlFor="horaBusquedaInicio">Hora inicio:</label>
                          <select
                            className={selectDesing}
                            id="horaBusquedaInicio"
                            name="horaBusquedaInicio"
                            value={searchParams.horaBusquedaInicio}
                            onChange={handleChange}
                            disabled={isLoading}
                          >
                            <option value="">- Ninguna -</option> 
                            {optionsHora.map((hora, index) => (
                                      <option key={index} value={index}>{hora}</option>
                                  ))}
                            
                          </select>
                        </div>
                        <div className={divGridSub}>
                          <label className={labelClassname} htmlFor="horaBusquedaFinal">Hora finalización:</label>
                          <select
                            className={selectDesing}
                            id="horaBusquedaFinal"
                            name="horaBusquedaFinal"
                            value={searchParams.horaBusquedaFinal}
                            onChange={handleChange}
                            disabled={isLoading}
                          >
                            <option value="">- Ninguna -</option> 
                            {optionsHora.map((hora, index) => (
                                      <option key={index} value={index}>{hora}</option>
                                  ))}
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className={divGridSub}>
                      <FiltroPrecio />
                    </div>
                  </div>
                 
                </>
              )}
        </>
        
    );

}
export default Ttransporte
