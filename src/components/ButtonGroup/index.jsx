import React from 'react';
import { useDispatch } from 'react-redux';
import { incrementCounter, decrementCounter } from '../../app/counterSlice';

const ButtonGroup = () => {
  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch(incrementCounter());
  };

  const handleDecrement = () => {
    dispatch(decrementCounter());
  };

  return (
    <div className='flexRow'>
      <button
        className='bg-slate-200 px-4 py-2'
        onClick={() => handleDecrement()}
      >-</button>
      <button
        className='bg-slate-200 px-4 py-2'
        onClick={() => handleIncrement()}
      >+</button>
    </div>
  )
};

export default ButtonGroup;