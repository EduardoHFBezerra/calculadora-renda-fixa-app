import React from 'react';
import Figure from 'react-bootstrap/Figure';
import Select from 'react-select';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import InputGroup from 'react-bootstrap/InputGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalculator, faClock } from '@fortawesome/free-solid-svg-icons';
import { NumericFormat } from 'react-number-format';

export default function CalculadoraForm(props) {

  const options = [
    { value: 'anos', label: 'Anos' },
    { value: 'meses', label: 'Meses' },
  ];

  return (
    <>
      <Form>
        <div className='form-icon'>
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
                inline
                label='CDB/LC'
                name='group1'
                type={type}
                id={`inline-${type}-1`}
              />
              <Form.Check
                inline
                label='LCI/LCA'
                name='group1'
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
                as={NumericFormat}
                placeholder='0,00'
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
                as={NumericFormat}
                placeholder='0,00'
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
                as={NumericFormat}
                placeholder='0,00'
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
              <Form.Control type='text' placeholder='0,00' />
              <Select
                options={options}
                id='periodoEm'
                placeholder={'selecione'}
              />
            </InputGroup>
          </Form.Group>
        </Row>

        <div className='d-grid gap-2'>
          <Button
            variant='primary'
            type='submit'
            className='btn-calcular'
          >
            Calcular
          </Button>
        </div>
      </Form>
    </>
  );
}
