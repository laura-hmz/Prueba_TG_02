import { Link } from 'react-router-dom';

const RegisterCategory = () => {
  const buttonStyle = {
    outline: 'none',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    padding: '12px',
    fontWeight: 'bold',
    cursor: 'pointer',
  };

  return (
    <div className="text-center mt-40">
      <h1 className='block mb-5'>Hola, ¿qué deseas publicar?</h1>

      <div className="flex justify-center space-x-4">
        <Link to="/register/transport" style={{ ...buttonStyle, backgroundColor: '#FFD700' }}>
          Registrar Servicio de Transporte
        </Link>
        <Link to="/register/academic-advising" style={{ ...buttonStyle, backgroundColor: '#007BFF' }}>
          Registrar Asesorías Académicas
        </Link>
        <Link to="/register/room" style={{ ...buttonStyle, backgroundColor: '#800080' }}>
          Registrar Servicio de Habitaciones
        </Link>
        <Link to="/register/other" style={{ ...buttonStyle, backgroundColor: '#FFA500' }}>
          Registrar Otros Servicios
        </Link>
      </div>
    </div>
  );
};

export default RegisterCategory;
