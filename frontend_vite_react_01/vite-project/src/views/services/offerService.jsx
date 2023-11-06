import RegisterCategory from "../../components/servicios/registerCategory"
import { useEffect,useContext } from 'react';
import { ServiceContext } from '../../contexts/serviceContext';
const OfferService = () => {
    const {setCurrentOption,currentOption,resetServiceData,setIsRegisterService } = useContext(ServiceContext);

    useEffect(() => {

        resetServiceData();
        setCurrentOption('register');
        setIsRegisterService(false);
    
      }, [setCurrentOption, currentOption, resetServiceData, setIsRegisterService]);
    return (
            <RegisterCategory />
    )
}
export default OfferService