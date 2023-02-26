import React from 'react';

import * as S from './styles';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  width?: number;
}

const Input: React.FC<InputProps> = ({ width, ...props }) => {
  return <S.Container {...props} style={{ width }} />;
};

export default Input;
