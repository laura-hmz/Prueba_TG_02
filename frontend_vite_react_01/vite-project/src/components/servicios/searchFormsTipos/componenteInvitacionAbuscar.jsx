import { FaSearch  } from 'react-icons/fa';
const InvitacionAbuscar = () => {
    return (
        <>
        <div className='loader-container relative'>
            <div className='bg-gray-100 border-solid rounded-lg text-center border text-gray-400  p-9'>
                <p>Descubre lo que estás buscando: Elige una categoría, ajusta los filtros si lo 
                    deseas, </p>
                <p>
                    ¡o simplemente pulsa *Buscar* y encuentra tus servicios ideales!
                <span className="flex justify-center mt-6 items-center">
                    <FaSearch  size={70} className="center text-gray-400 "/>
                </span>
                </p>
            </div>
        </div>
           
        </>
    );
}
export default InvitacionAbuscar;