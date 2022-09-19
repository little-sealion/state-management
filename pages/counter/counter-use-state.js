import React, { useState } from 'react';

const ButtonContainer = ({ setCounter }) => (
  <div>
    <AddButton setCounter={setCounter} />
  </div>
);
const AddButton = ({ setCounter }) => (
  <div>
    <button onClick={() => setCounter((prev) => prev + 1)}>Add One</button>
  </div>
);
const Counter = ({ counter }) => <div>Counter:{counter}</div>;

const CounterUseState = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <Counter counter={counter} />
      <ButtonContainer setCounter={setCounter} />
    </div>
  );
};

export default CounterUseState;
