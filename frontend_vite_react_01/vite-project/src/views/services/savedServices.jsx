import "../../components/loader1.css";
import CardService4 from "../../components/servicios/cards/cardService4";
import { CardServiceContext } from "../../contexts/cardServiceContext";
import { useContext } from "react";
const SavedServices = () => {
  const {services, mostrarGuardados, setMostrarGuardados} = useContext(CardServiceContext);
  //setMostrarGuardados(true);
  console.log('Estoy en savedServices');

    return (
        <>
        {services? <CardService4 />:
        <h1>No has guardado ningun servicio,¡No esperes más para explorar!</h1>}
        </>
    )
}
export default SavedServices