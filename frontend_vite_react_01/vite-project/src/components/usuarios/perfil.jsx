import { UserContext } from '../../contexts/userContext';
import { useContext } from 'react';
import FormsComponentsStyle from '../../components/servicios/servicesComponentesStyle/formsComponentsStyle';
import BotonEditar from './usuariosCampos/botonEditar';
import BotonCancelarU from './usuariosCampos/botonCancelarU';
const Perfil = () => {
    const {userDataAux, handleChange,handleSubmit, currentOption} = useContext(UserContext);
    const {
        labelClassname,
        selectDesing,
        inputDesing,
        divEspace,
        tituloServicio,
        contenedor,
        divGrid,
        divGridSub
      } = FormsComponentsStyle;
    return (
        <div className={contenedor}>
            <form  onSubmit={handleSubmit}>
                <div className='px-7' >
                    <BotonEditar />
                    <BotonCancelarU />
                    <div className='text-center'>
                        <div className={divEspace}>
                            <h1 className={tituloServicio}> Información de usuario </h1>

                        </div>

                    </div>
                    

                    <div className={divGrid}>
                        <div className={divGridSub}>
                            
                            <label className={labelClassname} htmlFor="nombre">Nombre:</label>
                            <input
                            className={inputDesing}
                            type="text"
                            placeholder="Ingresa tu nombre" 
                            id="nombre"
                            name="nombre"
                            value={userDataAux.nombre || ''}
                            onChange={handleChange}
                            disabled={currentOption=== 'show'}
                            required
                          />

                        </div>
                        <div className={divGridSub}>
                        <label className={labelClassname} htmlFor="correo">Correo:</label>
                            <input
                            className={inputDesing}
                            type="text"
                            id="nombre"
                            name="nombre"
                            value={userDataAux.correo || ''}
                            onChange={handleChange}
                            disabled
                            required
                          />
                        </div>

                    </div>

                    <div className={divGrid}>
                        <div className={divGridSub}>
                            
                        <label className={labelClassname} htmlFor="edad">Edad:</label>
                          <input
                            className={inputDesing}
                            type="number"
                            placeholder="Ingresa tu edad" 
                            id="edad"
                            name="edad"
                            value={userDataAux.edad || ''}
                            onChange={handleChange}
                            min="0"
                            max="100" 
                            required
                            disabled={currentOption=== 'show'}
                            
                          />

                        </div>
                        <div className={divGridSub}>
                            <label className={labelClassname} htmlFor="sexo">Sexo:</label>
                            <select
                                className={selectDesing}
                                id="sexo"
                                name="sexo"
                                value={userDataAux.sexo}
                                onChange={handleChange}
                                disabled={currentOption=== 'show'}
                                
                                required
                                >
                                <option value="">----</option> 
                                <option value="masculino">M</option>
                                <option value="femenino">F</option>
                            </select>
                        </div>

                    </div>

                    <div className={divGrid}>
                        <div className={divGridSub}>
                            
                            <label className={labelClassname} htmlFor="carrera">Carrera:</label>
                            <select
                                className={selectDesing}
                                id="carrera"
                                name="carrera"
                                value={userDataAux.carrera}
                                onChange={handleChange}
                                disabled={currentOption=== 'show'}
                                
                                required
                                >
                                <option value="">----</option> 
                                <option value="ingenieria de sistemas">Ingeniería de sistemas</option>
                                <option value="administracion de empresas">Administración de empresas</option>
                                <option value="ingenieria de alimentos">Ingeniería de alimentos</option>
                                <option value="construccion">Construcción</option>
                                <option value="trabajo social">Trabajo social</option>
                                <option value="contaduria publica">Contaduría pública</option>
                                <option value="tecnologia en desarrollo de software">Tecnología en desarrollo de software</option>
                                <option value="tecnologia en electronica">Tecnología en electrónica</option>
                                <option value="tecnologia en alimentos">Tecnología en alimentos</option>
                            </select>

                        </div>
                        <div className={divGridSub}>
                            <label className={labelClassname} htmlFor="semestre">Semestre:</label>
                            <input
                                className={inputDesing}
                                type="number"
                                placeholder="ingresa tu semestre" 
                                id="semestre"
                                name="semestre"
                                value={userDataAux.semestre || ''}
                                onChange={handleChange}
                                min="1"
                                max="14" 
                                disabled={currentOption=== 'show'}
                                required
                                
                          />
                        </div>

                    </div>

                    <div className={divGrid}>
                        <div className={divGridSub}>
                            
                        <label className={labelClassname} htmlFor="ciudad_residencia">Ciudad de residencia:</label>
                        <select
                            className={selectDesing}
                            id="ciudad_residencia"
                            name="ciudad_residencia"
                            value={userDataAux.ciudad_residencia}
                            onChange={handleChange}
                            disabled={currentOption=== 'show'}
                            required
                            >
                            <option value="">----</option>
                            <option value="">Selecciona una ciudad</option>
                            <option value="Cali">Cali</option>
                            <option value="Buenaventura">Buenaventura</option>
                            <option value="Palmira">Palmira</option>
                            <option value="tuluá">Tuluá</option>
                            <option value="Cartago">Cartago</option>
                            <option value="Buga">Buga</option>
                            <option value="Jamundí">Jamundí</option>
                            <option value="Yumbo">Yumbo</option>
                            <option value="Candelaria">Candelaria</option>
                            <option value="Florida">Florida</option>
                            <option value="El Cerrito">El Cerrito</option>
                            <option value="Pradera">Pradera</option>
                            <option value="Sevilla">Sevilla</option>
                            <option value="Zarzal">Zarzal</option>
                            <option value="Dagua">Dagua</option>
                            <option value="Roldanillo">Roldanillo</option>
                            <option value="La Unión">La Unión</option>
                            <option value="Guacarí">Guacarí</option>
                            <option value="Caicedonia">Caicedonia</option>
                            <option value="Bugalagrande">Bugalagrande</option>
                            <option value="Ansermanuevo">Ansermanuevo</option>
                            <option value="Ginebra">Ginebra</option>
                            <option value="Trujillo">Trujillo</option>
                            <option value="Andalucía">Andalucía</option>
                            <option value="San Pedro">San Pedro</option>
                            <option value="Riofrío">Riofrío</option>
                            <option value="Toro">Toro</option>
                            <option value="Yotoco">Yotoco</option>
                            <option value="Darién">Darién</option>
                            <option value="Bolívar">Bolívar</option>
                            <option value="Obando">Obando</option>
                            <option value="Restrepo">Restrepo</option>
                            <option value="La Victoria">La Victoria</option>
                            <option value="Alcalá">Alcalá</option>
                            <option value="La Cumbre">La Cumbre</option>
                            <option value="Vijes">Vijes</option>
                            <option value="El Águila">El Águila</option>
                            <option value="El Cairo">El Cairo</option>
                            <option value="El Dovio">El Dovio</option>
                            <option value="Versalles">Versalles</option>
                            <option value="Argelia">Argelia</option>
                            <option value="Ulloa">Ulloa</option>
                            
                        </select>
                        </div>
                        <div className={divGridSub}>
                            <label className={labelClassname} htmlFor="telefono">Telefono:</label>
                            <input className={inputDesing} 
                                type="number" 
                                placeholder="Ingresa tu telefono" 
                                id="telefono" name="telefono" 
                                value={userDataAux.telefono || ''} 
                                onChange={handleChange} 
                                disabled={currentOption=== 'show'} 
                                required
                            />
                        </div>

                    </div>

   
                    <div className='flex justify-end mt-8 mb-2'>
                        {currentOption !== 'show' && (
                            <button
                                className="outline-none glass shadow-2xl  rounded p-3 bg-green-400 hover:border-white hover:border-solid hover:border-[1px] hover:text-white font-bold"
                                type="submit"
                            >
                                Guardar cambios 
                            </button>
                        ) }
    
                    </div>
    
                </div>
            
            </form>
        </div>
  );
    
}
export default Perfil