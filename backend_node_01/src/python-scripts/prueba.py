import numpy as np
import json
import sys
#import bson

def calculate_results(array_of_numbers,ids_vecinos):
  """
  Calcula los resultados de un array de números.

  Args:
    array_of_numbers: Un array de números.

  Returns:
    Un array de números con los resultados.
  """

  # Realiza las operaciones necesarias para calcular los resultados.

  results = np.array(array_of_numbers)

  return results

if __name__ == "__main__":
  array_of_numbers = json.loads(sys.argv[1])
  ids_vecinos = json.loads(sys.argv[2])

  # Ejecuta el algoritmo y recupera los resultados.

  results = calculate_results(array_of_numbers,ids_vecinos)

  # Imprime los resultados.

  print(results)
