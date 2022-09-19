import React, { useState, createContext, useContext, useReducer } from 'react';

const counterContext = createContext(null);
const reducer = (state, action) => {
  switch (action.type) {
    case 'add':
      return state + 1;
    case 'subtract':
      return state - 1;
    default:
      return state;
  }
};
const CounterContextProvider = ({ children }) => (
  //useReducer(reducer,0) returns [state,dispatch] with state === 0
  <counterContext.Provider value={useReducer(reducer, 0)}>
    {children}
  </counterContext.Provider>
);

const AddButton = () => {
  const [, dispatch] = useContext(counterContext);
  return (
    <div>
      <button onClick={() => dispatch({ type: 'add' })}>Add One</button>
    </div>
  );
};
const SubtractButton = () => {
  const [, dispatch] = useContext(counterContext);
  return (
    <div>
      <button onClick={() => dispatch({ type: 'subtract' })}>
        Subtract One
      </button>
    </div>
  );
};
const Counter = () => {
  const [counter] = useContext(counterContext);
  return <div>Counter:{counter}</div>;
};

const CounterUseReducer = () => {
  return (
    <CounterContextProvider>
      <Counter />
      <AddButton />
      <SubtractButton />
    </CounterContextProvider>
  );
};

export default function CounterUseReducerPage() {
  return (
    <div>
      <CounterUseReducer />
    </div>
  );
}
