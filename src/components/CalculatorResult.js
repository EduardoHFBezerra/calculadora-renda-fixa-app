import React from 'react';
import Calculator from './Calculator';

export default function CalculatorResult(props) {
  return (
    <>
    {props.result.map((calc) => (
      <Calculator
        key={calc.id}
        calc={calc}
      />
    ))}
    </>
  )
}