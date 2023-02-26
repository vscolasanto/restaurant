import React from 'react';

import * as S from './styles';

interface ProductTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  value: string;
  maxLength: number;
}

const ProductTextarea: React.FC<ProductTextareaProps> = ({ value, maxLength, ...props }) => {
  const length = value?.length;

  return (
    <S.TextareaContainer>
      <S.Textarea value={value} maxLength={maxLength} {...props}></S.Textarea>
      <S.TextareaLimit className={length === maxLength ? 'max' : ''}>
        {length} / {maxLength}
      </S.TextareaLimit>
    </S.TextareaContainer>
  );
};

export default ProductTextarea;
