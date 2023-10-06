import { useContext } from 'react';
import { UserContext } from '../../../contexts/userContext'

const BotonCancelarU = () => {
    const {serviceData, currentOption, setCurrentOption,fetchData} = useContext(UserContext);
    const setOption = (newOption) => {
        setCurrentOption(newOption);
        fetchData(serviceData._id);
    };
   
    return (
        <div className="flex justify-end">
            {currentOption=== 'edit' ? (
                <button
                    className="outline-none glass shadow-2xl rounded p-3 bg-red-400 hover:border-white hover:border-solid hover:border-[1px] hover:text-white font-bold"
                    onClick={() => setOption('show')} // Cambiar a la opción de edición
                >
                    Cancelar
                </button>
                ) : null
            }
        </div>
    );
}

export default BotonCancelarU;