
import { useContext } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import {CardServiceContext } from '../../contexts/cardServiceContext';
//import { UserContext } from '../../contexts/userContext';

const CardServiceOnly = () => {
  const {savedServiceIds, handleClick,onlyService,userDataOnlyService, buttonClick } = useContext(CardServiceContext);

  return (
    <section className="antialiased  font-sans">
      <div className="container px-5 md:mt-20 mt-14 py-5 mx-auto">
        <div className="flex flex-wrap -m-4 relative justify-center">
        
            <div key={onlyService._id} className="  p-4 md:w-2/3 relative">
              <div className="bg-white  shadow-xl rounded-lg overflow-hidden relative">
              {onlyService.tipo_servicio === 'Servicio de transporte' ? 
                    <img
                        className="lg:h-48 md:h-36 w-full object-cover object-center"
                        src={"https://img.freepik.com/free-photo/taxi-car-smartphone-with-reminder-popup-bell-notification-alert-bubble-chat-online-transportation-service-concept-web-banner-cartoon-icon-symbol-background-3d-illustration_56104-1995.jpg?w=740&t=st=1696590613~exp=1696591213~hmac=2b3b6902a893a0ad2029fbcb520b23052e0f2531802438457ea2edaec7baa04a"}
                        alt={onlyService._id}
                    />
                : onlyService.tipo_servicio === 'Servicio de habitaciones' ?
                    <img
                        className="lg:h-48 md:h-36 w-full object-cover object-center"
                        src={"https://img.freepik.com/foto-gratis/vista-modelo-casa-3d_23-2150761062.jpg?w=740&t=st=1697606643~exp=1697607243~hmac=e15ed78a73552e93e0b617b94ec61d78dbfa1357d45d0204a826906c8a32c5e5"}
                        alt={onlyService._id}
                    /> 
                : onlyService.tipo_servicio === 'Asesorías Académicas' ?
                    <img
                            className="lg:h-48 md:h-36 w-full object-cover object-center"
                            src={"https://img.freepik.com/psd-gratis/representacion-3d-naturaleza-muerta-telefono_23-2150425344.jpg?w=740&t=st=1697607616~exp=1697608216~hmac=b48370e6d111dc052189f1cb74fafc8027a209efdfa7ae6a96a51b4e0e320f6f"}
                            alt={onlyService._id}
                        /> 
                :   <img
                        className="lg:h-48 md:h-36 w-full object-cover object-center"
                        src={"https://img.freepik.com/foto-gratis/ilustracion-3d-telefono-inteligente-scooter-entrega-cajas-bolsas-papel_58466-14576.jpg?w=740&t=st=1697607462~exp=1697608062~hmac=f9c4be1e62389c35e5e0b16092d968d1641840572e03bec795123aff3b3109c9"}
                        alt={onlyService._id}
                    />  
                }
                <button
                  className={`absolute top-4 right-4 px-3 py-1 rounded focus:outline-none ${
                    
                    buttonClick
                      ? 'bg-gray-400 text-gray-600'
                      : 'bg-[#f0434f] text-white hover:bg-[#ba162d]'
                  }`}
                  onClick={() => handleClick(onlyService._id)}
                  style={{ zIndex: 2 }}
                >
                  {savedServiceIds.has(onlyService._id) ? '¡Guardado!' : 'Guardar'}
                </button>
                <div className="p-6 ml-6 mr-6">
                  <h2 className="tracking-widest uppercase text-md title-font font-medium text-gray-400 mb-1">
                    {onlyService.tipo_servicio}
                  </h2>
                  <h1 className="text-2xl uppercase font-semibold text-gray-800 mb-3">
                    {onlyService.nombre}
                  </h1>
                  <p className="text-3xl text-gray-900 mb-3">$ {onlyService.precio} COP</p>
                  <h1 className="title-font text-lg font-medium text-gray-900">Estado:</h1>
                  <p className="leading-relaxed mb-3">
                    {onlyService.estado === 1 ? "Disponible" : "No disponible"}
                  </p>

                  <h1 className="title-font text-lg font-medium text-gray-900">Descripción:</h1>
                  <p className="leading-relaxed mb-3">{onlyService.descripcion}</p>
                  
                  {onlyService.area_0 && (
                    <>
                      <h1 className="title-font text-lg font-medium text-gray-900">Área/campo:</h1>
                      <p className="leading-relaxed mb-3">{onlyService.area_0}</p>
                    </>
                  )}

                  {onlyService.area_otro_servicio_3 && (
                    <>
                      <h1 className="title-font text-lg font-medium text-gray-900">Área de servicio:</h1>
                      <p className="leading-relaxed mb-3">{onlyService.area_otro_servicio_3}</p>
                    </>
                  )}
                  
                  <h1 className="title-font text-lg font-medium text-gray-900">Horarios:</h1>
                  <ul className='mb-3'>
                    {onlyService.horarios && onlyService.horarios.length > 0 ? (
                      onlyService.horarios.map((horario) => (
                        <li key={horario._id}>
                          <p className='text-sm uppercase'>{horario.dia_semana}, de {horario.hora_de_inicio} a {horario.hora_de_finalizacion} horas</p>
        
                        </li>
                      ))
                    ) : (
                      <li className='text-sm uppercase'>No hay horarios disponibles.</li>
                    )}
                  </ul>

                  {onlyService.caracteristicas_habitacion_1?.length > 0 && (
                    <ul className='mb-3'>
                      <h1 className="title-font text-lg font-medium text-gray-900">Características de la habitación:</h1>
                      {onlyService.caracteristicas_habitacion_1.map((caracteristica) => (
                        <li key={caracteristica._id}>
                          <p className='text-md font-semibold text-gray-500 '>{caracteristica.nombre}</p>
                          <p className='text-md mb-3 '>{caracteristica.descripcion}</p>
                        </li>
                      ))}
                    </ul>
                  )}

                  {onlyService.tipo_vehiculo_2 && (
                    <>
                      <h1 className="title-font text-lg font-medium text-gray-900">Tipo de vehículo:</h1>
                      <p className="leading-relaxed mb-3">{onlyService.tipo_vehiculo_2}</p>
                    </>
                  )}
                  
                  <div className="text-xs font-bold tracking-widest text-gray-400 mb-3">
                    Ultima vez actualizado: {onlyService.updatedAt}
                  </div>

                  

                  


                  <div className="pt-3 pb-4 border-t border-gray-300">
                    <div className="text-xs font-bold tracking-widest text-gray-400">
                      CONTACTO
                    </div>
                    <div className="flex items-center pt-2">
                      <div
                        className="bg-cover bg-center  rounded-full mr-3"
                        
                      >
                        <FaUserCircle className="text-4xl"/> 
                      </div>
                      <div>
                        <p className="text-m font-bold text-gray-600">
                        {userDataOnlyService.nombre || 'Nombre Desconocido'}
                        </p>
                        <p className="text-sm text-gray-700">
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
