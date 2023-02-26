import { ImSpoonKnife } from 'react-icons/im';
import { FaShoppingCart, FaConciergeBell } from 'react-icons/fa';
import { BiDrink } from 'react-icons/bi';

export interface MenuInterface {
  id: number;
  title: string;
  path: any;
  icon?: any;
  children?: MenuInterface[];
}

export const MockMenu: MenuInterface[] = [
  {
    id: 1,
    title: 'Menu',
    path: null,
    children: [
      {
        id: 1,
        title: 'Minha comanda',
        path: '/command',
        icon: <FaShoppingCart />,
      },
      {
        id: 2,
        title: 'Chamar garçom',
        path: '/waiter',
        icon: <FaConciergeBell />,
      },
    ],
  },
  {
    id: 2,
    title: 'Cardápio',
    path: null,
    children: [
      {
        id: 1,
        title: 'AVES',
        path: '/product/birds',
        icon: <ImSpoonKnife />,
      },
      {
        id: 2,
        title: 'Bebidas',
        path: '/product/drinks',
        icon: <BiDrink />,
      },
    ],
  },
];
