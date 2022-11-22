import './App.css';
import React, { useState } from 'react';
import CalculatorForm from './components/CalculatorForm';
import CalculatorResult from './components/CalculatorResult';
import { useRef } from 'react';

function App() {
  const [result, setResultCalc] = useState([]);
  const scrollToRef = useRef();

  const calculateInterest = (calc) => {
      setResultCalc([
        { ...calc, id: 1 }
      ]);
      scrollToRef.current.scrollIntoView();
  };
  
  return (
    <>
      <div className='calculator my-5'>
        <CalculatorForm
          calculateInterest={calculateInterest}
        />
        <div ref={scrollToRef}>
        <CalculatorResult
          result={result}
        />
        </div>
      </div>
    </>
  );
}

export default App;
