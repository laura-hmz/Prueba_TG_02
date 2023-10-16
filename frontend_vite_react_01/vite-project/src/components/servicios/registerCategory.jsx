import { Link } from 'react-router-dom';
import { FaCar, FaGraduationCap, FaBed, FaEllipsisH } from 'react-icons/fa';

const buttonStyle = "md:w-60 md:h-60 w-40 h-40 rounded-lg p-4 m-4 bg-white shadow-2xl text-center flex flex-col items-center justify-center transition-transform transform hover:scale-105 ";

const RegisterCategory = () => {
  return (
    <div className="text-center md:mt-20 md:mb-24 mt-16 mb-20">
      <h1 className='block md:mb-14 mb-16 md:text-3xl text-2xl text-gray-600 font-semibold'>¡Hola! ¿Qué deseas ofrecer?</h1>

      <div className="flex flex-wrap justify-center">
        <Link to="/register/transport" className={buttonStyle}>
          <FaCar size={80} className="text-yellow-500" />
          Servicio de Transporte
        </Link>
        <Link to="/register/academic-advising" className={buttonStyle}>
          <FaGraduationCap size={80} className="text-blue-500" />
          Asesorías Académicas
        </Link>
        <Link to="/register/room" className={buttonStyle}>
          <FaBed size={80} className="text-purple-500" />
          Servicio de Habitaciones
        </Link>
        <Link to="/register/other" className={buttonStyle}>
          <FaEllipsisH size={80} className="text-orange-500" />
          Otros Servicios
        </Link>
      </div>
    </div>
  );
};

export default RegisterCategory;
