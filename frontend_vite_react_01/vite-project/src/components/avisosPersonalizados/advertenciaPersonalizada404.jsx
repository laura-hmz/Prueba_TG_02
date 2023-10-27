import { FaExclamationTriangle   } from 'react-icons/fa';
import PropTypes from 'prop-types';
const Advertencia404 = ({mensaje}) => {
    return (
        <div className='loader-container relative flex flex-col justify-center items-center mt-40'>
            <div className='bg-gray-100 border-solid rounded-lg text-center border text-gray-400 p-10 md:p-20 lg:p-20 py-20'>
                <p className='text-xl md:text-2xl font-bold mb-4'>¡Vaya! {mensaje}</p>
                <p className='text-md md:text-lg'>
                Te invitamos a regresar a la página principal para seguir explorando
                <span className="flex justify-center mt-8 items-center">
                    <FaExclamationTriangle size={100} className="center text-gray-400" />
                </span>
                </p>
            </div>
        </div>

    );
}
export default Advertencia404;
Advertencia404.propTypes = {
    mensaje: PropTypes.string
}