import { UserContext } from '../../contexts/userContext';
import { useContext } from 'react';

const Profile = () => {
    const { userData, isLoading, isAuthenticated } = useContext(UserContext);
   
    return (
        <div>
            <h1>Mi Perfil</h1>
            {isAuthenticated ? (
                <>
                    <h2>{userData ? userData.nombre : 'Cargando...'}</h2>
                    {/* Mostrar otros datos del usuario aquí */}
                </>
            ) : (
                <p>No estás autenticado</p>
            )}
        </div>
    )
}
export default Profile;