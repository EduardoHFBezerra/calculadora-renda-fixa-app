import React from 'react';
import Figure from 'react-bootstrap/Figure';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import InputGroup from 'react-bootstrap/InputGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalculator, faClock } from '@fortawesome/free-solid-svg-icons';
import { NumericFormat } from 'react-number-format';
import { useState } from 'react';

export default function CalculatorForm(props) {
  const [result, setResultCalc] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    props.calculateInterest(result);
  };
  
  const formHandler = (e) => {
    const { name, value } = e.target;
  
    setResultCalc({ ...result, [name]: value });
  };

  return (
    <>
      <Form onSubmit={handleSubmit} className='p-5 rounded-5 shadow bg-light mx-auto'>
        <div className='form-icon text-white text-center bg-primary fs-1 rounded-circle mb-5 mx-auto'>
          <FontAwesomeIcon icon={faCalculator} />
        </div>
        <Figure className='text-center d-block'>
          <h4>CALCULADORA DE RENDA FIXA</h4>
          <Figure.Caption className='blockquote-footer'>
            Faça simulações de renda fixa
          </Figure.Caption>
        </Figure>

        <Row className='mb-3'>
          <Form.Label className='col-form-label col-sm-3 pt-0'>Tipo de investimento</Form.Label>

          {['radio'].map((type) => (
            <div key={`inline-${type}`} className='col-sm-9'>
              <Form.Check
                required
                inline
                label='CDB/LC'
                name='formGridType'
                onChange={formHandler}
                defaultValue='cdblc'
                type={type}
                id={`inline-${type}-1`}
              />
              <Form.Check
                inline
                label='LCI/LCA'
                name='formGridType'
                onChange={formHandler}
                defaultValue='lcilca'
                type={type}
                id={`inline-${type}-2`}
              />
            </div>
          ))}
        </Row>

        <Row className='mb-3'>
          <Form.Group as={Col} controlId='formGridInitial'>
            <Form.Label>Investimento inicial</Form.Label>
            <InputGroup className='mb-2'>
              <InputGroup.Text>R$</InputGroup.Text>
              <Form.Control
                required
                as={NumericFormat}
                placeholder='0,00'
                name='formGridInitial'
                onChange={formHandler}
                thousandSeparator='.'
                decimalSeparator=','
                decimalScale={2}
                fixedDecimalScale={true}
              />
            </InputGroup>
          </Form.Group>

          <Form.Group as={Col} controlId='formGridMonthly'>
            <Form.Label>Investimento mensal</Form.Label>
            <InputGroup className='mb-2'>
              <InputGroup.Text>R$</InputGroup.Text>
              <Form.Control
                required
                as={NumericFormat}
                placeholder='0,00'
                name='formGridMonthly'
                onChange={formHandler}
                thousandSeparator='.'
                decimalSeparator=','
                decimalScale={2}
                fixedDecimalScale={true}
              />
            </InputGroup>
          </Form.Group>
        </Row>

        <Row className='mb-3'>
          <Form.Group as={Col} controlId='formGridRate'>
            <Form.Label>Taxa de juros ao mês</Form.Label>
            <InputGroup className='mb-2'>
              <InputGroup.Text>%</InputGroup.Text>
              <Form.Control
                required
                as={NumericFormat}
                placeholder='0,00'
                name='formGridRate'
                onChange={formHandler}
                thousandSeparator='.'
                decimalSeparator=','
                decimalScale={2}
                fixedDecimalScale={true}
              />
            </InputGroup>
          </Form.Group>

          <Form.Group as={Col} controlId='formGridPeriod'>
            <Form.Label>Período em</Form.Label>
            <InputGroup className='mb-2'>
              <InputGroup.Text>
                <FontAwesomeIcon icon={faClock} />
              </InputGroup.Text>
              <Form.Control
                required
                type='number'
                min='0'
                placeholder='1'
                name='formGridPeriod'
                onChange={formHandler}
              />
              <Form.Select
                required
                id='formGridPeriodIn'
                name='formGridPeriodIn'
                onChange={formHandler}
                defaultValue=''
              >
                <option value='' disabled>selecione</option>
                <option value='anos'>Anos</option>
                <option value='meses'>Meses</option>
              </Form.Select>
            </InputGroup>
          </Form.Group>
        </Row>

        <div className='d-grid gap-2'>
          <Button
            variant='primary'
            type='submit'
            className='btn-calcular border-0 p-3 rounded-5 mt-3'
          >
            Calcular
          </Button>
        </div>
      </Form>
    </>
  );
}
