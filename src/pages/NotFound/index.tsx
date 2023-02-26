import React from 'react';

import * as S from './styles';

import Container from '../../components/Container';

const NotFound: React.FC = () => {
  return (
    <Container title='Página não encontrada!'>
      <S.Navigate to='/'>Ir para o ínicio</S.Navigate>
    </Container>
  );
};

export default NotFound;
