import React from 'react';
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
    <div className='form p-5 rounded-5 shadow bg-light mx-auto'>
      <div className='form-icon text-white text-center bg-primary fs-1 rounded-circle mb-5 mx-auto'>
        <FontAwesomeIcon icon={faCalculator} />
      </div>
      <figure className='text-center'>
        <blockquote className='blockquote'>
          <p>CALCULADORA DE RENDA FIXA</p>
        </blockquote>
        <figcaption className='blockquote-footer'>
          Faça simulações de renda fixa
        </figcaption>
      </figure>
      <Form onSubmit={handleSubmit}>
        <Row className='mb-3'>
          <Col sm={12}>
            <Form.Label className='col-form-label pt-0'>
              Tipo de investimento
            </Form.Label>

            {['radio'].map((type) => (
              <div key={`inline-${type}`}>
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
          </Col>
        </Row>

        <Row className='mb-3'>
          <Form.Group as={Col} sm={6} controlId='formGridInitial'>
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

          <Form.Group as={Col} sm={6} controlId='formGridMonthly'>
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
          <Form.Group as={Col} sm={6} controlId='formGridRate'>
            <Form.Label>Taxa de juros ao mês</Form.Label>
            <InputGroup className='mb-2'>
              <InputGroup.Text>%</InputGroup.Text>
              <Form.Control
                required
                as={NumericFormat}
                placeholder='0,00'
                name='formGridRate'
                onChange={formHandler}
                decimalSeparator=','
                decimalScale={2}
                fixedDecimalScale={true}
              />
            </InputGroup>
          </Form.Group>

          <Form.Group as={Col} sm={6} controlId='formGridPeriod'>
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
                <option value='' disabled>
                  selecione
                </option>
                <option value='year'>Anos</option>
                <option value='month'>Meses</option>
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
    </div>
  );
}
