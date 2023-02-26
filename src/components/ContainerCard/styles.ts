import styled from 'styled-components';

export const ContainerCard = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.6rem;

  @media screen and (max-width: 767.98px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
