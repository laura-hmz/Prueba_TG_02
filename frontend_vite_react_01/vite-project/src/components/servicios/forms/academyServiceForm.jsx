import { FaTrash, FaPlus } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import FormsComponentsStyle from '../servicesComponentesStyle/formsComponentsStyle';
import PropTypes from 'prop-types';
import { updateService, createService } from '../../../api/servicesApi';


const AcademyServiceForm = ({service, option}) =>{
    
    const [currentOption, setCurrentOption] = useState(option);
    const setOption = (newOption) => {
        setCurrentOption(newOption);
    };

    const [serviceData, setServiceData] = useState({
       
        id_usuario: '64e2ff80fed5d5347f0c5b24',
        nombre: '',
        descripcion: '',
        horarios:[],
        tipo_servicio: "Asesorías Académicas",
        estado: 1,
        area_0: '',
        tipo_habitacion_1: '',
        caracteristicas_habitacion_1: [],
        tipo_vehiculo_2: '',
        area_otro_servicio_3: '',

      });

    const optionsHoraInicio = [
        "00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00",
        "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00",
        "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"
    ];

    const [horarios, setHorarios] = useState([
        { dia_semana: '', hora_de_inicio: '', hora_de_finalizacion: '' } 
    ]);
    
    const agregarHorario = () => {
        setHorarios([...horarios, { dia_semana: '', hora_de_inicio: '', hora_de_finalizacion: '' }]);
    };


    const eliminarHorario = (index) => {
        const nuevosHorarios = [...horarios];
        nuevosHorarios.splice(index, 1);
        setHorarios(nuevosHorarios);
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
          if (type === 'checkbox') {
            // Verificamos si el checkbox está marcado y asignamos el valor correspondiente
            const checkboxValue = checked ? name.replace(/_/g, ' ') : '';
            setServiceData({
              ...serviceData,
              [name]: checkboxValue,
            });
          } else {
            setServiceData({
              ...serviceData,
              [name]: value,
            });
          }
        
      };

    const handleHorarioChange = (e, index) => {
        const { name, value } = e.target;
        const newHorarios = [...horarios];
        newHorarios[index][name] = value;
        setHorarios(newHorarios);
        
        setServiceData({
            ...serviceData,
            horarios: newHorarios,
          });
      };
    

      const handleUpdateService = async () => {
        try {
          if (currentOption === 'register') {
            console.log('Registrando un nuevo servicio:', serviceData.horarios);
            createService(serviceData);

          } else if (currentOption === 'edit') {
            console.log('Actualizando servicio existente:', serviceData);
            updateService(serviceData);
            setCurrentOption('show');
          }
        } catch (error) {
          console.error('Error al actualizar/registrar el servicio:', error);
        }
      };
      

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Esto es lo que se va a guardar',serviceData);
        handleUpdateService();
    };
  
    useEffect(() => {
        if (currentOption === 'edit' || currentOption === 'show') {
          setServiceData(service);
          setHorarios(service.horarios || []);
        } else if (currentOption === 'register') {
            console.log('ñejeje');
        }
      }, [service, currentOption]);

   const {
    labelClassname,
    selectDesing,
    inputDesing,
    divDesing,
    divEspace,
    labelClassnameHorario,
    selectDesingHorario,
    tituloServicio,
    contenedor,
  } = FormsComponentsStyle;

  return (

    <div className={contenedor}>
        <form  onSubmit={handleSubmit}>
        
            <div className={divDesing}>
                <div className="flex justify-end">
                {currentOption=== 'show' ? (
                    <button
                        className="outline-none glass shadow-2xl rounded p-3 bg-yellow-400 hover:border-white hover:border-solid hover:border-[1px] hover:text-white font-bold"
                        onClick={() => setOption('edit')} // Cambiar a la opción de edición
                    >
                        Editar
                    </button>
                    ) : null
                }
                </div>

                <div className={divEspace}>
                    <h1 className={tituloServicio}> {currentOption=== 'edit' ? 'Editar asesoría académica' : 'Registrar asesoría académica'} </h1>
                    <label className={labelClassname} htmlFor="nombre">Nombre de la matéria:</label>
                      <input
                        className={inputDesing}
                        type="text"
                        placeholder="Ejemplo: Calculo II"
                        id="nombre"
                        name="nombre"
                        value={serviceData.nombre || ''}
                        onChange={handleChange}
                        disabled={currentOption=== 'show'}
                        required
                        
                      />
                </div>

                {currentOption !== 'register' && (
                    <div className={divEspace}>
                        <label className={labelClassname} htmlFor="estado">
                        Estado:
                        </label>
                        <select
                        className={selectDesing}
                        id="estado"
                        name="estado"
                        value={serviceData.estado}
                        onChange={handleChange}
                        disabled={currentOption === 'show'}
                        required
                        >
                        <option value="0">Inactivo</option>
                        <option value="1">Activo</option>
                        </select>
                    </div>
                )}

                <div className={divEspace}>
                    <label htmlFor="descripcion" className={labelClassname}>Descripción del servicio:</label>
                    <textarea
                        className={inputDesing}
                        type="text"
                        placeholder="Este espacio es para que complementes la información sobre el servicio"
                        id="descripcion"
                        name="descripcion"
                        value={serviceData.descripcion || ''}
                        onChange={handleChange}
                        disabled={currentOption === 'show'}
                        rows={3}
                       
                    />
                </div>

                <div className={divEspace}>
                <label className={labelClassname} htmlFor="area_0">Área:</label>
                    <select
                        className={selectDesing}
                        id="area_0"
                        name="area_0"
                        value={serviceData.area_0 || ''}
                        onChange={handleChange}
                        disabled={currentOption === 'show'}
                        required
                    >
                        <option value="">----</option>
                        <option value="Ingenieria de sistemas">Ingeniería de sistemas</option>
                        <option value="Administracion de empresas">Administración de empresas</option>
                        <option value="Ingenieria de alimentos">Ingeniería de alimentos</option>
                        <option value="Construccion">Construcción</option>
                        <option value="Trabajo social">Trabajo social</option>
                        <option value="Contaduria publica">Contaduría pública</option>
                        <option value="Tecnologia en desarrollo de software">Tecnología en desarrollo de software</option>
                        <option value="Tecnologia en electronica">Tecnología en electrónica</option>
                        <option value="Tecnologia en alimentos">Tecnología en alimentos</option>
                    </select>
                </div>

                <div className='mb-3'>
                    <h1 className={labelClassname}>
                        Agregar horarios disponibles:
                    </h1>
                    <button type="button"
                        disabled={currentOption === 'show'} 
                        onClick={agregarHorario} className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-3 mt-1 rounded">
                        <FaPlus /> 
                    </button>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <h1 className= {labelClassnameHorario} style={{ flex: 1 }}>Día</h1>
                    <h1 className= {labelClassnameHorario} style={{ flex: 1 }}>Hora de inicio</h1>
                    <h1 className= {labelClassnameHorario} style={{ flex: 1 }}>Hora finalización</h1>
                    <FaTrash className='mr-4 white-icon'/>
                    
                </div>

                <div className="w-full border-t border-b mb-8 border-gray-300">
                    {horarios.map((horario, index) => (
                        <div key={index} className="flex gap-3 mb-8">
                            <select
                                className={selectDesingHorario}
                                name='dia_semana'
                                value={horario.dia_semana || ''}
                                disabled={currentOption === 'show'}
                                required
                                onChange={(e) => handleHorarioChange(e, index)}
                            >
                                <option value="">----</option>
                                <option value="Lunes">Lunes</option>
                                <option value="Martes">Martes</option>
                                <option value="Miércoles">Miércoles</option>
                                <option value="Jueves">Jueves</option>
                                <option value="Viernes">Viernes</option>
                                <option value="Sábado">Sábado</option>
                                <option value="Domingo">Domingo</option>
                            </select>
                            <select
                                className={selectDesingHorario}
                                name='hora_de_inicio'
                                value={horario.hora_de_inicio || ''}
                                disabled={currentOption === 'show'}
                                required
                                onChange={(e) => handleHorarioChange(e, index)}
                            >
                                {/* Opciones de hora de inicio aquí */}
                                <option value="">----</option>
                                {optionsHoraInicio.map((hora, index) => (
                                    <option key={index} value={index}>{hora}</option>
                                ))}
                            </select>
                            
                            <select
                                className={selectDesingHorario}
                                name='hora_de_finalizacion'
                                value={horario.hora_de_finalizacion || ''}
                                disabled={currentOption === 'show'}
                                required
                                onChange={(e) => handleHorarioChange(e, index)}
                            >
                                {/* Opciones de hora de fin  */}
                                <option value="">----</option>
                                {optionsHoraInicio.map((hora, index) => (
                                    <option key={index} value={index}>{hora}</option>
                                ))}
                                
                            </select>
                            <button
                                type="button"
                                className="eliminarHorario bg-red-400 hover:bg-red-500 text-white font-bold py-1  px-3 rounded "
                                onClick={() => eliminarHorario(index)}
                                disabled={currentOption === 'show' || horarios.length <= 1}
                            >
                                <FaTrash /> 
                            </button>
                        </div>
                    ))}
                
                </div>

                <div >
                    {currentOption !== 'show' && (
                        <button
                            className="outline-none glass shadow-2xl w-full rounded p-3 bg-green-400 hover:border-white hover:border-solid hover:border-[1px] hover:text-white font-bold"
                            type="submit"
                        >
                            {currentOption === 'edit' ? 'Guardar cambios' : currentOption === 'register' ? 'Registrar nueva asesoría' : ''}
                        </button>
                    )}

                </div>

            </div>
        
        </form>
    </div>
  );
}

AcademyServiceForm.propTypes = {
  option: PropTypes.string.isRequired,
  service: PropTypes.object
}


export default AcademyServiceForm;