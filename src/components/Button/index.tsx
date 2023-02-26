import React from 'react';

import * as S from './styles';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  description: string;
  width?: number;
}

const Button: React.FC<ButtonProps> = ({ description, width, ...props }) => {
  return (
    <S.Container {...props} style={{ width }}>
      {description}
    </S.Container>
  );
};

export default Button;
