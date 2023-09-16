import { useState } from "react";
import {FaSmileWink, FaGripLinesVertical,FaRegGem,FaBars,FaTimes} from 'react-icons/fa';
import './navbar.css';
import { Link } from 'react-router-dom';

const Navbar2 = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const linksDesing = "font-poppins font-normal mr-5 hover:text-gray-900 cursor-pointer text-[16px] text-gray-600"

  return (
    <nav className="w-full flex py-4 justify-between bg-blue-500 items-center navbar relative">
      {/* Logo */}
      
      <Link to="/Home"className="flex title-font font-medium items-center mr-5 ml-12 text-gray-900  ">
        <FaSmileWink size={25} className="white-icon"/>
        <span className="ml-5 text-xl text-gray-800 cursor-pointer ">Explorar</span>
        
      </Link>

      {/* Desktop Navigation */}
      <ul className="list-none sm:flex hidden justify-start items-center flex-1 ml-10">
            <FaGripLinesVertical size={20} className="white-icon mr-5"/>
            <li className={linksDesing}>
                <Link to='/especialsearch'>Buscar Servicios</Link>
            </li>
            <li className={linksDesing}>
                <Link to='/userServices'>Mis Servicios</Link>
            </li>
            <li className={linksDesing}>
                <Link to="/savedServices">Servicios Guardados</Link>
            </li>
            <li className={linksDesing}>
                <Link to="/profile">Mi Perfil</Link>
            </li>
        </ul>

      {/* Mobile Navigation */}
      <div className="sm:hidden flex flex-1 justify-end items-center mr-8 relative">
        <button
          className="w-[28px] h-[28px] text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FaTimes size={20} className="white-icon"/> : <FaBars size={20} className="white-icon"/>}
        </button>

        {/* Sidebar */}
        {isMobileMenuOpen && (
          <div className="p-6 bg-blue-500 absolute top-[70px] right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar z-10">
            {/* Renderiza las opciones de navegación móvil aquí */}
            <ul className="list-none flex justify-end items-start flex-1 flex-col">
              <li className="font-poppins font-medium cursor-pointer text-[16px] text-white mb-4">
              <Link to='/especialsearch'>Buscar Servicios</Link>
              </li>
              <li className="font-poppins font-medium cursor-pointer text-[16px] text-white mb-4">
                    <Link to='/userServices'>Mis Servicios</Link>
              </li>
              <li className="font-poppins font-medium cursor-pointer text-[16px] text-white mb-4">
                    <Link to="/savedServices">Servicios Guardados</Link>
              </li>
              <li className="font-poppins font-medium cursor-pointer text-[16px] text-white">
                    <Link to="/profile">Mi Perfil</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar2;
