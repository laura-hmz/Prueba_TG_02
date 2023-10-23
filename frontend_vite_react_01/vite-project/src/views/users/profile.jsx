import { UserContext } from '../../contexts/userContext';
import { useContext, useEffect } from 'react';
import Perfil from '../../components/usuarios/perfil';


const Profile = () => {
    const { userData, isAuthenticated,setUserDataAux,setCurrentOption } = useContext(UserContext);
    //const [userDataAux, setUserDataAux] = useState({});

    useEffect(() => { 
        setCurrentOption('show')
        setUserDataAux(userData);
    
      }, [userData, isAuthenticated, setUserDataAux,setCurrentOption]);
   
    return (
            <>
            {isAuthenticated ? (
                <>
                    <Perfil />
                </>
            ) : (
                <p>No estás autenticado</p>
            )}
            
            
            
            </>
            
    )
}
export default Profile;