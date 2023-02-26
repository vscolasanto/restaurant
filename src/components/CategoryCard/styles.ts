import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled(Link)`
  align-items: center;
  border-radius: 0.5rem;
  border: 1px solid ${(props) => props.theme.colors.light};
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  min-height: 100px;
  width: 100%;
  color: ${(props) => props.theme.colors.black};
  transition: 200ms ease-in-out;

  svg {
    transition: 200ms ease-in-out;
  }

  &:hover {
    box-shadow: 2px 4px 7px 6px rgba(0, 0, 0, 0.03);

    svg {
      font-size: 2rem;
    }
  }
`;
