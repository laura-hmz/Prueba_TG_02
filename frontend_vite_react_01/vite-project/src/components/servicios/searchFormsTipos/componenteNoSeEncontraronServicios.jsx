import Loader2 from '../../../components/loaders/loader2';
const NoSeEncontraronServicios = () => {
    return (
        <>
            <div className=' border-solid rounded-lg text-xl text-center border text-gray-400  p-9'>
                <p> No se encontraron resultados con los criterios de búsqueda </p>  
                <div className=" loader-container relative mb-5">
                  <Loader2 />
                </div>
              </div>
        </>
    )
}
export default NoSeEncontraronServicios;