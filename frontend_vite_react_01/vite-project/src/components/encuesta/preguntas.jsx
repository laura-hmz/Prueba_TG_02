import { UserContext } from '../../contexts/userContext';
import { useContext } from 'react';
import FormsComponentsStyle from '../../components/servicios/servicesComponentesStyle/formsComponentsStyle';
const PreguntasForm = () => {
    const {userDataAux, setUserDataAux, registerUser,setPaginaRegistro} = useContext(UserContext);
    const {
        divEspace,
        tituloServicio,
        contenedor,
        radioButton
        
      } = FormsComponentsStyle;

      //preguntas
      const questions = [
        "1. ¿Consumes bebidas alcohólicas, cigarrillos u otras sustancias, o toleras que alguien con quien compartes espacio las consuma? ",
        "2. ¿Le das importancia a la puntualidad, la responsabilidad y la organización en tu vida y en las personas que te rodean?",
        "3. ¿Estás dispuesto/a a escuchar y respetar las creencias de otras personas, incluso si difieren de las tuyas?",
        "4. ¿Te gustan los videojuegos o temas relacionados con la tecnología?",
        "5. ¿Te gusta leer o escribir?",
        "6. ¿Te interesa debatir sobre temas políticos?",
        "7. ¿Te interesan los deportes/disciplinas o las actividades al aire libre?",
        "8. ¿Te sientes cómodo entablando conversaciones con gente nueva o consideras que tienes buenas habilidades comunicativas?",
        "9. ¿Te interesa el arte, el teatro, la danza u otras actividades culturales?",
        "10. ¿Prefieres las películas o series de comedia en lugar de las de terror?",
        "11. ¿Prefieres las películas o series de acción en lugar de las de drama?",
        "12. ¿Prefieres el reguetón en lugar del rock y otros géneros de música alternativa?",
        "13. ¿Prefieres la música pop en lugar la música de despecho?",
        "14. ¿Prefieres el vallenato en lugar del género Hip-hop o rap?",
        "15. ¿Prefieres la música tropical, que incluye géneros como la salsa, la bachata, el merengue, etc., en lugar de la música evangélica u otras expresiones religiosas?"
    ];
      
    const handleResponseChange = (questionIndex, value) => {
        const updatedResponses = [...userDataAux.resultados_encuesta];
        const updatedResponsesHabitaciones= [...userDataAux.resultados_encuesta_habitaciones];
        const updatedResponsesAsesorias= [...userDataAux.resultados_encuesta_asesorias];
        const updatedResponsesTransporte= [...userDataAux.resultados_encuesta_transporte];
        //console.log('Estoy en handleResponseChange' );
        updatedResponses[questionIndex] = value;
    
        if (value==1 && (questionIndex === 0 || questionIndex === 1)) {
            updatedResponsesHabitaciones[questionIndex] = 1.5;
        }else updatedResponsesHabitaciones[questionIndex] = value;

        if (value==1 && (questionIndex === 1 || questionIndex === 2||questionIndex === 7)) {
            updatedResponsesAsesorias[questionIndex] = 1.5;
        }else updatedResponsesAsesorias[questionIndex] = value;

        if (value==1 && (questionIndex === 0 || questionIndex === 1 || questionIndex === 2 
            || questionIndex === 5 || questionIndex === 7  || questionIndex === 11 
            || questionIndex === 12 || questionIndex === 13 || questionIndex === 14)) {
            updatedResponsesTransporte[questionIndex] = 1.5;
        }else updatedResponsesTransporte[questionIndex] = value;

        setUserDataAux({
            ...userDataAux,
            resultados_encuesta: updatedResponses,
            resultados_encuesta_habitaciones: updatedResponsesHabitaciones,
            resultados_encuesta_asesorias: updatedResponsesAsesorias,
            resultados_encuesta_transporte: updatedResponsesTransporte,
        });
        
    };
    
    // const handleSubmit = () => {
    //     // Puedes acceder a userDataAux.resultados_encuesta para enviar las respuestas al servidor o realizar otras acciones.
    //     console.log("userDataAux FINAL:", userDataAux);
    //     registerUser();
        
    // };
    const handleSubmit = async () => {
        // Puedes acceder a userDataAux.resultados_encuesta para enviar las respuestas al servidor o realizar otras acciones.
        console.log("userDataAux FINAL:", userDataAux);
        await registerUser(); // Espera a que registerUser termine antes de continuar
      };
    return (

        <div className={contenedor}>
            <div className="flex  mt-4 ml-4">
                    <button
                            className="outline-none glass shadow-2xl rounded p-3 bg-yellow-400 hover:border-white hover:border-solid hover:border-[1px] hover:text-white font-bold"
                            onClick={() => setPaginaRegistro('1')} // Cambiar a la opción de edición
                        >
                            Volver
                        </button>
                    </div>

            <form  onSubmit={handleSubmit}>
                <div className='md:px-20 px-8 md:mt-6 mt-8 mb-14'>
                    
                    <div className='text-center mb-2'>
                        <h1 className={tituloServicio}> Completa tu información de usuario respondiendo las siguientes preguntas </h1>
                    </div>
                    <div className={divEspace} > 
                        {questions.map((question, index) => (
                            <div key={index} >
                                <p className='tracking-wide text-gray-600 text-lg ' >{question}</p>
                                <div className=" md:ml-16 ml-5 space-x-4 mb-10 mt-4 text-gray-700  ">    
                                    <label>
                                    <input
                                        type="radio"
                                        name={`question${index}`}
                                        value="1"
                                        onChange={() => handleResponseChange(index, "1")}
                                        checked={userDataAux.resultados_encuesta[index] === "1"}
                                        required
                                        className={radioButton}
                                        
                                    />
                                    <span className="ml-2">Sí </span>
                                    </label>

                                    <label>
                                    <input
                                        type="radio"
                                        name={`question${index}`}
                                        value="0.5"
                                        onChange={() => handleResponseChange(index, "0.5")}
                                        checked={userDataAux.resultados_encuesta[index] === "0.5"}
                                        required
                                        className={radioButton}
                                    />
                                    <span className="ml-2">Neutral </span>
                                    </label>

                                    <label>
                                    <input
                                        type="radio"
                                        name={`question${index}`}
                                        value="0"
                                        onChange={() => handleResponseChange(index, "0")}
                                        checked={userDataAux.resultados_encuesta[index] === "0"}
                                        required
                                        className={radioButton}
                                    />
                                    <span className="ml-2">No </span>
                                    </label>
                                </div>
                            </div>
                        ))}
                    </div>
   
                    <div className='mt-16'>
                            <button
                                className="outline-none glass shadow-2xl w-full rounded p-3 bg-green-400 hover:border-white hover:border-solid hover:border-[1px] hover:text-white font-bold"
                                type="submit"
                            >
                                Terminar registro 
                            </button>
                    </div>
    
                </div>
            
            </form>
        </div>
      );
}
export default PreguntasForm