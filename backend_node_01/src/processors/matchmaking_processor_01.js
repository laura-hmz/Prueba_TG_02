const { PythonShell } = require('python-shell');

function processMatchmaking(surveyResults, idsVecinos, querySample) {
  // Ruta al script de Python
  console.log("Esto recibe el precesador", surveyResults, idsVecinos, querySample);
  const pythonScriptPath = 'C://Users//USER//Documents//GitHub//Prueba_TG_02//backend_node_01//src/python-scripts/matchmaking_algorithm.py';

  // Opciones para configurar la ejecución
  const options = {
    mode: 'json', // Configura el modo de comunicación para obtener JSON
    pythonPath: 'python', // Ruta al intérprete de Python (si es necesario)
    args: [JSON.stringify(surveyResults), JSON.stringify(idsVecinos), JSON.stringify(querySample)]
  };

  return new Promise((resolve, reject) => {
    PythonShell.run(pythonScriptPath, options, (err, results) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(results);
    });
  });
}

module.exports = {
  processMatchmaking
};
