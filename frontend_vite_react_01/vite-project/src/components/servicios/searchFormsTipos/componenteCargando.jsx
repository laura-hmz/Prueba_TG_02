import "../../../components/loaders/loader1.css";
import LoaderReloj from "../../loaders/loaderReloj";
const Cargando = () => {
    return (
        <>
            <div className='text-2xl text-center text-gray-800 p-8'>
                <p> Emparejando ... </p>  
                <div className=" loader-container relative relative mb-5">
                  
                  <LoaderReloj />
                </div>
              </div>
        </>
    )
}
export default Cargando;