//import Loader2 from '../../../components/loaders/loader2';
import "../../../components/loaders/loader1.css";
const Cargando = () => {
    return (
        <>
            <div className='text-2xl text-center text-gray-800 p-8'>
                <p> Emparejando ... </p>  
                <div className=" loader-container relative relative mb-5">
                  
                  <div className="loader"></div>
                </div>
              </div>
        </>
    )
}
export default Cargando;