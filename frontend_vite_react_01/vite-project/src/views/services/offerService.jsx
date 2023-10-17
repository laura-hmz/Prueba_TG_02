import RegisterCategory from "../../components/servicios/registerCategory"
import { useEffect,useContext } from 'react';
import { ServiceContext } from '../../contexts/serviceContext';
const OfferService = () => {
    const {setCurrentOption,currentOption,resetServiceData } = useContext(ServiceContext);

    useEffect(() => {

        resetServiceData();
        setCurrentOption('register');
        console.log('currentOption en OfferService',currentOption);
    
      }, [setCurrentOption, currentOption, resetServiceData]);
    return (
            <RegisterCategory />
    )
}
export default OfferService