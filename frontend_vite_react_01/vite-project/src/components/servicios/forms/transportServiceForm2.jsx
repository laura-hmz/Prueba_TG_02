import { FaTrash, FaPlus } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import FormsComponentsStyle from '../servicesComponentesStyle/formsComponentsStyle';

const TransportServiceForm2 = () =>{

    const [params, setParams] = useState({
        diaSemana: '',
        descripcion: '',
        horaBusquedaInicio: '',
        horaBusquedaFinal: '',
        estado: '',
        nombre: '',
        tipo_servicio: '',
        area_0: '',
        tipo_habitacion_1: '',
        parqueadero_carro:false, 
        parqueadero_moto:false, 
        permite_mascota:false,
        tipo_vehiculo_2: '',
        area_otro_servicio_3: '',
        id_cliente: '64e71f3b5970aafb03f2a796', // Agrega el campo id_cliente aquí
      });

      

    const optionsHoraInicio = [
        "00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00",
        "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00",
        "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"
    ];

    const [horarios, setHorarios] = useState([
        { day: 'Lunes', startTime: '0', endTime: '0' } 
    ]);
    
    const agregarHorario = () => {
        setHorarios([...horarios, { day: 'Lunes', startTime: '0', endTime: '0' }]);
    };

    //const [modoEdicion, setModoEdicion] = useState(false);

    const eliminarHorario = (index) => {
        const nuevosHorarios = [...horarios];
        nuevosHorarios.splice(index, 1);
        setHorarios(nuevosHorarios);
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
      
        if (name === 'tipo_servicio') {
          // Si cambia la categoría, establece la nueva categoría y restablece los valores de búsqueda
          setParams({
            diaSemana: '',
            descripcion: '',
            horaBusquedaInicio: '',
            horaBusquedaFinal: '',
            estado: '',
            nombre: '',
            area_0: '',
            tipo_habitacion_1: '',
            parqueadero_carro: false,
            parqueadero_moto: false,
            permite_mascota: false,
            tipo_vehiculo_2: '',
            area_otro_servicio_3: '',
            id_cliente: '64e71f3b5970aafb03f2a796',
            [name]: value,
          });
        } else {
          if (type === 'checkbox') {
            // Verificamos si el checkbox está marcado y asignamos el valor correspondiente
            const checkboxValue = checked ? name.replace(/_/g, ' ') : '';
            setParams({
              ...params,
              [name]: checkboxValue,
            });
          } else {
            setParams({
              ...params,
              [name]: value,
            });
          }
        }
      };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes manejar el envío del formulario y enviar los datos
        console.log('Formulario enviado con exito');
        console.log(horarios);
    };

     //Diseño para el formulario
    //const labelClassname = ' block uppercase tracking-wide text-lg text-gray-600 text-md font-bold mb-4';
   
   

    const labelClassname = FormsComponentsStyle.labelClassname;
    const selectDesing=FormsComponentsStyle.selectDesing;
    const inputDesing=FormsComponentsStyle.inputDesing;
    const divDesing=FormsComponentsStyle.divDesing;
    //const buttonDesing=FormsComponentsStyle.buttonDesing;
    //const labelCheckBox=FormsComponentsStyle.labelCheckBox;
    const divEspace = FormsComponentsStyle.divEspace;
    const labelClassnameHorario = FormsComponentsStyle.labelClassnameHorario;
    const selectDesingHorario=FormsComponentsStyle.selectDesingHorario;
    const tituloServicio=FormsComponentsStyle.tituloServicio;
    const contenedor=FormsComponentsStyle.contenedor;


    // useEffect(() => {
    //     if (modoEdicion) {
    //       // Lógica para cargar los datos existentes en el formulario
    //       // Puedes usar el estado o los datos de tu aplicación para esto.
    //     }
    //   }, [modoEdicion]);
   
  return (

    <div className={contenedor}>
        <form  onSubmit={handleSubmit}>
        
            <div className={divDesing}>

                <div className={divEspace}>
                    <h1 className={tituloServicio}> Servicio de transporte </h1>
                    <label className={labelClassname} htmlFor="nombre">Nombre del servicio:</label>
                      <input
                        className={inputDesing}
                        type="text"
                        placeholder="Ejemplo: Servicio de moto"
                        id="nombre"
                        name="nombre"
                        value={params.nombre}
                        onChange={handleChange}
                        required
                        
                      />
                </div>
                
                <div className={divEspace}>
                    <label htmlFor="descripcion" className={labelClassname}>Descripción del servicio:</label>
                    <textarea
                        className={inputDesing}
                        type="text"
                        placeholder="Este espacio es para que complementes la información sobre el servicio"
                        id="descripcion"
                        name="descripcion"
                        value={params.descripcion}
                        onChange={handleChange}
                        rows={3}
                       
                    />
                </div>

                <div className={divEspace}>
                    <label className={labelClassname} htmlFor="tipo_vehiculo_2">Tipo de vehículo:</label>
                    <select
                        className={selectDesing}
                        id="tipo_vehiculo_2"
                        name="tipo_vehiculo_2"
                        value={params.tipo_vehiculo_2}
                        onChange={handleChange}
                        required
                        >
                        <option value="">----</option> 
                        <option value="carro">Carro</option>
                        <option value="moto">Moto</option>
                    </select>
                </div>

                <div className='mb-3'>
                    <h1 className={labelClassname}>
                        Agregar horarios disponibles:
                    </h1>
                    <button type="button" onClick={agregarHorario} className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-3 mt-1 rounded">
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
                                name='day'
                                value={horario.day}
                                onChange={(e) => {
                                const nuevosHorarios = [...horarios];
                                nuevosHorarios[index].day = e.target.value;
                                setHorarios(nuevosHorarios);
                                }}
                            >
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
                                name='startTime'
                                value={horario.startTime}
                                onChange={(e) => {
                                const nuevosHorarios = [...horarios];
                                nuevosHorarios[index].startTime = e.target.value;
                                setHorarios(nuevosHorarios);
                                }}
                            >
                                {/* Opciones de hora de inicio aquí */}
                                {optionsHoraInicio.map((hora, index) => (
                                    <option key={index} value={index}>{hora}</option>
                                ))}
                            </select>
                            
                            <select
                                className={selectDesingHorario}
                                name='endTime'
                                value={horario.endTime}
                                onChange={(e) => {
                                const nuevosHorarios = [...horarios];
                                nuevosHorarios[index].endTime = e.target.value;
                                setHorarios(nuevosHorarios);
                                }}
                            >
                                {/* Opciones de hora de fin  */}
                                {optionsHoraInicio.map((hora, index) => (
                                    <option key={index} value={index}>{hora}</option>
                                ))}
                                
                            </select>
                            <button
                                type="button"
                                className="eliminarHorario bg-red-400 hover:bg-red-500 text-white font-bold py-1  px-3 rounded "
                                onClick={() => eliminarHorario(index)}
                            >
                                <FaTrash /> 
                            </button>
                        </div>
                    ))}
                
                </div>

                <div >
                    <button
                        className=" outline-none glass shadow-2xl w-full  rounded p-3 bg-green-400 hover:border-white hover:border-solid hover:border-[1px] hover:text-white font-bold"
                        type="submit">
                        {/*modoEdicion ? "Guardar cambios" : "Crear"*/}
                        Guardar
                    </button>
                </div>

            </div>
        
        </form>
    </div>
  );
}

export default TransportServiceForm2;