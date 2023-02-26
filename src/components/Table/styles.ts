import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
  border-spacing: 0.1rem;

  thead {
    border-collapse: collapse;
  }

  td {
    padding: 0.5rem;
  }

  th:last-child,
  td:last-child {
    text-align: right;
  }
`;

export const TableTotals = styled.tr`
  font-weight: 600;
  text-align: right;
`;
