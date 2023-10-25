
import { useContext } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import {CardServiceContext } from '../../../contexts/cardServiceContext';
//import { UserContext } from '../../contexts/userContext';
//import ImageCarousel from '../carrusel/imageCarrusel';
//import { ServiceContext } from '../../contexts/serviceContext';
import SearchFormsStyle from '../../../components/servicios/servicesComponentesStyle/formsComponentsStyle';

const CardUser = () => {
  const {userDataOnlyService } = useContext(CardServiceContext);
  //const {images} = useContext(ServiceContext);

  const parrafo = "leading-relaxed lg:text-xl md:text-lg mb-3 capitalize"
  const titulo = 'text-md md:text-smd lg:text-md font-bold tracking-widest text-gray-500 uppercase'

  const {
    divGrid,
    divGridSub,
} = SearchFormsStyle;

  return (
    <section className="antialiased  font-sans">
      <div className="container px-7 mt-10 pt-10 mx-auto">
        <div className="flex flex-wrap  relative">
            <div className="  p-4 lg:w-6/7 md:w-6/8 w-full mx-auto relative">
              <div className="bg-white  shadow-xl border border-gray-100 rounded-lg overflow-hidden relative">
                <div className="p-6 ml-2 mr-2 lg:p-10 lg:ml-6 lg:mr-6 ">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="md:col-span-1  px-2  flex items-center ">
                      <FaUserCircle size={140} className="text-[#0E87CC] mb-3"/>
                    </div>
                    <div className="md:col-span-3 p-4">
                      <div className={divGrid}>
                        <div className={divGridSub + 'px-4 '}>
                          <h1 className={titulo}>Nombre:</h1>
                          <p className={parrafo}>
                            {userDataOnlyService.nombre || 'Desconocido'}
                          </p>

                          <h1 className={titulo}>Edad:</h1>
                          <p className={parrafo}>
                            {userDataOnlyService.edad || 'Desconocido'}
                          </p>

                          <h1 className={titulo}>Sexo:</h1>
                          <p className={parrafo}>
                            {userDataOnlyService.sexo || 'Desconocido'}
                          </p>

                        </div>
                        <div className={divGridSub + 'px-2 '}>
                          <h1 className={titulo}>Carrera:</h1>
                          <p className={parrafo}>
                            {userDataOnlyService.carrera || 'Desconocido'}
                          </p>

                          <h1 className={titulo}>Semestre:</h1>
                          <p className={parrafo}>
                            {userDataOnlyService.semestre || 'Desconocido'}
                          </p>

                          <h1 className={titulo}>Teléfono:</h1>
                          <p className={parrafo}>
                            {userDataOnlyService.telefono || 'Desconocido'}
                          </p>

                        </div>
                      </div>
                        
                    </div>
                </div>

                </div>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
  
};

export default CardUser;
