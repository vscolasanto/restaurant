import styled from 'styled-components';

export const Container = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  padding: 1rem;
  border: 1px solid ${(props) => props.theme.colors.light};
  text-transform: uppercase;
  text-align: center;
`;
