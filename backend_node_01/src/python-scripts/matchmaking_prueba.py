import pandas as pd
import numpy as np
from sklearn.neighbors import NearestNeighbors

samples = [[0.5, 1, 0, 0.5, 0, 0, 1.5, 0, 0, 0.5, 0, 1, 0, 0, 1.5], [1.5, 0, 0, 0.5, 0, 0, 1, 0, 0, 1, 0, 0.5, 0, 0.5, 0],
          [0, 1.5, 0, 0, 0.5, 0, 0, 1, 1.5, 0, 0, 0.5, 0, 0, 1],[0, 0, 0, 0, 0.5, 0, 1, 0.5, 0, 1.5, 0, 1, 0.5, 1.5, 0],
          [0.5, 0.5, 1.5, 0, 0, 0, 0, 1, 0, 0.5, 1, 0, 1, 0, 0.5],[1, 0, 0, 0.5, 0, 1.5, 0, 0, 0, 0.5, 1, 0, 0.5, 0, 1.5]]

print("")
columns = ["Preg_1", "Preg_2", "Preg_3","Preg_4","Preg_5","Preg_6","Preg_7","Preg_8","Preg_9","Preg_10","Preg_11","Preg_12","Preg_13","Preg_14","Preg_15"]
index = ["persona_0", "persona_1", "persona_2", "persona_3","persona_4","persona_5"]

df = pd.DataFrame(samples, columns=columns, index=index)
df.head()

#----------------------------------------------- Algorithm -----------------------------------------------
neigh = NearestNeighbors(radius=3)
neigh.fit(samples)

rng = neigh.radius_neighbors([[1, 0, 0, 0.5, 0, 1.5, 0, 0, 0, 0.5, 1, 0, 0.5, 0, 1.5]])

distancia=np.asarray(rng[0][0])
vecinosPos=np.asarray(rng[1][0])


min_index = np.argmin(distancia)
vecinoFinal= vecinosPos[min_index]

distancia_maxima = np.max(distancia)
porcentajes_cercania = (1 - (distancia / distancia_maxima)) * 100
porcentaje_vecino_final=porcentajes_cercania[min_index]

print(distancia,vecinosPos,porcentajes_cercania)
print("El vecino más próximo es el", vecinoFinal, "con una cercanía de", "{:.2f}%".format(porcentaje_vecino_final))


