import sys
import json
import numpy as np
from sklearn.neighbors import NearestNeighbors

def process_matchmaking(survey_results,ids_vecinos,query_sample):
    # Aquí procesa los resultados de encuestas y devuelve los resultados procesados
    neigh = NearestNeighbors(radius=10)
    neigh.fit(survey_results)
    #query_sample = [[1, 0, 0, 0.5, 0, 1.5, 0, 0, 0, 0.5, 1, 0, 0.5, 0, 1.5]]
    
    rng = neigh.radius_neighbors(query_sample)
    distancia = np.asarray(rng[0][0])
    vecinosPos = np.asarray(rng[1][0])

    # Crear una lista de tuplas (índice de vecino, distancia)
    vecinos_con_distancia = [(indice, distancia) for indice, distancia in zip(vecinosPos, distancia)]
   
    # Ordenar la lista de vecinos por distancia
    vecinos_ordenados = sorted(vecinos_con_distancia, key=lambda x: x[1])
    
    # Extraer solo los índices ordenados
    indices_vecinos_ordenados = [indice for indice, _ in vecinos_ordenados]

    # Ordenar los IDs de vecinos de acuerdo con los índices ordenados
    ids_vecinos_ordenados = [ids_vecinos[indice] for indice in indices_vecinos_ordenados]

    processed_results = ids_vecinos_ordenados
    #print(processed_results)
    return processed_results



if __name__ == "__main__":
    survey_results_json = sys.argv[1]
    ids_vecinos_json = sys.argv[2]
    query_sample_json = sys.argv[3]  # Agregar el tercer argumento

    survey_results = json.loads(survey_results_json)
    ids_vecinos = json.loads(ids_vecinos_json)
    query_sample = json.loads(query_sample_json)  # Cargar la lista de query_sample

    processed_results = process_matchmaking(survey_results, ids_vecinos, query_sample)  # Pasar todas las listas como argumentos
    print(json.dumps(processed_results))
    