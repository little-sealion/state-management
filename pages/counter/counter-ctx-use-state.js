import React, { useState, createContext, useContext } from 'react';

const counterContext = createContext(null);
const CounterContextProvider = ({ children }) => (
  //useState(0) returns an [counter,setCounter]
  <counterContext.Provider value={useState(0)}>
    {children}
  </counterContext.Provider>
);

const ButtonContainer = () => (
  <div>
    <AddButton />
  </div>
);

const AddButton = () => {
  const [, setCounter] = useContext(counterContext);
  return (
    <div>
      <button onClick={() => setCounter((prev) => prev + 1)}>Add One</button>
    </div>
  );
};
const Counter = () => {
  const [counter] = useContext(counterContext);
  return <div>Counter:{counter}</div>;
};

const CounterUseState = () => {
  return (
    <CounterContextProvider>
      <Counter />
      <ButtonContainer />
    </CounterContextProvider>
  );
};

export default function CounterUseStatePage() {
  return (
    <div>
      <CounterUseState />
      <CounterUseState />
      <CounterUseState />
      <CounterUseState />
    </div>
  );
}
