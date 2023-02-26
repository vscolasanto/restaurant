import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { RiShoppingCartLine, RiShoppingCartFill } from 'react-icons/ri';

import * as S from './styles';
import { MockMenu } from '../../repository/mock-menu';

import { CartContext } from '~/contexts/cart.context';
import { CartContextType } from '~/@types/cart';

const Navbar: React.FC = () => {
  const { products } = React.useContext(CartContext) as CartContextType;
  const [sidebarOpened, setSidebarOpened] = useState(false);

  const showSidebar = () => setSidebarOpened(!sidebarOpened);

  return (
    <>
      <S.Navbar>
        <S.ToggleLink to='#' onClick={showSidebar}>
          {sidebarOpened ? <AiOutlineClose /> : <FaBars />}
          Menu
        </S.ToggleLink>
        <S.Cart to='/command'>
          {products.length ? <RiShoppingCartFill /> : <RiShoppingCartLine />}
          {!!products.length && <S.CartQuantity>{products.length}</S.CartQuantity>}
        </S.Cart>
      </S.Navbar>
      <S.Sidebar className={sidebarOpened ? 'active' : ''}>
        <S.CustomerData>
          <div>Olá, cliente!</div>
          <div className='command-table'>
            Mesa/Comanda 69 (<S.ExitLink to='#'>Sair</S.ExitLink>)
          </div>
        </S.CustomerData>
        {MockMenu.map((parent, parentIndex) => (
          <S.SidebarContainer key={parentIndex}>
            <S.SidebarCategory>{parent.title}</S.SidebarCategory>
            {parent.children?.map((child, childIndex) => (
              <S.SidebarLink key={childIndex} to={child.path} onClick={showSidebar}>
                {child.icon} {child.title}
              </S.SidebarLink>
            ))}
          </S.SidebarContainer>
        ))}
      </S.Sidebar>
    </>
  );
};

export default Navbar;
