import  { useState } from 'react';

const SearchForm = ({ onSearch, isLoading }) => {
  const [searchParams, setSearchParams] = useState({
    diaSemana: '',
    horaBusquedaInicio: '',
    horaBusquedaFinal: '',
    estado: '',
    nombre: '',
    tipo_servicio: '',
    area_0: '',
    tipo_habitacion_1: '',
    parqueadero_carro:false, 
    parqueadero_moto:false, 
    permite_mascota:false,
    tipo_vehiculo_2: '',
    area_otro_servicio_3: '',
    id_cliente: '64e71f3b5970aafb03f2a796', // Agrega el campo id_cliente aquí
  });

  const optionsHora = [
    "00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00",
    "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00",
    "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"
  ];

  const labelClassname = ' block uppercase tracking-wide text-lg text-gray-600 text-md font-bold mb-4';
  const divEspace = "mb-8"


  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
  
    if (name === 'tipo_servicio') {
      // Si cambia la categoría, establece la nueva categoría y restablece los valores de búsqueda
      setSearchParams({
        diaSemana: '',
        horaBusquedaInicio: '',
        horaBusquedaFinal: '',
        estado: '',
        nombre: '',
        area_0: '',
        tipo_habitacion_1: '',
        parqueadero_carro: false,
        parqueadero_moto: false,
        permite_mascota: false,
        tipo_vehiculo_2: '',
        area_otro_servicio_3: '',
        id_cliente: '64e71f3b5970aafb03f2a796',
        [name]: value,
      });
    } else {
      if (type === 'checkbox') {
        // Verificamos si el checkbox está marcado y asignamos el valor correspondiente
        const checkboxValue = checked ? name.replace(/_/g, ' ') : '';
        setSearchParams({
          ...searchParams,
          [name]: checkboxValue,
        });
      } else {
        setSearchParams({
          ...searchParams,
          [name]: value,
        });
      }
    }
  };
  


  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Convierte los valores booleanos `false` en cadenas vacías `""`
    const sanitizedSearchParams = {
      ...searchParams,
      parqueadero_carro: searchParams.parqueadero_carro ? searchParams.parqueadero_carro : "",
      parqueadero_moto: searchParams.parqueadero_moto ? searchParams.parqueadero_moto : "",
      permite_mascota: searchParams.permite_mascota ? searchParams.permite_mascota : ""
    };
  
    // Envía la solicitud de búsqueda al servidor con los parámetros actualizados
    console.log('Nuevos parámetros:', sanitizedSearchParams);
    onSearch(sanitizedSearchParams);
  };
  

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="tipo_servicio">Categoría:</label>
        <select
          
          id="tipo_servicio"
          name="tipo_servicio"
          value={searchParams.tipo_servicio}
          onChange={handleChange}
          disabled={isLoading}
        >
          <option value="">Selecciona una categoría</option>
          <option value="Asesorías Académicas">Asesorías Académicas</option>
          <option value="Servicio de habitaciones">Servicio de habitaciones</option>
          <option value="Servicio de Transporte">Servicio de Transporte</option>
          <option value="Otros servicios">Otros servicios</option>
        </select>
      </div>
      {/* ----------------------- ASESORÍAS ACADÉMICAS ------------------------------------*/}
      {searchParams.tipo_servicio === 'Asesorías Académicas' && (
        <>
          <div>
            <label htmlFor="diaSemana">Día de la semana:</label>

            <select
              id="diaSemana"
              name="diaSemana"
              value={searchParams.diaSemana}
              onChange={handleChange}
              disabled={isLoading}
            >
              <option value="">----</option> 
              <option value="Lunes">Lunes</option>
              <option value="Martes">Martes</option>
              <option value="Miercoles">Miércoles</option>
              <option value="Jueves">Jueves</option>
              <option value="Viernes">Viernes</option>
              <option value="Sabado">Sábado</option>
              <option value="Domingo">Domingo</option>
            </select>

            <label htmlFor="horaBusquedaInicio">Hora inicio:</label>

            <select
              id="horaBusquedaInicio"
              name="horaBusquedaInicio"
              value={searchParams.horaBusquedaInicio}
              onChange={handleChange}
              disabled={isLoading}
            >
              <option value="">----</option> 
              {optionsHora.map((hora, index) => (
                        <option key={index} value={index}>{hora}</option>
                    ))}
              
            </select>

            <label htmlFor="horaBusquedaFinal">Hora finalización:</label>

            <select
              id="horaBusquedaFinal"
              name="horaBusquedaFinal"
              value={searchParams.horaBusquedaFinal}
              onChange={handleChange}
              disabled={isLoading}
            >
              <option value="">----</option> 
              {optionsHora.map((hora, index) => (
                        <option key={index} value={index}>{hora}</option>
                    ))}
            </select>

            <label htmlFor="area_0">Área:</label>
            <select
              id="area_0"
              name="area_0"
              value={searchParams.area_0}
              onChange={handleChange}
              disabled={isLoading}
            >
              <option value="">-----</option>
              <option value="Ingenieria de sistemas">Ingeniería de sistemas</option>
              <option value="Administracion de empresas">Administración de empresas</option>
              <option value="Ingenieria de alimentos">Ingeniería de alimentos</option>
              <option value="Construccion">Construcción</option>
              <option value="Trabajo social">Trabajo social</option>
              <option value="Contaduria publica">Contaduría pública</option>
              <option value="Tecnologia en desarrollo de software">Tecnología en desarrollo de software</option>
              <option value="Tecnologia en electronica">Tecnología en electrónica</option>
              <option value="Tecnologia en alimentos">Tecnología en alimentos</option>
            </select>


            <label htmlFor="nombre">Nombre materia:</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={searchParams.nombre}
              onChange={handleChange}
              disabled={isLoading}
            />


            </div>
          
        </>
      )}
      {/* -------------------------------------HABITACIONES--------------------------------------------*/}

      {searchParams.tipo_servicio === 'Servicio de habitaciones' && (
        <>
          <div>
            <label htmlFor="tipo_habitacion_1">¿Qué buscas?:</label>
            <select
              id="tipo_habitacion_1"
              name="tipo_habitacion_1"
              value={searchParams.tipo_habitacion_1}
              onChange={handleChange}
              disabled={isLoading}
            >
              <option value="">----</option> 
              <option value="Apartamento">Apartamento</option>
              <option value="Habitacion">Habitación</option>
              <option value="Hospedaje">Hospedaje</option>
              <option value="Roomie">Roomie</option>
            </select>
            <br />
            <h1 >¿Qué caracteristicas buscas?:</h1>
           
            <label htmlFor="parqueadero_carro">
              <input
                type="checkbox"
                id="parqueadero_carro"
                name="parqueadero_carro"
                checked={searchParams.parqueadero_carro}
                onChange={handleChange}
                disabled={isLoading}
              />
              Parqueadero de carro
            </label>

            <label htmlFor="parqueadero_moto">
              <input
                type="checkbox"
                id="parqueadero_moto"
                name="parqueadero_moto"
                checked={searchParams.parqueadero_moto}
                onChange={handleChange}
                disabled={isLoading}
              />
              Parqueadero moto
            </label>

            <label htmlFor="permite_mascota">
              <input
                type="checkbox"
                id="permite_mascota"
                name="permite_mascota"
                checked={searchParams.permite_mascota}
                onChange={handleChange}
                disabled={isLoading}
              />
              Permiten mascotas
            </label>

            <label htmlFor="ninguno">
              <input
                type="checkbox"
                id="ninguno"
                name="ninguno"
                onChange={handleChange}
                disabled={isLoading}
              />
              Ninguno
            </label>
          </div>
        </>
      )}

       {/*------------------------------------------- SERVICIOS DE TRANSPORTE -----------------------------*/}

      {searchParams.tipo_servicio === 'Servicio de Transporte' && (
              <>
                <div>
                  <label htmlFor="tipo_vehiculo_2">Tipo de vehículo:</label>
                  <select
                    id="tipo_vehiculo_2"
                    name="tipo_vehiculo_2"
                    value={searchParams.tipo_vehiculo_2}
                    onChange={handleChange}
                    disabled={isLoading}
                  >
                    <option value="">----</option> 
                    <option value="carro">Carro</option>
                    <option value="moto">Moto</option>
                  </select>
                  <label htmlFor="diaSemana">Día de la semana:</label>

                  <select
                    id="diaSemana"
                    name="diaSemana"
                    value={searchParams.diaSemana}
                    onChange={handleChange}
                    disabled={isLoading}
                  >
                    <option value="">----</option> 
                    <option value="Lunes">Lunes</option>
                    <option value="Martes">Martes</option>
                    <option value="Miercoles">Miércoles</option>
                    <option value="Jueves">Jueves</option>
                    <option value="Viernes">Viernes</option>
                    <option value="Sabado">Sábado</option>
                    <option value="Domingo">Domingo</option>
                  </select>

                  <label htmlFor="horaBusquedaInicio">Hora inicio:</label>

                  <select
                    id="horaBusquedaInicio"
                    name="horaBusquedaInicio"
                    value={searchParams.horaBusquedaInicio}
                    onChange={handleChange}
                    disabled={isLoading}
                  >
                    <option value="">----</option> 
                    {optionsHora.map((hora, index) => (
                              <option key={index} value={index}>{hora}</option>
                          ))}
                    
                  </select>

                  <label htmlFor="horaBusquedaFinal">Hora finalización:</label>

                  <select
                    id="horaBusquedaFinal"
                    name="horaBusquedaFinal"
                    value={searchParams.horaBusquedaFinal}
                    onChange={handleChange}
                    disabled={isLoading}
                  >
                    <option value="">----</option> 
                    {optionsHora.map((hora, index) => (
                              <option key={index} value={index}>{hora}</option>
                          ))}
                  </select>
                </div>
              </>
            )}

        {/*------------------------------------------- OTROS SERVICIOS-----------------------------*/}
      {searchParams.tipo_servicio === 'Otros servicios' && (
              <>
                <div>
                  <label htmlFor="area_otro_servicio_3">Área del servicio:</label>
                  <select
                    id="tipo_habitacion_1"
                    name="tipo_habitacion_1"
                    value={searchParams.tipo_habitacion_1}
                    onChange={handleChange}
                    disabled={isLoading}
                  >
                    <option value="">----</option>
                    <option value="Administrativos y finanzas">Administrativos y finanzas</option>
                    <option value="Atención al cliente">Atención al cliente</option>
                    <option value="Gastronomia">Gastronomía</option>
                    <option value="Artes u oficios">Artes u oficios</option>
                    <option value="Tecnologia e informatica">Tecnología e informática</option>
                    <option value="Belleza">Belleza</option>
                    <option value="Mensajeria">Mensajería</option>
                    <option value="Deporte">Deporte</option>
                    <option value="Vestuario">Vestuario</option>
                    <option value="Servicios generales">Servicios generales</option>
                    <option value="Mascotas">Mascotas</option>
                  </select>


                  <label htmlFor="nombre">Nombre del servicio:</label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={searchParams.nombre}
                    onChange={handleChange}
                    disabled={isLoading}
                  />
                  
                </div>
              </>
            )}

      <button type="submit" disabled={isLoading}>Buscar</button>
    </form>
  );
};

export default SearchForm;
