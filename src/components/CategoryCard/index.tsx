import React from 'react';

import * as S from './styles';

interface CategoryCardProps {
  url: string;
  icon: any;
  title: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ url, icon, title }) => {
  return (
    <S.Container to={url}>
      {icon}
      <div>{title}</div>
    </S.Container>
  );
};

export default CategoryCard;
