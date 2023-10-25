import { useContext } from 'react';
import { SearchContext } from '../../../contexts/searchContext';
import SearchFormsStyle from '../servicesComponentesStyle/searchFormsStyle';
import FiltroPrecio from './filtroPrecio';

const TasesoriasAcademicas = () => {
    const {searchParams, handleChange, isLoading, optionsHora} = useContext(SearchContext);
    const {
        labelClassname,
        divGrid,
        divGridSub,
        selectDesing,
        inputDesing
    } = SearchFormsStyle;

    return (
        <>
         {searchParams.tipo_servicio === 'Asesorías Académicas' && (
          <>
          <div className={divGrid}>
            <div className={divGridSub}>
              <label className={labelClassname} htmlFor="nombre">Nombre materia:</label>
              <input
                className={inputDesing}
                type="text"
                placeholder="Ejemplo: Asesorias de calculo II"
                id="nombre"
                name="nombre"
                value={searchParams.nombre}
                onChange={handleChange}
                disabled={isLoading}
              />
            </div>
            <div className={divGridSub}>
              <div className={divGrid}>
                <div className={divGridSub}>
                  <label className={labelClassname} htmlFor="area_0">Área:</label>
                  <select
                    className={selectDesing}
                    id="area_0"
                    name="area_0"
                    value={searchParams.area_0}
                    onChange={handleChange}
                    disabled={isLoading}
                    >
                    <option value="">- Ninguna -</option>
                    <option value="Ingenieria de sistemas">Ingeniería de sistemas</option>
                    <option value="Administracion de empresas">Administración de empresas</option>
                    <option value="Ingenieria de alimentos">Ingeniería de alimentos</option>
                    <option value="Construccion">Construcción</option>
                    <option value="Trabajo social">Trabajo social</option>
                    <option value="Contaduria publica">Contaduría pública</option>
                    <option value="Tecnologia en desarrollo de software">Tecnología en desarrollo de software</option>
                    <option value="Tecnologia en electronica">Tecnología en electrónica</option>
                    <option value="Tecnologia en alimentos">Tecnología en alimentos</option>
                  </select>
                </div>
                <div className={divGridSub}>
                  <label className={labelClassname}  htmlFor="diaSemana">Día de la semana:</label>
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
              <FiltroPrecio/>
            </div>
          </div>
            
          </>
        )}
        </>
        
    );

}
export default TasesoriasAcademicas
