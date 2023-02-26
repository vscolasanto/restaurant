import React from 'react';

import * as S from './styles';

interface ContainerProps {
  title: string;
  subtitle?: string;
  children: any;
}

const Container: React.FC<ContainerProps> = ({ title, subtitle, children }) => (
  <S.Container>
    <S.Title>{title}</S.Title>
    {subtitle && <S.Subtitle>{subtitle}</S.Subtitle>}
    <S.Hr />
    {children}
  </S.Container>
);

export default Container;
