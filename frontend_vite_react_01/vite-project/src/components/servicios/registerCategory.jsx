import { Link } from 'react-router-dom';
import { FaCar, FaGraduationCap, FaBed, FaEllipsisH } from 'react-icons/fa';

const buttonStyle = "md:w-60 md:h-60 w-40 h-40 border border-gray-200  rounded-lg p-4 m-4 bg-white shadow-2xl text-center text-gray-700 flex flex-col items-center justify-center transition-transform transform hover:scale-105 ";

const RegisterCategory = () => {
  return (
    <div className="text-center md:mt-36 mt-28 mb-20 ">
      <h1 className="mt-4 lg:mt-8  md:ml-4 text-center text-2xl xl:text-4xl lg:text-4xl font-serif text-gray-600">
                    ¡Hola! </h1>
                    <h1 className=" lg:mb-8 mt-2 mb-4 text-center text-xl lg:text-3xl font-serif text-gray-500">
                    ¿Qué deseas ofrecer?</h1>

      <div className="flex flex-wrap justify-center ">
        <Link to="/register/transport" className={buttonStyle}>
          <FaCar size={80} className="text-[#FBCF43] mb-3" />
          Servicio de Transporte
        </Link>
        <Link to="/register/academic-advising" className={buttonStyle}>
          <FaGraduationCap size={80} className="text-[#0E87CC] mb-3" />
          Asesorías Académicas
        </Link>
        <Link to="/register/room" className={buttonStyle}>
          <FaBed size={80} className="text-[#80CC29] mb-3" />
          Servicio de Habitaciones
        </Link>
        <Link to="/register/other" className={buttonStyle}>
          <FaEllipsisH size={80} className="text-[#FB783E] mb-3" />
          Otros Servicios
        </Link>
      </div>
    </div>
  );
};

export default RegisterCategory;
