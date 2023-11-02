import { FaArrowLeft } from 'react-icons/fa'
const BackButton = () => {
  const handleBackClick = () => {
    window.history.back(); // Retrocede en el historial del navegador
  };

  return (
    <button
      className=" absolute top-4 left-4 bg-indigo-500 text-white hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded"
      onClick={handleBackClick}
    >
      <FaArrowLeft />
    </button>
  );
};

export default BackButton;
