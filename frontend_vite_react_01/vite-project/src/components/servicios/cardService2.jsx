

const CardService2 = () => {
  return (
    <div className="antialiased bg-gray-200 font-sans">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-center min-h-screen">
          <div className="max-w-sm w-full sm:w-1/2 lg:w-1/3 py-6 px-3">
            <div className="bg-white shadow-xl rounded-lg overflow-hidden">
              <div
                className="bg-cover bg-center h-56 p-4"
                style={{
                  backgroundImage:
                    'url(https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80)',
                }}
              >
                <div className="flex justify-end">
                  {/* Reemplaza el SVG aquí */}
                </div>
              </div>
              <div className="p-4">
                <p className="uppercase tracking-wide text-sm font-bold text-gray-700">
                  Detached house • 5y old
                </p>
                <p className="text-3xl text-gray-900">$750,000</p>
                <p className="text-gray-700">742 Evergreen Terrace</p>
              </div>
              <div className="flex p-4 border-t border-gray-300 text-gray-700">
                <div className="flex-1 inline-flex items-center">
                  {/* Reemplaza el SVG aquí */}
                  <p>
                    <span className="text-gray-900 font-bold">3</span> Bedrooms
                  </p>
                </div>
                <div className="flex-1 inline-flex items-center">
                  {/* Reemplaza el SVG aquí */}
                  <p>
                    <span className="text-gray-900 font-bold">2</span> Bathrooms
                  </p>
                </div>
              </div>
              <div className="px-4 pt-3 pb-4 border-t border-gray-300 bg-gray-100">
                    <div className="text-xs uppercase font-bold text-gray-600 tracking-wide">
                     Realtor
                    </div>
                    <div className="flex items-center pt-2">
                        <div
                            className="bg-cover bg-center w-10 h-10 rounded-full mr-3"
                            style={{
                            backgroundImage:
                                'url(https://images.unsplash.com/photo-1500522144261-ea64433bbe27?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80)',
                                }}
                  >      </div>
                                <div>
                                    <p className="font-bold text-gray-900">Tiffany Heffner</p>
                                    <p className="text-sm text-gray-700">(555) 555-4321</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default CardService2;
