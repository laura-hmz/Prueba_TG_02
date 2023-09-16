

const SearchResults = ({ results }) => {
  console.log('SERACH RESULTS');
  console.log(results, typeof results);

  return (
    <div>
      <h2>Resultados de la búsqueda:</h2>
      <ul>
        {results.orderedServices && results.orderedServices.map((result, index) => (
          <li key={index}>{result.nombre}</li> // Suponiendo que cada resultado tiene una propiedad "name"
        ))}
      </ul>
    </div>
  );
};

export default SearchResults;
