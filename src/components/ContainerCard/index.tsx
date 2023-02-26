import React from 'react';

import * as S from './styles';

interface ContainerProps {
  children: any;
}

const ContainerCard: React.FC<ContainerProps> = ({ children }) => (
  <S.ContainerCard>{children}</S.ContainerCard>
);

export default ContainerCard;
