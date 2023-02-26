import styled from 'styled-components';

export const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  padding: 1rem;
  border-radius: 0.5rem;
  border: 1px solid ${(props) => props.theme.colors.light};
  transition: 200ms ease-in-out;
  text-transform: uppercase;

  &.primary {
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.white};
  }

  &.secondary {
    background-color: ${(props) => props.theme.colors.secondary};
    color: ${(props) => props.theme.colors.white};
  }

  &:hover {
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
    filter: brightness(1.15);
  }
`;
