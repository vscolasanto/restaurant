export interface IProductCart {
  productId: number;
  categoryId: number;
  title: string;
  observation: string;
  imageUrl: string;
  quantity: number;
  price: number;
  total: number;
}

export type CartContextType = {
  products: IProductCart[];
  saveCart: (product: IProductCart) => void;
};
