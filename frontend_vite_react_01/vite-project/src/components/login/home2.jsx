
import LoginButton from './loginButton';
const Home2 = () => {

  
    return (
        <div className="container my-12 mx-auto md:px-6">

            <section className="mb-32 text-center lg:text-left">
                <div className="px-6 py-12 md:px-12">
                    <div className="grid items-center lg:grid-cols-2 lg:gap-x-12">
                        <div className="mb-12 lg:mb-0">
                            <h2 className="my-12 text-5xl font-bold leading-tight tracking-tight">
                                Publica y Adquiere  <br />
                                <span className="text-success dark:text-success-400">Servicios</span>
                            </h2>
                            <LoginButton/>
                        </div>

                        <div className="mb-12 lg:mb-0">
                            <img src="https://i.ibb.co/9bd4P8c/banner-mix-2.jpg"
                                className="w-full rounded-lg shadow-lg dark:shadow-black/20" alt="" />
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Home2