import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import PropTypes from 'prop-types';
import  { useState } from 'react';
import {cambiarImagenPortada} from '../../api/servicesApi'

const SubirImagenModal = ({ isOpen, onClose, fetchData, serviceId }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isLoadingImg, setIsLoadingImg] = useState(false);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = async (e) => {
    e.preventDefault();
  
    if (!selectedFile) {
        alert('Selecciona un archivo primero.');
        return;
      }
      //console.log('selectedFile',selectedFile);
      setIsLoadingImg(true);
      await cambiarImagenPortada(selectedFile, serviceId);
      await fetchData();
      setIsLoadingImg(false);
      onClose();
  }

  return (
    <Modal open={isOpen} onClose={onClose} center>
        <div className='mt-8 '>
        <h1 className='text-md font-bold text-center  ml-4 mb-4 text-gray-600'> Cambiar portada </h1>
        <p className='text-sm ml-4 mb-4 text-center  text-gray-500'> Escoge una imagen para la portada de tu servicio y presiona *Cargar* </p>
      <div className="mb-4 mt-2 mx-auto md:w-full">
        <div className={`md:flex lg:flex justify-between `}>
          <input
            className="cursor-pointer mr-8 mb-2 file:disabled:cursor-not-allowed flex shadow-2xl h-10 w-full md:w-3/4 lg:w-3/4 mt-2 rounded-md disabled:cursor-not-allowed border border-input bg-white px-3 py-2 text-sm text-gray-600 file:border-0 file:bg-transparent file:text-gray-700 file:text-sm file:font-medium"
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            disabled={isLoadingImg}
          />
          <div className='flex justify-center mb-4'>
          <button 
            type="button"
            className="focus:outline-none  bg-gray-500 center mt-2 disabled:bg-gray-400 text-white hover:bg-gray-600 py-2 px-2  text-sm rounded-lg " 
            onClick={handleUpload}
            disabled={isLoadingImg}
          >
            <span className='mx-3'>Cargar</span>
          </button>
          </div>
        </div>
      </div>
      </div>
    </Modal>
  );
};
SubirImagenModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  fetchData: PropTypes.func,
  serviceId: PropTypes.string

}
export default SubirImagenModal;
