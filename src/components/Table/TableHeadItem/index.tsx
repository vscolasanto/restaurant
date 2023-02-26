import React from 'react';

import * as S from './styles';

interface TableHeadItemProps {
  item: any;
}

const TableHeadItem: React.FC<TableHeadItemProps> = ({ item }) => {
  return <S.TableHeadItem title={item}>{item}</S.TableHeadItem>;
};

export default TableHeadItem;
