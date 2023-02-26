import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Navbar = styled.div`
  display: flex;
  width: 100%;
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(231, 107, 9, 1) 0%,
    rgba(231, 146, 9, 1) 100%
  );
  height: 60px;
  align-items: center;
  padding: 1.6rem;
  justify-content: space-between;
`;

export const Cart = styled(Link)`
  color: ${(props) => props.theme.colors.white};
  font-size: 2rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CartQuantity = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 13px;
  left: 13px;
  font-size: 1rem;
`;

export const ExitLink = styled(Link)`
  font-size: 1rem;
  color: ${(props) => props.theme.colors.primary};
`;

export const ToggleLink = styled(Link)`
  display: flex;
  gap: 1rem;
  font-size: 2rem;
  color: ${(props) => props.theme.colors.white};
`;

export const Sidebar = styled.nav`
  height: calc(100vh - 60px);
  background-color: ${(props) => props.theme.colors.white};
  border-right: 1px solid ${(props) => props.theme.colors.gray};
  width: 250px;
  left: -250px;
  position: fixed;
  top: 60px;
  transition: 350ms ease-in-out;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 2rem 0;
  z-index: 10;

  &.active {
    left: 0;
  }
`;

export const CustomerData = styled.div`
  text-align: center;
  color: ${(props) => props.theme.colors.black};
  margin-bottom: 2rem;

  .command-table {
    font-size: 1.2rem;
  }
`;

export const SidebarContainer = styled.ul`
  list-style: none;
`;

export const SidebarCategory = styled.li`
  color: ${(props) => props.theme.colors.light};
  font-size: 1.4rem;
  padding: 1rem;
`;

export const SidebarLink = styled(Link)`
  display: flex;
  align-items: center;
  border-left: 4px solid transparent;
  padding: 1rem 1.2rem;
  gap: 1rem;
  color: ${(props) => props.theme.colors.text};
  font-size: 1.4rem;
  transition: 400ms ease-in;

  &:hover {
    border-left-color: ${(props) => props.theme.colors.secondary}80;
    background-color: ${(props) => props.theme.colors.background}80;
  }

  &.active {
    border-left-color: ${(props) => props.theme.colors.secondary};
    background-color: ${(props) => props.theme.colors.background};
  }
`;
