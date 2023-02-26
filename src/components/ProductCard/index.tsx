import React from 'react';
import { formatPrice } from '~/helpers/currency';

import * as S from './styles';

interface ProductCardProps {
  product: ProductProp;
}

interface ProductProp {
  id: number;
  title: string;
  subtitle: string;
  price: number;
  imageUrl: string;
  url: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <S.Container to={'detail/' + product.id}>
      <S.CardImage>
        <img src={product.imageUrl} alt='' />
      </S.CardImage>
      <S.CardInfo>
        <S.CardPrimaryInfo>
          <S.CardTitle>{product.title}</S.CardTitle>
          <S.CardPrice>{formatPrice(product.price)}</S.CardPrice>
        </S.CardPrimaryInfo>
        <S.CardSubtitle>{product.subtitle}</S.CardSubtitle>
      </S.CardInfo>
    </S.Container>
  );
};

export default ProductCard;
