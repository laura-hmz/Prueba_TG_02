import { useContext } from 'react';
import { ServiceContext } from '../../../contexts/serviceContext'
const BotonSubmit = () => {
    const { currentOption,isRegisterService} = useContext(ServiceContext);

    return (
        <>
       <div >
            {currentOption !== 'show' && (
                <button
                    className="outline-none glass disabled:cursor-not-allowed disabled:opacity-50 shadow-2xl w-full rounded p-3 bg-green-400 hover:border-white hover:border-solid hover:border-[1px] hover:text-white font-bold"
                    type="submit"
                    disabled={isRegisterService}
                >
                    {currentOption === 'edit' ? 'Guardar cambios' : currentOption === 'register' ? 'Registrar nuevo servicio' : ''}
                </button>
            )}
        </div>
        </>
    );
}

export default BotonSubmit;