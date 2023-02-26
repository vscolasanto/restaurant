import styled from 'styled-components';

export const TicketContainer = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  background-image: radial-gradient(
    circle at center,
    ${(props) => props.theme.colors.background} 3px,
    white 4px
  );
  background-size: 12px 13px;
  background-position: center calc(100% + 6px);
  background-repeat: repeat-x;
  width: 100%;
  padding: 1rem;
`;
