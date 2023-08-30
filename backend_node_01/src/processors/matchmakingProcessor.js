const { exec } = require('child_process');

function processMatchmaking(surveyResults, idsVecinos, querySample) {
    // Ruta al script de Python
    const pythonScriptPath = 'C://Users//USER//Documents//GitHub//Prueba_TG_02//backend_node_01//src/python-scripts/matchmaking_algorithm.py'; 
    const command = `python ${pythonScriptPath} "${JSON.stringify(surveyResults)}" "${JSON.stringify(idsVecinos)}" "${JSON.stringify(querySample)}"`;

    return new Promise((resolve, reject) => {
        exec(command, (error, stdout, stderr) => {
            if (error) {
                reject(error);
                return;
            }
            const processedResults = JSON.parse(stdout);
            resolve(processedResults);
        });
    });
}

module.exports = {
    processMatchmaking
};
