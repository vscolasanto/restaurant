import styled from 'styled-components';

export const Container = styled.div`
  max-width: 900px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 3rem auto;

  @media screen and (max-width: 1179.98px) {
    padding: 0 1rem;
  }
`;

export const Title = styled.h2`
  line-height: 3rem;
  margin-bottom: 1rem;
`;

export const Subtitle = styled.h5`
  line-height: 2.2rem;
  margin-bottom: 1rem;
  font-weight: lighter;
`;

export const Hr = styled.hr`
  width: 100%;
  border: 1px solid ${(props) => props.theme.colors.secondary}80;
  margin-bottom: 2rem;
`;
