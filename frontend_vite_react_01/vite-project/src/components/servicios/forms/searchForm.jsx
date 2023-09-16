import  { useState } from 'react';

const SearchForm = ({ onSearch, isLoading }) => {
  const [searchParams, setSearchParams] = useState({
    diaSemana: '',
    horaBusquedaInicio: '',
    horaBusquedaFinal: '',
    estado: '',
    nombre: '',
    tipo_servicio: '',
    nombre_caracteristica: '',
    descripcion_caracteristica:'',
    area_0: '',
    tipo_habitacion_1: '',
    tipo_vehiculo_2: '',
    area_otro_servicio_3: '',
    id_cliente: '64e71f3b5970aafb03f2a796', // Agrega el campo id_cliente aquí
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearchParams({
      ...searchParams,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Envía la solicitud de búsqueda al servidor con los parámetros actuales
    console.log(searchParams);
    onSearch(searchParams);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="tipo_servicio">Selecciona una categoría:</label>
        <select
          id="tipo_servicio"
          name="tipo_servicio"
          value={searchParams.tipo_servicio}
          onChange={handleChange}
          disabled={isLoading}
        >
          <option value="">Selecciona una categoría</option>
          <option value="Asesorías Académicas">Asesorías Académicas</option>
          <option value="categoria2">Categoría 2</option>
          <option value="categoria3">Categoría 3</option>
          <option value="categoria4">Categoría 4</option>
        </select>
      </div>
      {/* Agregar campos específicos según la categoría seleccionada */}
      {searchParams.tipo_servicio === 'Asesorías Académicas' && (
        <>
          <div>
            <label htmlFor="diaSemana">Día de la semana:</label>
            <input
              type="text"
              id="diaSemana"
              name="diaSemana"
              value={searchParams.diaSemana}
              onChange={handleChange}
              disabled={isLoading}
            />
          </div>
          {/* Agregar más campos específicos para categoria1 aquí */}
        </>
      )}

      {searchParams.tipo_servicio === 'categoria2' && (
        <>
          <div>
            <label htmlFor="tipo_habitacion_1">Tipo de habitación:</label>
            <input
              type="text"
              id="tipo_habitacion_1"
              name="tipo_habitacion_1"
              value={searchParams.tipo_habitacion_1}
              onChange={handleChange}
              disabled={isLoading}
            />
          </div>
          {/* Agregar más campos específicos para categoria2 aquí */}
        </>
      )}

      {/* Agregar más bloques de campos específicos para otras categorías aquí */}
      
      <div>
        <label htmlFor="id_cliente">ID del cliente:</label>
        <input
          type="text"
          id="id_cliente"
          name="id_cliente"
          value={searchParams.id_cliente}
          onChange={handleChange}
          disabled={isLoading}
        />
      </div>

      <button type="submit" disabled={isLoading}>Buscar</button>
    </form>
  );
};

export default SearchForm;
