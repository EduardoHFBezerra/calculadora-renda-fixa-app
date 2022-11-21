import React from 'react';
import Select from 'react-select'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalculator, faClock } from '@fortawesome/free-solid-svg-icons';

const options = [
    { value: 'anos', label: 'Anos' },
    { value: 'meses', label: 'Meses' }
];

export default function CalculadoraForm(props) {
  return (
    <>
      <form className='g-3'>
        <figure className='text-center'>
          <h4>CALCULADORA DE RENDA FIXA</h4>
          <figcaption className='blockquote-footer'>
            Faça simulações de renda fixa
          </figcaption>
        </figure>
        <div className='form-icon'>
          <FontAwesomeIcon icon={faCalculator} />
        </div>
        <fieldset className='form-group row mb-3'>
          <div className='row'>
            <legend className='col-form-label col-sm-3 pt-0'>
              Tipo de investimento
            </legend>
            <div className='col-sm-9'>
              <div className='form-check form-check-inline'>
                <input
                  className='form-check-input'
                  type='radio'
                  name='tipoInvestimento'
                  id='tipoInvestimento'
                  defaultValue='cdblc'
                />
                <label className='form-check-label'>
                  CDB/LC
                </label>
              </div>
              <div className='form-check form-check-inline'>
                <input
                  className='form-check-input'
                  type='radio'
                  name='tipoInvestimento'
                  id='tipoInvestimento2'
                  defaultValue='lcilca'
                />
                <label className='form-check-label'>
                  LCI/LCA
                </label>
              </div>
            </div>
          </div>
        </fieldset>
        <div className='form-group row mb-3'>
          <div className='col-sm-6'>
            <label className='form-label'>Investimento inicial</label>
            <div className='input-group'>
              <span className='input-group-text'>R$</span>
              <input
                type='text'
                className='form-control'
                id='aporteInicial'
                placeholder='0,00'
              />
            </div>
          </div>
          <div className='col-sm-6'>
            <label className='form-label'>Investimento mensal</label>
            <div className='input-group'>
              <span className='input-group-text'>R$</span>
              <input
                type='text'
                className='form-control'
                id='aporteMensal'
                placeholder='0,00'
              />
            </div>
          </div>
        </div>
        <div className='form-group row mb-3'>
          <div className='col-sm-6'>
            <label className='form-label'>Taxa de juros ao mês</label>
            <div className='input-group'>
              <span className='input-group-text'>%</span>
              <input
                type='text'
                className='form-control'
                id='jurosMes'
                placeholder='0,00'
              />
            </div>
          </div>
          <div className='col-sm-6'>
            <label className='form-label'>Período em</label>
            <div className='input-group'>
              <span className='input-group-text'>
                <FontAwesomeIcon icon={faClock} />
              </span>
              <input
                type='number'
                className='form-control'
                id='periodo'
                defaultValue='1'
              />
              <Select 
                options={options} 
                id='periodoEm'
                placeholder={'selecione'}
              />
            </div>
          </div>
        </div>
        <div className='form-group row'>
          <div className='col-sm-12'>
            <div className='d-grid gap-2'>
              <button 
                type='submit' 
                className='btn btn-block btn-calcular' 
                onclick='calcular();return false;'
              >
                Calcular
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
