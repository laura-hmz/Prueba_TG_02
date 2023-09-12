import "./styleModal.css";
import { Modal } from 'react-responsive-modal';

const DeleteConfirmation = ({ isOpen, onClose, onDelete }) => {
  return (

    <div>
  <Modal open={isOpen} onClose={onClose} center>
    <div className="text-center">
      <h2 className="mb-4 text-lg md:text-xl lg:text-2xl">Eliminar servicio</h2>
      <p className="mb-4 text-sm md:text-base lg:text-lg">¿Estás seguro de que quieres eliminar este servicio?</p>
    </div>
      <div className="modal-content flex flex-col md:flex-row justify-center mt-4">
      <button
        type="button"
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full mb-2 md:mb-0 md:mr-4"
        onClick={onClose}
      > Cancelar </button>
      <button
        type="button"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        onClick={onDelete}>Eliminar</button>
    </div>
  </Modal>
</div>

  );
};

export default DeleteConfirmation;



