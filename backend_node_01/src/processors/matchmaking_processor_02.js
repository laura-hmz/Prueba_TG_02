const { PythonShell } = require('python-shell');
const path = require('path');

// Función para ejecutar el algoritmo Python
function procesadorPrueba(arrayOfNumbers, arrayOfIds, querySample) {
    // Ruta al script de Python
    //const pythonScriptPath ='../python-scripts/matchmaking_algorithm.py'; 
     const pythonScriptPath = path.join(__dirname, 'python-scripts', 'matchmaking_algorithm.py');
     //const pythonScriptPath = '/opt/render/project/src/backend_node_01/src/python-scripts/matchmaking_algorithm.py';
    //C:\Users\USER\Documents\GitHub\VercelPrueba\backend_node_01\src\python-scripts
    // Opciones para configurar la ejecución
    const options = {
    mode: 'json', // Configura el modo de comunicación para obtener JSON
    //pythonPath: 'python', // Ruta al intérprete de Python (si es necesario)
    args: [JSON.stringify(arrayOfNumbers), JSON.stringify(arrayOfIds), JSON.stringify(querySample)] // Pasa el array de números y el array de Ids como argumentos
    };

  // Ejecuta el script de Python
 
  return new Promise((resolve, reject) => {
    PythonShell.run(pythonScriptPath, options).then((results) => {
      try {
        //console.log(results);
        resolve(results);
      } catch (error) {
        return error;
      }
    })
  });

}

module.exports = {
  procesadorPrueba
};

