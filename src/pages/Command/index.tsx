import React from 'react';

import * as S from './styles';

import { CartContextType, IProductCart } from '~/@types/cart';
import Table from '~/components/Table';
import { CartContext } from '~/contexts/cart.context';
import { formatPrice } from '~/helpers/currency';
import Container from '../../components/Container';

const Command: React.FC = () => {
  const { products } = React.useContext(CartContext) as CartContextType;

  const formatTableHeader = () => ['Nome', 'Preço', 'Qtd.', 'Total'];

  const formatTableItems = (products: IProductCart[]) => {
    return products.map((product) => ({
      name: product.title,
      price: formatPrice(product.price),
      quantity: product.quantity,
      total: formatPrice(product.price * product.quantity),
    }));
  };

  return (
    <Container title='Mesa/Comanda 69'>
      {products.length ? (
        <S.TicketContainer>
          <Table theadData={formatTableHeader()} tbodyData={formatTableItems(products)} />
        </S.TicketContainer>
      ) : (
        <div>Nenhum item adicionado na comanda!</div>
      )}
      <div>
        Objeto: <pre>{JSON.stringify(products, null, 2)}</pre>
      </div>
    </Container>
  );
};

export default Command;
