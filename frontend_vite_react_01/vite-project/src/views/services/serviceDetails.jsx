import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getServicesById } from '../../api/servicesApi';

const ServiceDetails = () => {
  const { id } = useParams();
  const [service, setService] = useState({});

  useEffect(() => {
    // Realizar una solicitud para obtener los servicios cuando el componente se monta
    const fetchData = async () => {
      try {
        const data = await getServicesById(id);
        console.log(data);
        setService(data);
      } catch (error) {
        console.error('Error al obtener los servicios:', error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div>
      <h3>Servicio: {service._id}</h3>
      <h3>Nombre: {service.nombre}</h3>
      <h3>Tipo de Servicio: {service.tipo_servicio}</h3>
      <h3>Descripción: {service.descripcion}</h3>
      <h3>Estado: {service.estado}</h3>
      <h1>Horarios Disponibles:</h1>
      <ul>
        {service.horarios && service.horarios.length > 0 ? (
          service.horarios.map((horario) => (
            <li key={horario._id}>
              <strong>Día:</strong> {horario.dia_semana}<br />
              <strong>Hora de inicio:</strong> {horario.hora_de_inicio}<br />
              <strong>Hora de finalización:</strong> {horario.hora_de_finalizacion}<br />
            </li>
          ))
        ) : (
          <li>No hay horarios disponibles.</li>
        )}
      </ul>
    </div>
  );
};

export default ServiceDetails;
