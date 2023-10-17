import './folderLoader.css';
import FormsComponentsStyle from '../../servicios/servicesComponentesStyle/formsComponentsStyle';
const FolderLoader = () => {
    const {
        divGrid,
        divGridSub
    } = FormsComponentsStyle;

    return (
        
<div className={divGrid}>
            <div className={divGridSub}>
                <h1 className="mt-4 lg:mt-28 md:ml-4 text-center text-2xl lg:text-4xl font-serif text-gray-500">
                    No has registrado ningún servicio  </h1>
                    <h1 className="  mt-2 text-center text-xl lg:text-3xl font-serif text-gray-400">
                    ¡No esperes más para ofrecer!</h1>
                    
            </div>

            <div className={divGridSub}>
            <div className="container2">
                <div className="folder">
                    <div className="top"></div>
                    <div className="bottom"></div>
                </div>
               
                </div>
            </div>

        </div>
  
    );
}

export default FolderLoader;