import { FaTrash, FaPlus } from 'react-icons/fa';
import { useState } from 'react';

const RoomServiceForm = () =>{
    const [horarios, setHorarios] = useState([
        { day: 'Lunes', startTime: '0', endTime: '0' } // Puedes agregar un horario inicial si lo deseas
      ]);
    
      const agregarHorario = () => {
        setHorarios([...horarios, { day: 'Lunes', startTime: '0', endTime: '0' }]);
      };
    
      const eliminarHorario = (index) => {
        const nuevosHorarios = [...horarios];
        nuevosHorarios.splice(index, 1);
        setHorarios(nuevosHorarios);
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes manejar el envío del formulario y enviar los datos
        console.log('Formulario enviado con exito');
        console.log(horarios);

      };

      const optionsHoraInicio = [
        "00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00",
        "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00",
        "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"
      ];
      const labelClassname = ' block uppercase tracking-wide text-lg text-gray-600 text-md font-bold mb-4';
      const divEspace = "mb-8"
      const labelClassnameHorario = ' block uppercase tracking-wide text-gray-500 text-sm font-bold mb-2 mt-4';
   
  return (

    <form className="bg-gray-200 p-4 md:p-8 lg:p-12 rounded-lg" onSubmit={handleSubmit}>
      
        <div className="w-full md:w-2/3 mx-auto space-y-4 " id="form">

            <div className={divEspace}>
                <label htmlFor="Service-Name" className={labelClassname}>Nombre del servicio:</label>
                <input
                    className=" shadow-2xl p-3 ex mb-4 w-full outline-none focus:border-solid focus:border-[1px] border-[#035ec5]   placeholder-gray-400"
                    type="text"
                    placeholder="Ejemplo: Asesorias de calculo II"
                    id="Service-Name"
                    name="Service-Name"
                    required
                />
            </div>
            
            <div className={divEspace}>
                <label htmlFor="Service-Description" className={labelClassname}>Descripción del servicio:</label>
                <textarea
                    className="p-3 mb-4 shadow-2xl glass w-full  placeholder-gray-400 outline-none focus:border-solid focus:border-[1px] border-[#035ec5]"
                    placeholder="Este espacio es para que complementes la información sobre el servicio"
                    id="Service-Description"
                    name="Service-Description"
                    rows={3}
                    defaultValue={''}
                />
            </div>

            
            <label htmlFor='TypeTransport' className={labelClassname} >Seleccione el tipo de vehículo:</label>
            <div className="radio-inputs">
                <select className="capitalize shadow-2xl p-3 mb-8 ex w-full outline-none focus:border-solid focus:border-[1px] border-[#035ec5] placeholder:text-black" 
                    name='TypeTransport' id='TypeTransport'>
                    <option value="Lunes">Carro</option>
                    <option value="Martes">Moto</option>
                </select>
            </div>


            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <h1 className= {labelClassname} style={{ flex: 1 }}>Agregar horarios :</h1>
                <button type="button" onClick={agregarHorario} className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-full">
                    <FaPlus />
                </button>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <h1 className= {labelClassnameHorario} style={{ flex: 1 }}>Día</h1>
                <h1 className= {labelClassnameHorario} style={{ flex: 1 }}>Hora de inicio</h1>
                <h1 className= {labelClassnameHorario} style={{ flex: 1 }}>Hora finalización</h1>
                
            </div>

            <div className="w-full ">
            {horarios.map((horario, index) => (
                <div key={index} className="flex gap-3 mb-8">
                <select
                    className="capitalize shadow-2xl p-3 ex w-full outline-none focus:border-solid focus:border-[1px] border-[#035ec5] placeholder:text-black"
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
                    className="capitalize shadow-2xl p-3 ex w-full outline-none focus:border-solid focus:border-[1px] border-[#035ec5] placeholder:text-black"
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
                    className="capitalize shadow-2xl p-3 ex w-full outline-none focus:border-solid focus:border-[1px] border-[#035ec5] placeholder:text-black"
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
                    className="eliminarHorario bg-red-400 hover:bg-red-500 text-white font-bold py-2 px-4 rounded-full "
                    onClick={() => eliminarHorario(index)}
                >
                    <FaTrash /> 
                </button>
                </div>
            ))}
            
            </div>



                <div >
                <button
                    className=" mt-8 outline-none glass shadow-2xl w-full   p-3 bg-green-400 hover:border-white hover:border-solid hover:border-[1px] hover:text-white font-bold"
                    type="submit">
                    Enviar
                </button>

                </div>

        </div>
      
    </form>
  );
}

export default RoomServiceForm;