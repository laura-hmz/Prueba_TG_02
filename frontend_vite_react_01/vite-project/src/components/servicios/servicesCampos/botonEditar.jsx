import { useContext } from 'react';
import { ServiceContext } from '../../../contexts/serviceContext'
const BotonEditar = () => {
    const setOption = (newOption) => {
        setCurrentOption(newOption);
    };
   
    const { currentOption, setCurrentOption} = useContext(ServiceContext);
    return (
        <div className="flex justify-end">
            {currentOption=== 'show' ? (
                <button
                    className="outline-none glass shadow-2xl rounded p-3 bg-yellow-400 hover:border-white hover:border-solid hover:border-[1px] hover:text-white font-bold"
                    onClick={() => setOption('edit')} // Cambiar a la opción de edición
                >
                    Editar
                </button>
                ) : null
            }
        </div>
    );
}

export default BotonEditar;