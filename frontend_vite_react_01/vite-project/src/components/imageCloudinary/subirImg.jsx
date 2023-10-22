import { subirImagen } from '../../api/cloudinaryApi';
import { useState } from 'react';

const SubirImg = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
    console.log(e.target.files[0]);
    console.log('Archivo selecionado', selectedFile);
  };


  const handleUpload = async (e) => {
    e.preventDefault();
  
    if (!selectedFile) {
      alert('Selecciona un archivo primero.');
      return;
    }
      subirImagen(selectedFile,'64e5a8c6fa70daf3b629510f');
  }
      
  return (
    <div>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      <button onClick={handleUpload}>Subir Imagen</button>
    </div>
  );
};

export default SubirImg;
