import styled from 'styled-components';

export const TextareaContainer = styled.div`
  position: relative;
`;

export const Textarea = styled.textarea`
  border-radius: 0.5rem;
  border: 1px solid ${(props) => props.theme.colors.light};
  width: 100%;
  color: ${(props) => props.theme.colors.black};
  transition: 200ms ease-in-out;
  resize: none;
  padding: 0.5rem 1rem;
  font-size: 1.4rem;
`;

export const TextareaLimit = styled.small`
  font-size: 0.8rem;
  position: absolute;
  bottom: -1.2rem;
  right: 0;

  &.max {
    color: ${(props) => props.theme.colors.danger};
  }
`;
