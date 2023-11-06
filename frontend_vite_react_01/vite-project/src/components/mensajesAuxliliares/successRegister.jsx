import PropTypes from 'prop-types';
import "./styleModal.css";
import { Modal } from 'react-responsive-modal';

const SuccessRegister = ({ isOpen, onClose }) => {
  return (
    <div>
      <Modal open={isOpen} onClose={onClose} center>
        <div className="text-center">
          <h2 className="mb-4 text-lg md:text-xl lg:text-2xl">¡Servicio registrado con éxito!</h2>
          <p className="mb-4 text-sm md:text-base lg:text-md">Puedes verlo en la sección de *Mis servicios* en la barra de navegación y realizar ajustes</p>

        </div>
        <div className="modal-content flex justify-center mt-4">
          <button
            type="button"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            onClick={onClose}
          >
            Aceptar
          </button>
        </div>
      </Modal>
    </div>
  );
};

SuccessRegister.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default SuccessRegister;
