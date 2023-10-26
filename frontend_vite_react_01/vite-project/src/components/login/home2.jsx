
import LoginButton from './loginButton';
const Home2 = () => {

  
    return (
        
        <section className="antialiased min-h-screen font-sans bg-gradient-to-br from-[#CC1F33] to-[#000000]">
            <div className="container mx-auto">
                <div className="flex flex-wrap  relative">
                    <div className="   lg:w-9/10  md:w-9/10 w-full mx-auto relative">
                        <div className="bg-white  mt-4   shadow-xl border border-gray-100 rounded-lg px-8 py-4 overflow-hidden relative">
                            <div className="grid mx-auto  flex items-center lg:grid-cols-2 lg:gap-x-12 md:px-10 md:py-8 lg:px-10 lg:py-8  ">
                                <div className="mb-8 lg:mb-0 md:mb-0  md:ml-4 text-center md:text-left">
                                <h2 className="   text-5xl font-bold  leading-tight tracking-tight">
                                    Encuentra y Publica  
                                </h2>
                                <h3 className="  mb-10 text-gray-900 text-5xl font-bold leading-tight tracking-tight">
                                Servicios
                                </h3>
                                <LoginButton/>
                                </div>

                                <div className=" mt-4 md:mt-0 lg:mt-0 rounded-lg border-solid border-2 border-gray-300 shadow-2xl">
                                    <img src="https://res.cloudinary.com/dt0ejpyba/image/upload/v1698281702/copia_mpuiek.jpg"
                                        className="w-full  md:h-[500px] rounded-lg object-cover" alt="" 
                                        loading="lazy"/>
                                </div>
                            </div>
                    

                        </div>
                    </div>
                </div>
            </div>
        
        </section>
       
    );
};

export default Home2