import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Container from '../../components/Container';
import ContainerCard from '../../components/ContainerCard';
import ProductCard from '~/components/ProductCard';
import { FormattedItems } from '~/repository/mock-items';
import { MockMenu } from '~/repository/mock-menu';

const Product: React.FC = () => {
  const { key } = useParams();
  const [productType, setProductType] = useState<string>('');
  const [categoryId, setCategoryId] = useState<number | undefined>(undefined);
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    console.log(FormattedItems);
    const catId = MockMenu.find((item) => item.title === 'Cardápio')?.children?.find((item) =>
      item.path.includes(key),
    )?.id;
    const prodArr = FormattedItems.filter((item) => item.categoryId === categoryId);
    setProductType(key === 'birds' ? 'Aves' : 'Bebidas');
    setCategoryId(catId);
    setProducts(prodArr);
  }, [key, categoryId]);

  return (
    <Container title={'Produto: ' + productType}>
      <ContainerCard>
        {products.map((item) => (
          <ProductCard key={item.id} product={item}></ProductCard>
        ))}
      </ContainerCard>
    </Container>
  );
};

export default Product;
