import { useContext,useEffect } from 'react';
import { ServiceContext } from '../../../contexts/serviceContext'
import FormsComponentsStyle from '../servicesComponentesStyle/formsComponentsStyle';
import { FaTrash, FaPlus } from 'react-icons/fa';
const HorarioCampo = () => {
    const {serviceData, currentOption, setServiceData, optionsHoraInicio, fetchData, isUpdated
        , setIsUpdated, horarios, setHorarios} = useContext(ServiceContext);
    const {
        labelClassname,
        selectDesingHorario,
        labelClassnameHorario
    } = FormsComponentsStyle;

    
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
        setHorarios(newHorarios);
        
        setServiceData({
            ...serviceData,
            horarios: newHorarios,
          });  
      };

    useEffect(() => {
        if (currentOption === 'edit' ) {
            setHorarios(serviceData.horarios || []);
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
        </>
    );
}

export default HorarioCampo;