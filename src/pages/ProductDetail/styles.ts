import styled from 'styled-components';

export const Container = styled.div``;

export const ProductImage = styled.div`
  max-width: 450px;
  width: 100%;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;

  img {
    width: 100%;
    border-radius: 0.5rem;
    border: 1px solid ${(props) => props.theme.colors.light};
  }

  @media screen and (max-width: 767.98px) {
    img {
      object-fit: contain;
      width: 100%;
    }
  }
`;

export const ProductBlock = styled.div`
  width: 100%;
  margin-bottom: 1.4rem;

  .description {
    font-weight: 600;
    font-size: 1.6rem;
  }

  .content {
    display: flex;
    font-size: 1.4rem;
    font-weight: 100;
    line-height: 2.2rem;
    position: relative;

    .quantity-input {
      border-left: none;
      border-right: none;
    }

    .minus-button {
      border-top-right-radius: 0px;
      border-bottom-right-radius: 0px;
    }

    .plus-button {
      border-top-left-radius: 0px;
      border-bottom-left-radius: 0px;
    }
  }
`;

export const ProductInlineBlock = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 499.98px) {
    flex-direction: column;
  }
`;

export const ProductActionButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;

  @media screen and (max-width: 499.98px) {
    button {
      width: 100% !important;
    }
  }
`;
