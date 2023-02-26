import React from 'react';
import { formatToNumber, formatPrice } from '~/helpers/currency';

import * as S from './styles';

import TableHeadItem from './TableHeadItem';
import TableRow from './TableRow';

interface TableProps extends React.InputHTMLAttributes<HTMLInputElement> {
  theadData: string[];
  tbodyData: any[];
  customClass?: any;
}

const Table: React.FC<TableProps> = ({ theadData, tbodyData, customClass }) => {
  const subTotal = () => {
    return tbodyData.length > 1
      ? tbodyData.reduce((prev, curr) => {
          let prevNumber = formatToNumber(prev.total);
          return (prevNumber += formatToNumber(curr.total));
        })
      : formatToNumber(tbodyData[0].total);
  };

  const serviceTax = () => subTotal() * 0.1;
  const total = () => subTotal() + serviceTax();

  return (
    <S.Table className={customClass}>
      <thead>
        <tr>
          {theadData.map((h, index) => {
            return <TableHeadItem key={index} item={h} />;
          })}
        </tr>
      </thead>
      <tbody>
        {tbodyData.map((item, index) => {
          return <TableRow key={index} data={item} />;
        })}
        <S.TableTotals>
          <td colSpan={3}>(+) SubTotal</td>
          <td>{formatPrice(subTotal())}</td>
        </S.TableTotals>
        <S.TableTotals>
          <td colSpan={3}>(+) Serviço (10%)</td>
          <td>{formatPrice(serviceTax())}</td>
        </S.TableTotals>
        <S.TableTotals>
          <td colSpan={3}>(=) Total</td>
          <td>{formatPrice(total())}</td>
        </S.TableTotals>
      </tbody>
    </S.Table>
  );
};

export default Table;
