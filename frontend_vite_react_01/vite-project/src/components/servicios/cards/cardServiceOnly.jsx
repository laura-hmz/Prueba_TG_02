
import { useContext } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import {CardServiceContext } from '../../../contexts/cardServiceContext';
import { UserContext } from '../../../contexts/userContext';
import ImageCarousel from '../../carrusel/imageCarrusel';
import { ServiceContext } from '../../../contexts/serviceContext';
import BackButton from '../../botoneNavegacion/backButton';
import ImagenesUrl from '../../../images/imagenesUrl'

const CardServiceOnly = () => {
  const {savedServiceIds, handleClick,onlyService,userDataOnlyService, buttonClick } = useContext(CardServiceContext);
  const {images} = useContext(ServiceContext);
  const {userData} = useContext(UserContext);

  const {
    urlTransporte,
    urlHabitaciones,
    urlAsesorias,
    urlOtrosServicios,
    
} = ImagenesUrl;

  const parrafo = "leading-relaxed lg:text-xl md:text-lg mb-3"
  const titulo = 'title-font text-lg font-medium text-gray-900'
  return (
    <section className="antialiased  font-sans">
      <div className="container px-1 md:px-7 lg:px-7 mt-16 py-9 mx-auto">
        <div className="flex flex-wrap  relative">
            <div key={onlyService._id} className="  p-4  lg:w-4/5 md:w-4/5 w-full mx-auto relative">
              <div className="bg-white  shadow-xl rounded-lg overflow-hidden relative">
              {onlyService.imagenPortada && onlyService.imagenPortada.url ? (
                  <img
                    className="lg:h-70 md:h-60 h-36 w-full object-cover object-center"
                    src={onlyService.imagenPortada.url}
                    alt={onlyService._id}
                    loading="lazy"
                  />
                ) : (
                  <img
                    className="lg:h-48 md:h-36 h-36 w-full object-cover object-center"
                    src={
                      onlyService.tipo_servicio === 'Servicio de transporte'
                        ? urlTransporte
                        : onlyService.tipo_servicio === 'Servicio de habitaciones'
                        ? urlHabitaciones
                        : onlyService.tipo_servicio === 'Asesorías Académicas'
                        ? urlAsesorias
                        : urlOtrosServicios
                    }
                    alt={onlyService._id}
                    loading="lazy"
                  />
                )}
                <BackButton />
                <button
                  className={`absolute top-4 right-4 disabled:cursor-not-allowed disabled:bg-gray-400 text-gray-600 px-3 border border-gray-100 border-2 py-1 rounded focus:outline-none ${
                    
                    buttonClick
                      ? 'bg-gray-400 text-gray-600'
                      : 'bg-[#f0434f] text-white hover:bg-[#ba162d]'
                  }`}
                  onClick={() => handleClick(onlyService._id)}
                  style={{ zIndex: 2 }}
                  disabled={userData._id === userDataOnlyService._id} 
                >
                  {savedServiceIds.has(onlyService._id) ? '¡Guardado!' : 'Guardar servicio'}
                </button>

                <div className="p-6 ml-2 mr-2 lg:p-10 lg:ml-6 lg:mr-6">
                  <h2 className="tracking-widest lg:text-xl md:text-xl uppercase text-md title-font font-medium text-gray-400 mb-1">
                    {onlyService.tipo_servicio}
                  </h2>
                  <h1 className="text-xl lg:text-2xl md:text-2xl uppercase font-semibold text-gray-800 mb-3">
                    {onlyService.nombre}
                  </h1>
                  {images && (
                    <div className='mt-2 mb-6'>
                      <ImageCarousel images={images} />
                    
                    </div>
                  )}
                  <p className="lg:text-2xl md:text-2xl text-2xl  text-gray-900 mb-3">$ {onlyService.precio} COP</p>
                  <h1 className={titulo}>Estado:</h1>
                  <p className={parrafo}>
                    {onlyService.estado === 1 ? "Disponible" : "No disponible"}
                  </p>

                  {onlyService.area_0 && (
                    <>
                      <h1 className={titulo}>Área/campo:</h1>
                      <p className={parrafo}>{onlyService.area_0}</p>
                    </>
                  )}

                  {onlyService.area_otro_servicio_3 && (
                    <>
                      <h1 className={titulo}>Área de servicio:</h1>
                      <p className={parrafo}>{onlyService.area_otro_servicio_3}</p>
                    </>
                  )}

                  {onlyService.tipo_vehiculo_2 && (
                    <>
                      <h1 className={titulo}>Tipo de vehículo:</h1>
                      <p className={ 'text-md lg:text-lg md:text-md capitalize mb-3'}>{onlyService.tipo_vehiculo_2}</p>
                    </>
                  )}

                  <h1 className={titulo}>Descripción:</h1>
                  <p className={parrafo}>{onlyService.descripcion}</p>
                  

                  {onlyService.horarios?.length > 0 && (
                    <ul className='mb-3'>
                      <h1 className={titulo}>Horarios:</h1>
                      {onlyService.horarios.map((horario) => (
                        <li key={horario._id}>
                          <p className={'text-sm lg:text-lg md:text-md uppercase'}>{horario.dia_semana}, de {horario.hora_de_inicio} a {horario.hora_de_finalizacion} horas</p>
        
                        </li>
                      ))}
                    </ul>
                  )}

                  {onlyService.caracteristicas_habitacion_1?.length > 0 && (
                    <ul className='mb-3'>
                      <h1 className={titulo}>Características de la habitación:</h1>
                      {onlyService.caracteristicas_habitacion_1.map((caracteristica) => (
                        <li key={caracteristica._id}>
                          <p className='text-sm lg:text-lg md:text-md uppercase text-gray-500 '>{caracteristica.nombre}</p>
                          <p className='text-md mb-3 '>{caracteristica.descripcion}</p>
                        </li>
                      ))}
                    </ul>
                  )}

                  
                  
                  <div className="text-xs lg:text-sm md:text-sm font-bold tracking-widest text-gray-400 mb-3">
                    Ultima vez actualizado: {onlyService.updatedAt}
                  </div>


                  <div className="pt-3 pb-4 border-t border-gray-300">
                    <div className="text-xs md:text-sm lg:text-sm font-bold tracking-widest text-gray-400">
                      CONTACTO
                    </div>
                    <div className="flex items-center pt-2">
                      <div
                        className="bg-cover bg-center  rounded-full mr-3"
                        
                      >
                        <FaUserCircle className="text-4xl"/> 
                      </div>
                      <div>
                        <p className="text-m md:text-lg lg:text-lg font-bold text-gray-600">
                        {userDataOnlyService.nombre || 'Nombre Desconocido'}
                        </p>
                        <p className="text-sm md:text-md lg:text-md text-gray-700">
                        {userDataOnlyService.telefono || 'Telefono desconocido'}
                        </p>
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

export default CardServiceOnly;
