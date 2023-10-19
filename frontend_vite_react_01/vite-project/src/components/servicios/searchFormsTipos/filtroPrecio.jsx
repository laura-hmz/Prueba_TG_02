import { useContext } from 'react';
import { SearchContext } from '../../../contexts/searchContext';
import SearchFormsStyle from '../servicesComponentesStyle/searchFormsStyle';

const FiltroPrecio = () => {
    const {searchParams, handleChange, isLoading} = useContext(SearchContext);
    const {
        labelClassname,
        divGrid,
        divGridSub,
        inputDesing,
    } = SearchFormsStyle;

    return (
        <>
        <div className={divGrid}> 
            <div className={divGridSub}>
                      <label className={labelClassname} htmlFor="precioMinimo">Precio mínimo:</label>
                      <input
                        className={inputDesing}
                        type="number"
                        id="precioMinimo"
                        name="precioMinimo"
                        value={searchParams.precioMinimo}
                        onChange={handleChange}
                        disabled={isLoading}
                        min="0" 
                      />
            </div>
          
            <div className={divGridSub}>
                        <label className={labelClassname} htmlFor="precioMaximo">Precio máximo:</label>
                        <input
                            className={inputDesing}
                            type="number"
                            id="precioMaximo"
                            name="precioMaximo"
                            value={searchParams.precioMaximo}
                            onChange={handleChange}
                            disabled={isLoading}
                            min="0" 
                        />
            </div>
        </div>
        
            </>
          
        
    );

}
export default FiltroPrecio
