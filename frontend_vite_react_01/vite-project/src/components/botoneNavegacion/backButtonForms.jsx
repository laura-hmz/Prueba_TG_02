import { FaArrowLeft } from 'react-icons/fa'
const BackButtonForms = () => {
  const handleBackClick = () => {
    window.history.back(); // Retrocede en el historial del navegador
  };

  return (
    <div className="flex justify-start">
      <button
        className="   bg-indigo-500 text-white hover:bg-indigo-600 text-white font-bold py-3 px-3 rounded"
        onClick={handleBackClick}
      >
        <FaArrowLeft />
      </button>
    </div>
  );
};

export default BackButtonForms;
