import styled, { keyframes } from 'styled-components';
// como fazer para que identifique as variaveis de tema ${(props) => props.theme.colors.white}...
const fadeIn = keyframes`
  from {
    bottom: 0;
    opacity: 0;
    transform: scale(0);
  }
  to {
    bottom: 30px;
    opacity: 1;
    transform: scale(1);
  }
  `;

const fadeOut = keyframes`
  from {
    bottom: 30px;
    opacity: 1;
    transform: scale(1);
  }
  to {
    bottom: 0;
    opacity: 0;
    transform: scale(0);
  }
`;

export const SnackbarContainer = styled.div`
  align-items: center;
  background-color: #ffffff;
  border-left: 10px solid transparent;
  border-radius: 8px;
  border: 1px solid #c4c5c8;
  display: flex;
  display: flex;
  gap: 1rem;
  height: 60px;
  padding: 1rem;
  position: fixed;
  right: 1.5rem;
  text-align: center;
  top: 3rem;
  width: 300px;

  .icon {
    align-items: center;
    display: flex;
    font-size: 2.2rem;
    justify-content: center;
  }

  .message {
    flex: 1;
    font-size: 1.4rem;
    text-align: start;
  }

  &.info {
    border-left: 5px solid #1151cc;
    color: #1151cc;
  }

  &.error {
    border-left: 5px solid #ff6961;
    color: #ff6961;
  }

  &.success {
    border-left: 5px solid #03bb85;
    color: #03bb85;
  }

  &.hide {
    visibility: hidden;
  }

  &.show {
    animation: ${fadeIn} 0.5s, ${fadeOut} 0.5s 4.5s;
    visibility: visible;
  }
`;
