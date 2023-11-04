import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { FaGripLinesVertical,FaRegGem,FaBars,FaTimes} from 'react-icons/fa';
import './navbar.css';
import { Link, useLocation } from 'react-router-dom';

const Navbar2 = () => {
  
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { logout, user } = useAuth0();
  const location = useLocation();
  const linksDesing = "font-poppins text-md pointer-events-auto mr-5 text-[16px] text-gray-100 transition-all hover:text-white hover:font-semibold  cursor-pointer";
  const linksDesing2 = "font-poppins font-medium cursor-pointer text-[16px] text-white mb-4";


  return (
    <div className="fixed top-0 w-full z-50">
      <h1 className="text-sm bg-[#CC1F33] text-gray-100 py-1 text-center border-b">{user.email}</h1>
      <nav className="w-full flex py-3 justify-between  bg-[#CC1F33] items-center navbar relative">
      <Link 
        to="/Home"className={`flex title-font font-medium hover:bold items-center ml-5 md:mr-2 md:ml-8 lg:mr-2 lg:ml-8 text-gray-900 ${location.pathname === '/Home' ? 'font-bold border-[#F3B0B7]  border-b-2  text-white ' : 'font-normal'}`}>
        <FaRegGem size={25} className="white-icon"/>
        <span className={`ml-3 text-xl text-white  cursor-pointer `}>
          Home</span>
      </Link>
      {/* Desktop Navigation */}
      <ul className="list-none sm:flex hidden justify-start items-center flex-1 ml-10">
            <FaGripLinesVertical size={20} className="white-icon mr-5"/>
            <li className={linksDesing}>
                <Link
                  className={`py-5 px-2  ${location.pathname === '/especialsearch' ? 'font-semibold border-[#F3B0B7] py-5 border-b-2 bg-[#E03448] text-white ' : 'font-normal'}`}
                  to='/especialsearch'>Buscar Servicios</Link>
            </li>
            <li className={linksDesing}>
                <Link 
                  className={`py-5 px-2  ${location.pathname === '/offerService' ? 'font-semibold border-[#F3B0B7] py-5 border-b-2 bg-[#E03448] text-white ' : 'font-normal'}`}
                  to='/offerService'>Ofrecer Servicios</Link>
            </li>
            <li className={linksDesing}>
                <Link 
                  className={`py-5 px-2  ${location.pathname === '/userServices' ? 'font-semibold border-[#F3B0B7] py-5 border-b-2 bg-[#E03448] text-white ' : 'font-normal'}`}
                  to='/userServices'>Mis Servicios</Link>
            </li>
            <li className={linksDesing}>
                <Link 
                   className={`py-5 px-2  ${location.pathname === '/savedServices' ? 'font-semibold border-[#F3B0B7] py-5 border-b-2 bg-[#E03448] text-white ' : 'font-normal'}`}
                  to="/savedServices">Servicios Guardados</Link>
            </li>
            <li className={linksDesing}>
                <Link 
                   className={`py-5 px-2  ${location.pathname === '/profile' ? 'font-semibold border-[#F3B0B7] py-5 border-b-2 bg-[#E03448] text-white ' : 'font-normal'}`}
                  to="/profile">Mi Perfil</Link>
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
      <div className="sm:hidden flex flex-1 justify-end items-center mr-4 relative">
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
            <li className={`${linksDesing2} ${location.pathname === "/Home" ? 'font-semibold underline' : 'font-normal'}`}>
              <Link to="/Home">- Home</Link>
              </li>

              <li className={`${linksDesing2} ${location.pathname === '/especialsearch' ? 'font-semibold underline' : 'font-normal'}`}>
              <Link to='/especialsearch'>- Buscar Servicios</Link>
              </li>
              <li className={`${linksDesing2} ${location.pathname === '/userServices' ? 'font-semibold underline' : 'font-normal'}`}>
                    <Link to='/userServices'>- Mis Servicios</Link>
              </li>
              <li className={`${linksDesing2} ${location.pathname === '/savedServices' ? 'font-semibold underline' : 'font-normal'}`}>
                    <Link to="/savedServices">- Servicios Guardados</Link>
              </li>
              <li className={`${linksDesing2} ${location.pathname === '/offerService' ? 'font-semibold underline' : 'font-normal'}`}>
                    <Link to='/offerService'>- Ofrecer Servicios</Link>
              </li>
              <li className={`${linksDesing2} ${location.pathname === '/profile' ? 'font-semibold underline' : 'font-normal'}`}>
                    <Link to="/profile">- Mi Perfil</Link>
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
