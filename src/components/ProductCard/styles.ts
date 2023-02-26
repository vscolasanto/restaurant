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

export const CardImage = styled.div`
  width: 100%;
  overflow: hidden;
  max-height: 150px;
  border-bottom: 1px solid ${(props) => props.theme.colors.light};
  flex: 1;

  img {
    object-fit: cover;
    width: 100%;
    border-radius: 0.5rem;
  }
`;

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1rem;
`;

export const CardPrimaryInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CardTitle = styled.div`
  font-weight: 600;
  margin-bottom: 1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 150px;
`;

export const CardPrice = styled.div`
  color: ${(props) => props.theme.colors.success};
`;

export const CardSubtitle = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 240px;
`;
