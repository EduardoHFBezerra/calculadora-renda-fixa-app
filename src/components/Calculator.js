import React from 'react';
import Table from 'react-bootstrap/Table';
import { useEffect, useState } from 'react';

export default function Calculator(props) {
  const [result, setResult] = useState({});

  const currencyFormat = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  const convertToFloat = (e) => {
    let value = e;
    let regex = /([+-]?[0-9|^.|^,]+)[\\.|,]([0-9]+)$/gim;
    let result = regex.exec(value);
    let floatResult = result
      ? result[1].replace(/[.,]/g, '') + '.' + result[2]
      : value.replace(/[^0-9-+]/g, '');

    return parseFloat(floatResult);
  };

  const getAliquota = (period) => {
    if (period < 6) {
      return 0.225;
    } else if (period >= 6 && period < 12) {
      return 0.2;
    } else if (period >= 12 && period < 24) {
      return 0.175;
    } else if (period >= 24) {
      return 0.15;
    }
  };

  useEffect(() => {
    const initialContribution = convertToFloat(props.calc.formGridInitial);
    const monthlyContribution = convertToFloat(props.calc.formGridMonthly);
    const typeInvestment = props.calc.formGridType;
    let rate = convertToFloat(props.calc.formGridRate);
    let period = props.calc.formGridPeriod;
    const periodIn = props.calc.formGridPeriodIn;

    rate = rate / 100;
    period = periodIn === 'anos' ? period * 12 : period;

    const futureValue = initialContribution * (1 + rate) ** period +
      (monthlyContribution * ((1 + rate) ** period - 1)) / rate;

    const totalSpent = (monthlyContribution * period) + initialContribution;

    const grossEarned = futureValue - totalSpent;
    const tax = typeInvestment === 'cdblc' ? getAliquota(period) : 0;
    const earnedIncome = tax === 0 ? grossEarned : grossEarned - grossEarned * tax;
    const obj = {
      totalSpent: totalSpent,
      grossEarned: grossEarned,
      earnedIncome: earnedIncome,
      futureValue: futureValue,
      totalNetReceivable: totalSpent + earnedIncome,
      tax: tax,
    };
    setResult((result) => ({ ...result, ...obj }));
  }, [props]);

  return (
      <Table responsive borderless>
        <thead>
          <tr>
            <th>DESCRIÇÃO</th>
            <th>VALOR</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Total aplicado</td>
            <td className='text-info'>
              {currencyFormat.format(result.totalSpent)}
            </td>
          </tr>
          <tr>
            <td>Valor ganho em juros</td>
            <td className='text-success'>
              {currencyFormat.format(result.grossEarned)}
            </td>
          </tr>
          <tr>
            <td>Total de rendimento líquido</td>
            <td className='text-success'>
              {currencyFormat.format(result.earnedIncome)}
            </td>
          </tr>
          <tr>
            <td>Total bruto</td>
            <td className='text-success'>
              {currencyFormat.format(result.futureValue)}
            </td>
          </tr>
          <tr>
            <td>Total líquido a receber</td>
            <td className='text-success'>
              {currencyFormat.format(result.totalSpent + result.earnedIncome)}
            </td>
          </tr>
          <tr>
            <td>Imposto de renda sobre a rentabilidade</td>
            <td className='text-danger'>
              {result.tax === 0
                ? 'isento'
                : `${result.tax * 100}% <-> ${currencyFormat.format(
                    result.tax * result.grossEarned
                  )}`}
            </td>
          </tr>
        </tbody>
      </Table>
  );
}
