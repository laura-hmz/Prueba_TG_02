import { useContext,useEffect, useState } from 'react';
import { ServiceContext } from '../../../contexts/serviceContext'
import FormsComponentsStyle from '../servicesComponentesStyle/formsComponentsStyle';
import { FaTrash, FaPlus } from 'react-icons/fa';
const HorarioCampo = () => {
    const {serviceData, currentOption, setServiceData, optionsHoraInicio, fetchData, isUpdated
        , setIsUpdated, horarios, setHorarios, isRegisterService} = useContext(ServiceContext);
    const {
        labelClassname,
        selectDesingHorario,
        labelClassnameHorario,
        divGrid,
        divGridSub,
    } = FormsComponentsStyle;
     // Estado para el mensaje de error
     const [error, setError] = useState('');

     // Función de validación
     const validateHorario = (horario) => {
        const horaInicio = horario.hora_de_inicio 
        const horaFinalizacion = horario.hora_de_finalizacion
         if (parseInt(horaInicio)>= parseInt(horaFinalizacion) ) {
             return 'Asegurate de que la hora de finalización sea mayor a la de inicio';
         }
 
         return '';
     };

    
    const agregarHorario = () => {
        setHorarios([...horarios, { dia_semana: '', hora_de_inicio: '', hora_de_finalizacion: '' }]);
    };


    const eliminarHorario = (index) => {
        const nuevosHorarios = [...horarios];
        nuevosHorarios.splice(index, 1);
        setHorarios(nuevosHorarios);
    };
    
    const handleHorarioChange = (e, index) => {
        const { name, value } = e.target;
        const newHorarios = [...horarios];
        newHorarios[index][name] = value;

        // Validación de hora de inicio y finalización
        const error = validateHorario(newHorarios[index]);
        setError(error);

        setHorarios(newHorarios);
        
        setServiceData({
            ...serviceData,
            horarios: newHorarios,
        });  
    };


    useEffect(() => {
        if (currentOption === 'edit' ) {
            setHorarios(serviceData.horarios || []);
            //console.log('horarios:', serviceData.horarios);
        } else if (currentOption === 'show'&& isUpdated) {
            setHorarios(serviceData.horarios || []);
            
        } else if(currentOption === 'show') {
            setHorarios(serviceData.horarios || []);
            //console.log('horarios:', horarios);
            //console.log('serviceData:', serviceData);
        }
        //console.log('horarios:',serviceData.horarios );
    }, [currentOption, isUpdated, fetchData, serviceData, setIsUpdated, setHorarios]);

    return (
        <>
            <div className='mb-3'>
                <h1 className={labelClassname}>
                    Horarios disponibles:
                </h1>
                <div className={divGrid + ' '}>
                    <div className={divGridSub+' text-md text-gray-500'}>
                        Puedes click al botón *+* para agregar un horario si deseas
                    </div>
                    <button type="button"
                            disabled={currentOption === 'show' || isRegisterService} 
                            onClick={agregarHorario} className=" start-end disabled:bg-blue-300 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-3 mt-1 rounded">
                            <FaPlus /> 
                        </button>
                    
                </div>
                
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <h1 className= {labelClassnameHorario} style={{ flex: 1 }}>Día</h1>
                <h1 className= {labelClassnameHorario} style={{ flex: 1 }}>Hora de inicio</h1>
                <h1 className= {labelClassnameHorario} style={{ flex: 1 }}>Hora finalización</h1>
                <FaTrash className='mr-4 white-icon'/>
                    
            </div>
            <div className="w-full border-t border-b mb-8 border-gray-300">
                    {horarios.map((horario, index) => (
                        <div key={index} >
                            {error && <div  className="text-red-500">{error}</div>}
                            <div className='flex gap-3 mb-8'>
                            <select
                                className={selectDesingHorario}
                                name='dia_semana'
                                value={horario.dia_semana || ''}
                                disabled={currentOption === 'show' || isRegisterService}
                                required
                                onChange={(e) => handleHorarioChange(e, index)}
                            >
                                <option value="">----</option>
                                <option value="Lunes">Lunes</option>
                                <option value="Martes">Martes</option>
                                <option value="Miercoles">Miércoles</option>
                                <option value="Jueves">Jueves</option>
                                <option value="Viernes">Viernes</option>
                                <option value="Sabado">Sábado</option>
                                <option value="Domingo">Domingo</option>
                            </select>
                            <select
                                className={selectDesingHorario}
                                name='hora_de_inicio'
                                value={horario.hora_de_inicio !== null ? horario.hora_de_inicio : ''}
                                disabled={currentOption === 'show' || isRegisterService}
                                required
                                onChange={(e) => handleHorarioChange(e, index)}
                            >
                                {/* Opciones de hora de inicio aquí */}
                                <option value=''>----</option>
                                {optionsHoraInicio.map((hora, index) => (
                                    <option key={index} value={index}>{hora}</option>
                                ))}
                            </select>
                            
                            <select
                                className={selectDesingHorario}
                                name='hora_de_finalizacion'
                                value={horario.hora_de_finalizacion || ''}
                                disabled={currentOption === 'show' || isRegisterService}
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
                                className="eliminarHorario bg-red-500 hover:bg-red-600 disabled:bg-red-300 text-white font-bold py-1  px-3 rounded "
                                onClick={() => eliminarHorario(index)}
                                disabled={currentOption === 'show' || horarios.length <= 1 || isRegisterService}
                            >
                                <FaTrash /> 
                            </button>
                            </div>
                        </div>
                       
                    ))}
                
                </div>
        </>
    );
}

export default HorarioCampo;