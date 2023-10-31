import './spaceLoader.css';
import FormsComponentsStyle from '../../servicios/servicesComponentesStyle/formsComponentsStyle';
const SpaceLoader = () => {
    const {
        divGrid,
        divGridSub
    } = FormsComponentsStyle;
    return (
        <div className={divGrid}>
            <div className={divGridSub}>
                <h1 className="mt-4 lg:mt-28 md:ml-4 text-center text-2xl lg:text-4xl font-serif text-gray-500 ">
                    No has guardado ningún servicio  </h1>
                <h1 className="  mt-2 text-center text-xl lg:text-3xl font-serif text-gray-400 mb-6">
                    ¡No esperes más para explorar!</h1>
                <p className="mt-2 text-center text-sm md:text-base lg:text-md text-gray-500">
                    Dirigete a *Buscar servicios* o a *Home* en la barra de navegación </p>
                <p className="mt-2 text-center text-sm md:text-base lg:text-md text-gray-500">
                    y guarda los servicios que deses consultar después</p>
                    
            </div>

            <div className={divGridSub}>
                <div className="rocket">
                    <div className="rocket-body lg:float-right">
                        <div className="body"></div>
                        <div className="fin fin-left"></div>
                        <div className="fin fin-right"></div>
                        <div className="window"></div>
                    </div>
                <div className="exhaust-flame"></div>
                <ul className="exhaust-fumes">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <ul className="star">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                </div>
            </div>

        </div>

    );
};

export default SpaceLoader;