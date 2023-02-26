import React, { ChangeEvent, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import * as S from './styles';

import { CartContext } from '~/contexts/cart.context';
import { CartContextType, IProductCart } from '~/@types/cart';

import Container from '../../components/Container';
import Button from '../../components/Button';
import Input from '../../components/Input';
import ProductTextarea from '../../components/ProductTextarea';

import { MockMenu } from '~/repository/mock-menu';
import { MockItems, ProductInterface } from '~/repository/mock-items';
import { useSnackBarContext } from '~/hooks/useSnackbar';

const ProductDetail: React.FC = () => {
  const navigate = useNavigate();
  const { key, id } = useParams();
  const { saveCart } = React.useContext(CartContext) as CartContextType;
  const { createSnackBar } = useSnackBarContext();

  const [product, setProduct] = useState<ProductInterface>({} as ProductInterface);

  useEffect(() => {
    const catId = MockMenu.find((item) => item.title === 'Cardápio')?.children?.find((item) =>
      item.path.includes(key),
    )?.id;
    const product = MockItems.find(
      (item) => item.categoryId === catId && item.id === Number(id),
    ) as ProductInterface;
    setProduct(product);
  }, [key, id]);

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProduct(
      (prev) =>
        ({
          ...prev,
          [name]: value,
        } as ProductInterface),
    );
  };

  const changeQuantity = (type: '-' | '+') => {
    if (!product?.quantity && type === '-') {
      setProduct(
        (prev) =>
          ({
            ...prev,
            quantity: 0,
          } as ProductInterface),
      );
    } else {
      setProduct(
        (prev) =>
          ({
            ...prev,
            quantity: type === '-' ? product?.quantity - 1 : product?.quantity + 1,
          } as ProductInterface),
      );
    }
  };

  const createProduct = (product: ProductInterface): IProductCart => ({
    productId: product.id,
    categoryId: product.categoryId,
    title: product.title,
    observation: product.observation || '',
    imageUrl: product.imageUrl,
    quantity: product.quantity,
    price: product.price,
    total: product.quantity * product.price,
  });

  const handleSubmit = async () => {
    createSnackBar({
      content: 'Produto adicionado ao carrinho!',
      type: 'SUCCESS',
    });
    saveCart(createProduct(product));
    navigate('/');
  };

  return (
    <Container title={product?.title || ''}>
      <S.ProductImage>
        <img src={product?.imageUrl} alt={product?.title} />
      </S.ProductImage>

      <S.ProductInlineBlock>
        <S.ProductBlock>
          <div className='description'>Descrição</div>
          <div className='content'>{product?.subtitle}</div>
        </S.ProductBlock>

        <S.ProductBlock style={{ flex: 1 }}>
          <div className='description'>Quantidade</div>
          <div className='content'>
            <Button
              description='-'
              width={50}
              className='secondary minus-button'
              disabled={!product?.quantity}
              onClick={() => changeQuantity('-')}
            />
            <Input
              readOnly
              name='quantity'
              value={product?.quantity || 0}
              width={50}
              className='quantity-input'
            />
            <Button
              description='+'
              width={50}
              className='secondary plus-button'
              onClick={() => changeQuantity('+')}
            />
          </div>
        </S.ProductBlock>
      </S.ProductInlineBlock>

      <S.ProductBlock>
        <div className='description'>Observações:</div>
        <ProductTextarea
          name='observation'
          value={product?.observation || ''}
          placeholder='Exemplo: filé bem passado, retirar cebola...'
          maxLength={200}
          onChange={handleChange}
        ></ProductTextarea>
      </S.ProductBlock>
      <S.ProductActionButton>
        <Button
          description='Pedir'
          width={200}
          className='secondary'
          disabled={!product?.quantity}
          onClick={handleSubmit}
        ></Button>
      </S.ProductActionButton>
    </Container>
  );
};

export default ProductDetail;
