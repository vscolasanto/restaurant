import React from 'react';

import { MockMenu } from '~/repository/mock-menu';

import Container from '../../components/Container';
import CategoryCard from '../../components/CategoryCard';
import ContainerCard from '../../components/ContainerCard';

const Home: React.FC = () => {
  return (
    <Container title='Cardápio'>
      {MockMenu.filter((m) => m.title === 'Cardápio').map((menu, menuIndex) => (
        <ContainerCard key={menuIndex}>
          {menu.children?.map((child, childIndex) => (
            <CategoryCard
              key={childIndex}
              title={child.title}
              url={child.path}
              icon={child.icon}
            ></CategoryCard>
          ))}
        </ContainerCard>
      ))}
    </Container>
  );
};

export default Home;
