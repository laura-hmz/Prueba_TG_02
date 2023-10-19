import { useContext } from 'react';
import { SearchContext } from '../../../contexts/searchContext';
import SearchFormsStyle from '../servicesComponentesStyle/searchFormsStyle';

const SubmitBoton = () => {
    const { isLoading } = useContext(SearchContext);
    const {
        buttonDesing,
    } = SearchFormsStyle;

    return (
        <>
      <div className="flex justify-end">
          <button className={buttonDesing}
            type="submit" disabled={isLoading}>Buscar
          </button>
        </div>
        </>
        
    );

}
export default SubmitBoton
