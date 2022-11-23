import './App.css';
import React, { useState } from 'react';
import CalculatorForm from './components/CalculatorForm';
import CalculatorResult from './components/CalculatorResult';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function App() {
  const [result, setResultCalc] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const calculateInterest = (calc) => {
      setResultCalc([
        { ...calc, id: 1 }
      ]);
      handleShow();
  };
  
  return (
    <>
      <div className='calculator my-5'>
        <CalculatorForm
          calculateInterest={calculateInterest}
        />
        <Modal
          show={show}
          onHide={handleClose}
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>Resultado</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <CalculatorResult
              result={result}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant='primary' onClick={handleClose}>
              Fechar
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}

export default App;
