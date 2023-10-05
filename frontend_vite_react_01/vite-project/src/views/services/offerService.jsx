import RegisterCategory from "../../components/servicios/registerCategory"
import { useEffect,useContext } from 'react';
import { ServiceContext } from '../../contexts/serviceContext';
const OfferService = () => {
    const {setCurrentOption,currentOption } = useContext(ServiceContext);

    useEffect(() => {
        
        setCurrentOption('register');
        console.log('currentOption en OfferService',currentOption);
    
      }, [setCurrentOption, currentOption]);
    return (
        <RegisterCategory />
    )
}
export default OfferService