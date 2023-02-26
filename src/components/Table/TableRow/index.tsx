import React from 'react';

import * as S from './styles';

interface TablerRowProps {
  data: any[];
}

const TableRow: React.FC<TablerRowProps> = ({ data }) => {
  return (
    <S.TableRow>
      {Object.values(data).map((item, index) => {
        return <td key={index}>{item}</td>;
      })}
    </S.TableRow>
  );
};

export default TableRow;
