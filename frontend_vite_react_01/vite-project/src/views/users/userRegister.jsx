import { UserContext } from '../../contexts/userContext';
import { useContext } from 'react';
import EncuestaForm from "../../components/encuesta/encuestaForm";
import PreguntasForm from "../../components/encuesta/preguntas";

const UserRegister = () => {
    const {paginaRegistro} = useContext(UserContext);
    //console.log('Esto es lo que se va a guardar REGISTRO',userDataAux);
    return (
        <>
          {paginaRegistro === '1' ? <EncuestaForm /> : <PreguntasForm />}
        </>
      );
    };
export default UserRegister;