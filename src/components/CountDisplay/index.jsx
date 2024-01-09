import React from 'react';
import { useSelector } from 'react-redux';

const CounterDisplay = () => {
  const counter = useSelector((state) => state.counter.counter);
  console.log(counter);
  return (
    <div>
      <span>{counter}</span>
    </div>
  )
};

export default CounterDisplay;