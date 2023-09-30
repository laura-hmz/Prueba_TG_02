import  { useState, createContext, useContext } from 'react';

const MyContext = createContext();

const MyProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  return (
    <MyContext.Provider value={[count, setCount]}>
      {children}
    </MyContext.Provider>
  );
};

const MyConsumer = ({ children }) => {
  const [count, setCount] = useContext(MyContext);

  return (
    <div>
      <p>El contador actual es: {count}</p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
    </div>
  );
};


export { MyContext, MyProvider, MyConsumer };
