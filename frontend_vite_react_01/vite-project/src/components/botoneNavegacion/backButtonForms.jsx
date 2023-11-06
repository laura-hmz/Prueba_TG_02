import PropTypes from 'prop-types';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ServiceContext } from '../../contexts/serviceContext';

const BackButtonForms = ({ currentOption }) => {
  const {isRegisterService} = useContext(ServiceContext);

  let targetRoute = '/offerService'; // Ruta por defecto para el caso de 'register'

  if (currentOption === 'edit' || currentOption === 'show') {
    targetRoute = '/userServices'; // Ruta cuando el formulario está en 'edit' o 'show'
  }

  return (
    <Link to={targetRoute}>
      <div className="flex justify-start">
        <button
          className="bg-indigo-500 text-white hover:bg-indigo-600 text-white font-bold py-3 px-3 rounded"
          disabled={isRegisterService}
        >
          <FaArrowLeft />
        </button>
      </div>
    </Link>
  );
};

BackButtonForms.propTypes = {
  currentOption: PropTypes.string.isRequired,
}
export default BackButtonForms;


