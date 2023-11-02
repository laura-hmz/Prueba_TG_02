import { subirImagen } from '../../api/cloudinaryApi';
import { useState , useEffect } from 'react';
import { useContext} from 'react';
import { ServiceContext } from '../../contexts/serviceContext';
import FormsComponentsStyle from '../../components/servicios/servicesComponentesStyle/formsComponentsStyle';

const SubirImg = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const {images, getImages,currentOption, idServiceForImg } = useContext(ServiceContext);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
    //console.log(e.target.files[0]);
    //console.log('Archivo selecionado', selectedFile);
  };


  const handleUpload = async (e) => {
    e.preventDefault();
  
    if (!selectedFile) {
      alert('Selecciona un archivo primero.');
      return;
    }
      await subirImagen(selectedFile,idServiceForImg);
      await getImages(idServiceForImg);
      
  }
  useEffect(() => {
   if (currentOption === 'show') {
        setSelectedFile(null);
  }
  }, [currentOption]);

  const {
    labelClassname,
    divEspace

} = FormsComponentsStyle;
      
  return (
    <>
      {currentOption !== 'register'  && (
    <div className={divEspace}>
      <h1 className={labelClassname}>Imagenes</h1>
      <h1 className='text-sm ml-4 mt-2 mb-4 text-gray-500'> Puedes subir máximo 3, activa el boton *Editar* para hacerlo </h1>
      {currentOption !== 'edit' || currentOption !== 'register'   && (
        
      <div className="mb-4 mx-auto">
        <div className={`md:flex lg:flex justify-between `}>
          <input
            className="cursor-pointer file:disabled:cursor-not-allowed flex shadow-2xl h-10 w-full md:w-3/4 lg:w-3/4 mt-2 rounded-md disabled:cursor-not-allowed border border-input bg-white px-3 py-2 text-sm text-gray-600 file:border-0 file:bg-transparent file:text-gray-700 file:text-sm file:font-medium"
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            disabled={images.length >= 3 || currentOption === 'show'}
          />
          <button 
          type="button"
          className="focus:outline-none bg-gray-500 center mt-2 disabled:bg-gray-400 text-white hover:bg-gray-600 py-2 px-3 text-sm rounded-lg " 
          disabled={images.length >= 3 || currentOption === 'show'}
          onClick={handleUpload}>
            Subir Imagen
          </button>
        </div>
      </div>
       )}
    </div>
     )}
     </>
  );
};

export default SubirImg;
