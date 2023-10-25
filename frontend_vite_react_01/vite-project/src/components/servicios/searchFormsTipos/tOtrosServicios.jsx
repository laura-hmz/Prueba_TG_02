import { useContext } from 'react';
import { SearchContext } from '../../../contexts/searchContext';
import SearchFormsStyle from '../servicesComponentesStyle/searchFormsStyle';
import FiltroPrecio from './filtroPrecio';
import SearchInstruccion from '../../headers/searchInstruccion';

const TotrosServicios = () => {
    const {searchParams, handleChange, isLoading} = useContext(SearchContext);
    const {
        labelClassname,
        divGrid,
        divGridSub,
        selectDesing,
        inputDesing,
        
    } = SearchFormsStyle;

    return (
        <>
         {searchParams.tipo_servicio === 'Otros servicios' && (
                <>
                <SearchInstruccion/>
                  <div className={divGrid}>
                    <div className={divGridSub}>
                      <div className={divGrid}>
                        <div className={divGridSub}>
                          <label className={labelClassname} htmlFor="nombre">Nombre del servicio:</label>
                          <input
                            className={inputDesing}
                            type="text"
                            placeholder="Ejemplo: Venta de arroz de leche"
                            id="nombre"
                            name="nombre"
                            value={searchParams.nombre}
                            onChange={handleChange}
                            disabled={isLoading}
                          />
                        </div>
                        <div className={divGridSub}>
                        <FiltroPrecio/>
                        </div>
                      </div>   
                    </div>
                  </div>
              
                  <div className={divGrid}>
                    <div className={divGridSub}>
                      <label className={labelClassname} htmlFor="area_otro_servicio_3">Área del servicio:</label>
                      <select
                          className={selectDesing}
                          id="area_otro_servicio_3"
                          name="area_otro_servicio_3"
                          value={searchParams.area_otro_servicio_3}
                          onChange={handleChange}
                          disabled={isLoading}
                          >
                          <option value="">- Ninguna -</option>
                          <option value="Administrativos y finanzas">Administrativos y finanzas</option>
                          <option value="Atención al cliente">Atención al cliente</option>
                          <option value="Gastronomia">Gastronomía</option>
                          <option value="Artes u oficios">Artes u oficios</option>
                          <option value="Tecnologia e informatica">Tecnología e informática</option>
                          <option value="Belleza">Belleza</option>
                          <option value="Mensajeria">Mensajería</option>
                          <option value="Deporte">Deporte</option>
                          <option value="Vestuario">Vestuario</option>
                          <option value="Servicios generales">Servicios generales</option>
                          <option value="Mascotas">Mascotas</option>
                      </select>
                    </div>
                    <div className={divGridSub}></div>
                    <div className={divGridSub}></div>
                    <div className={divGridSub}></div>
                  </div>
                </>
              )}
        </>
        
    );

}
export default TotrosServicios
