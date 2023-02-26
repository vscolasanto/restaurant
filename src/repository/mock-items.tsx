export interface ProductInterface {
  id: number;
  categoryId: number;
  title: string;
  subtitle: string;
  price: number;
  imageUrl: string;
  url: string;
  quantity: number;
  observation?: string;
}

export const MockItems: ProductInterface[] = [
  {
    id: 1,
    categoryId: 1,
    title: 'Filé de frango a parmegiana',
    subtitle: 'Acompanha arroz, feijão e farofa',
    price: 40.2,
    imageUrl: 'https://www.comidaereceitas.com.br/wp-content/uploads/2007/09/Frango_parmegi.jpg',
    url: '',
    quantity: 0,
  },
  {
    id: 2,
    categoryId: 1,
    title: 'Frango a passarinho',
    subtitle: 'Porção de 400gr',
    price: 49.9,
    imageUrl:
      'https://t1.rg.ltmcdn.com/pt/posts/5/3/2/frango_a_passarinho_na_airfryer_9235_600.jpg',
    url: '',
    quantity: 0,
  },
  {
    id: 3,
    categoryId: 1,
    title: 'Carne de pato',
    subtitle: 'Carne de quack quack',
    price: 75.9,
    imageUrl: 'https://i1.wp.com/files.agro20.com.br/uploads/2020/01/carne-de-pato-02.jpg',
    url: '',
    quantity: 0,
  },
  {
    id: 4,
    categoryId: 2,
    title: 'Coca cola',
    subtitle: 'Coca cola 2lts',
    price: 15.0,
    imageUrl: 'https://araujo.vteximg.com.br/arquivos/ids/4061371-1000-1000/07894900027020.jpg',
    url: '',
    quantity: 0,
  },
  {
    id: 5,
    categoryId: 2,
    title: 'Cacildis',
    subtitle: 'Fardo com 12 latas',
    price: 31.8,
    imageUrl:
      'https://bomdebeer.vteximg.com.br/arquivos/ids/156081-1000-1000/Cerveja-Cacildis-350ml-Pack-12-unds-7897395007256_1.jpg?v=637243008622130000',
    url: '',
    quantity: 0,
  },
  {
    id: 6,
    categoryId: 2,
    title: 'Jack Daniels',
    subtitle: 'Verde, vermelho ou preto',
    price: 119.9,
    imageUrl:
      'https://static.turbosquid.com/Preview/001228/805/Q5/3D-jack-daniels-bottles-model_DHQ.jpg',
    url: '',
    quantity: 0,
  },
];

// se for usar slug ao invés de ids no produto
const urlFormatted = (str: string) => {
  return str
    .normalize('NFKD')
    .replace(/\p{Diacritic}/gu, '')
    .toLowerCase()
    .split(' ')
    .join('-');
};

export const FormattedItems = MockItems.map((item) => ({
  ...item,
  url: urlFormatted(item.title),
}));
