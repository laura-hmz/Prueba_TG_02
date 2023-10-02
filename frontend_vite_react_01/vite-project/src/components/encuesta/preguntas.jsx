import { UserContext } from '../../contexts/userContext';
import { useContext } from 'react';
import FormsComponentsStyle from '../../components/servicios/servicesComponentesStyle/formsComponentsStyle';
const PreguntasForm = () => {
    const {userDataAux, setUserDataAux, registerUser,setPaginaRegistro} = useContext(UserContext);
    const {
        labelClassname,
        divDesing,
        divEspace,
        tituloServicio,
        contenedor,
        
      } = FormsComponentsStyle;

      //preguntas
      const questions = [
        "1. ¿Te gusta la cerveza u otro tipo de bebidas alcohólicas? ¿Tienes el hábito de fumar?",
        "2. Responsabilidad y organización, puntualidad",
        "3. ¿Tienes alguna creencia religiosa?",
        "4. ¿Te gustan los videojuegos y temas relacionados con la tecnología?",
        "5. ¿Te gusta leer?",
        "6. ¿Te gusta debatir sobre temas políticos?",
        "7. ¿Te interesan los deportes/disciplinas o las actividades al aire libre?",
        "8. ¿Te sientes cómodo entablando conversaciones con gente nueva? Habilidades comunicativas",
        "9. ¿Te interesa el arte y la cultura?",
        "10. ¿Prefieres las películas o series de comedia a las de terror?",
        "11. ¿Prefieres las películas o series de acción a las de drama?",
        "12. ¿Prefieres el reguetón antes que el rock y otro tipo de música alternativa?",
        "13. ¿Prefieres la música pop a la música popular o de despecho?",
        "14. ¿Prefieres el vallenato a la música Hip-hop/rap?",
        "15. ¿Prefieres la música bailable (salsa, bachata, merengue, etc.) a la música cristiana?"
    ];
      
    const handleResponseChange = (questionIndex, value) => {
        const updatedResponses = [...userDataAux.resultados_encuesta];
        const updatedResponsesHabitaciones= [...userDataAux.resultados_encuesta_habitaciones];
        const updatedResponsesAsesorias= [...userDataAux.resultados_encuesta_asesorias];
        const updatedResponsesTransporte= [...userDataAux.resultados_encuesta_transporte];
        console.log('Estoy en handleResponseChange' );
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
        
        console.log('otros', updatedResponses);
        console.log('habitaciones', updatedResponsesHabitaciones);
        console.log('asesorias', updatedResponsesAsesorias);
        console.log('transporte', updatedResponsesTransporte);
    };
    
    const handleSubmit = () => {
        // Puedes acceder a userDataAux.resultados_encuesta para enviar las respuestas al servidor o realizar otras acciones.
        console.log("Respuestas:", userDataAux.resultados_encuesta);
        console.log("userDataAux FINAL:", userDataAux);
        registerUser();
        
    };

     
    return (

        <div className={contenedor}>
            <form  onSubmit={handleSubmit}>
                <div className={divDesing}>
                    <button
                        className="outline-none glass shadow-2xl rounded p-3 bg-yellow-400 hover:border-white hover:border-solid hover:border-[1px] hover:text-white font-bold"
                        onClick={() => setPaginaRegistro('1')} // Cambiar a la opción de edición
                    >
                        Volver
                    </button>

                    <div className={divEspace}>
                        <h1 className={tituloServicio}> Completa tu información de usuario con las siguientes preguntas </h1>
                    </div>
                    <div className={divEspace} > 
                        {questions.map((question, index) => (
                            <div key={index}>
                                <p className={labelClassname} >{question}</p>
                                <div className="items-center space-x-4 mb-10">    
                                    <label>
                                    <input
                                        type="radio"
                                        name={`question${index}`}
                                        value="1"
                                        onChange={() => handleResponseChange(index, "1")}
                                        checked={userDataAux.resultados_encuesta[index] === "1"}
                                        required
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
                                    />
                                    <span className="ml-2">Indiferente </span>
                                    </label>

                                    <label>
                                    <input
                                        type="radio"
                                        name={`question${index}`}
                                        value="0"
                                        onChange={() => handleResponseChange(index, "0")}
                                        checked={userDataAux.resultados_encuesta[index] === "0"}
                                        required
                                    />
                                    <span className="ml-2">No </span>
                                    </label>
                                </div>
                            </div>
                        ))}

                    </div>

   
                    <div >
                    
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