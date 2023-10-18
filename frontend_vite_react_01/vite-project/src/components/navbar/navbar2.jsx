import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { FaGripLinesVertical,FaRegGem,FaBars,FaTimes} from 'react-icons/fa';
import './navbar.css';
import { Link, useLocation } from 'react-router-dom';

const Navbar2 = () => {
  
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { logout } = useAuth0();
  const location = useLocation();
  const linksDesing = "font-poppins  mr-5 text-[16px] text-gray-100 transition-all hover:text-white hover:font-semibold  cursor-pointer";
  const linksDesing2 = "font-poppins font-medium cursor-pointer text-[16px] text-white mb-4";

  return (
    <div className="fixed top-0 w-full z-50">
      <nav className="w-full flex py-4 justify-between  bg-[#CC1F33] items-center navbar relative">
      {/* Logo */}
      
      <Link to="/Home"className="flex title-font font-medium  hover:bold items-center mr-5 ml-12 text-gray-900  ">
        <FaRegGem size={25} className="white-icon"/>
        <span className={`ml-5 text-xl text-white cursor-pointer ${location.pathname === '/Home' ? ' font-bold' : 'hover:font-bold'}`}>Explorar</span>
        
      </Link>

      {/* Desktop Navigation */}
      <ul className="list-none sm:flex hidden justify-start items-center flex-1 ml-10">
            <FaGripLinesVertical size={20} className="white-icon mr-5"/>
            <li className={`${linksDesing} ${location.pathname === '/especialsearch' ? 'font-semibold text-white' : 'font-normal'}`}>
                <Link to='/especialsearch'>Buscar Servicios</Link>
            </li>
            <li className={`${linksDesing} ${location.pathname === '/offerService' ? 'font-semibold text-white' : 'font-normal'}`}>
                <Link to='/offerService'>Ofrecer Servicios</Link>
            </li>
            <li className={`${linksDesing} ${location.pathname === '/userServices' ? 'font-semibold text-white' : 'font-normal'}`}>
                <Link to='/userServices'>Mis Servicios</Link>
            </li>
            <li className={`${linksDesing} ${location.pathname === '/savedServices' ? 'font-semibold text-white' : 'font-normal'}`}>
                <Link to="/savedServices">Servicios Guardados</Link>
            </li>
            <li className={`${linksDesing} ${location.pathname === '/profile' ? 'font-semibold text-white' : 'font-normal'}`}>
                <Link to="/profile">Mi Perfil</Link>
            </li>

        </ul>
        <div className="hidden sm:flex">
  <button
    onClick={() => logout({ returnTo: window.location.origin })}
    className="inline-flex items-center hover:scale-105 bg-gray-100 border-0 mr-10 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-gray-600 mt-4 md:mt-0"
  >
    Cerrar sesión
  </button>
</div>

        
        
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
          <div className="p-6 bg-[#f0434f] absolute top-[70px] right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar z-10">
            {/* Renderiza las opciones de navegación móvil aquí */}
            <ul className="list-none flex justify-end items-start flex-1 flex-col">
              <li className={`${linksDesing2} ${location.pathname === '/especialsearch' ? 'font-semibold underline' : 'font-normal'}`}>
              <Link to='/especialsearch'>Buscar Servicios</Link>
              </li>
              <li className={`${linksDesing2} ${location.pathname === '/userServices' ? 'font-semibold underline' : 'font-normal'}`}>
                    <Link to='/userServices'>Mis Servicios</Link>
              </li>
              <li className={`${linksDesing2} ${location.pathname === '/savedServices' ? 'font-semibold underline' : 'font-normal'}`}>
                    <Link to="/savedServices">Servicios Guardados</Link>
              </li>
              <li className={`${linksDesing2} ${location.pathname === '/offerService' ? 'font-semibold underline' : 'font-normal'}`}>
                    <Link to='/offerService'>Ofrecer Servicios</Link>
              </li>
              <li className={`${linksDesing2} ${location.pathname === '/profile' ? 'font-semibold underline' : 'font-normal'}`}>
                    <Link to="/profile">Mi Perfil</Link>
              </li>
              <button
                onClick={() => logout({ returnTo: window.location.origin })}
                className="sm:hidden inline-flex  hover:scale-105 bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-gray-600  md:mt-0"
              >
                Cerrar sesión
              </button>
      
            </ul>
          </div>
        )}
      </div>
    </nav>

    </div>
    
  );
};

export default Navbar2;
