import styled from 'styled-components';

export const TableHeadItem = styled.td`
  background-color: ${(props) => props.theme.colors.light};
  padding: 0.5rem;
  color: ${(props) => props.theme.colors.text};
  font-weight: 600;
`;
