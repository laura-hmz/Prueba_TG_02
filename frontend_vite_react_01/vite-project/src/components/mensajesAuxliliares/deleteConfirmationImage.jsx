import PropTypes from 'prop-types';
import "./styleModal.css";
import { Modal } from 'react-responsive-modal';

const DeleteConfirmationImg = ({ isOpen, onClose, onDelete }) => {
  return (

    <div>
  <Modal open={isOpen} onClose={onClose} center>
    <div className="text-center">
      <h2 className="mb-4 text-xl md:text-xl lg:text-2xl font-semibold">Eliminar imagen</h2>
      <p className="mb-4 text-md  lg:text-lg">Una vez eliminada, no podrás recuperarla. ¿Estás seguro de que deseas eliminar esta imagen?</p>
    </div>
      <div className="modal-content flex flex-col md:flex-row justify-center mt-4">
      <button
        type="button"
        className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mb-2 md:mb-0 md:mr-4"
        onClick={onClose}
      > Cancelar </button>
      <button
        type="button"
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
        onClick={onDelete}>Eliminar</button>
    </div>
  </Modal>
</div>

  );
};
DeleteConfirmationImg.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
}

export default DeleteConfirmationImg;



