
import { useContext } from 'react';
import { FaUserCircle,FaThumbtack } from 'react-icons/fa';
import {CardServiceContext } from '../../../contexts/cardServiceContext';
import SearchFormsStyle from '../../../components/servicios/servicesComponentesStyle/formsComponentsStyle';
import BackButton from '../../botoneNavegacion/backButton';

const CardUser = () => {
  const {userDataOnlyService } = useContext(CardServiceContext);
  //const {images} = useContext(ServiceContext);

  const parrafo = "leading-relaxed lg:text-lg md:text-xg mb-3 capitalize"
  const titulo = 'text-md md:text-smd lg:text-md font-bold tracking-widest text-gray-500 uppercase'

  const {
    divGrid,
    divGridSub,
} = SearchFormsStyle;

  return (
    <section className="antialiased  font-sans">
      <div className="container px-7 mt-16 pt-10 mx-auto">
        <div className="flex flex-wrap  relative">
            <div className="  p-2 lg:w-6/7 md:w-6/8 w-full mx-auto relative">
              <div className="bg-gray-100  shadow-xl border border-gray-100 rounded-lg overflow-hidden relative">
                <div className="p-2 ml-2 mr-2 lg:p-10 lg:ml-6 lg:mr-6 ">
                  <div className='mb-14 md:mb-0 lg:mb-0'><BackButton /></div>
                  <div className="mb-4 text-center flex border-b-2 items-center justify-center">
                    <FaThumbtack className="text-yellow-500 text-xl mr-5 mb-2" />
                    <h1 className="text-md md:text-xl lg:text-xl font-bold tracking-widest mb-2 text-gray-500 uppercase">
                      Información del usuario
                    </h1>
                    <FaThumbtack className="text-yellow-500 text-xl ml-5 mb-2" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                    <div className="md:col-span-1  px-2  justify-center flex  items-center ">
                      <FaUserCircle size={140} className="text-[#0E87CC] mb-3 "/>
                    </div>
                    <div className="md:col-span-4 p-4">
                      <div className={divGrid}>
                        <div className={divGridSub + 'ml-8 '}>
                          <h2 className={titulo}>Nombre:</h2>
                          <p className={parrafo}>
                            {userDataOnlyService.nombre || 'Desconocido'}
                          </p>

                          <h2 className={titulo}>Edad:</h2>
                          <p className={parrafo}>
                            {userDataOnlyService.edad || 'Desconocido'}
                          </p>

                          <h2 className={titulo}>Sexo:</h2>
                          <p className={parrafo}>
                            {userDataOnlyService.sexo || 'Desconocido'}
                          </p>

                        </div>
                        <div className={divGridSub + ' '}>
                          <h2 className={titulo}>Carrera:</h2>
                          <p className={parrafo}>
                            {userDataOnlyService.carrera || 'Desconocido'}
                          </p>

                          <h2 className={titulo}>Semestre:</h2>
                          <p className={parrafo}>
                            {userDataOnlyService.semestre || 'Desconocido'}
                          </p>

                          <h2 className={titulo}>Teléfono:</h2>
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
