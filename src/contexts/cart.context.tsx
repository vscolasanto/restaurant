import * as React from 'react';
import { CartContextType, IProductCart } from '../@types/cart';

export const CartContext = React.createContext<CartContextType | null>(null);

interface CartContextProps {
  children?: React.ReactNode;
}

const CartContextProvider: React.FC<CartContextProps> = ({ children }) => {
  const [products, setProducts] = React.useState<IProductCart[]>([]);

  const createProduct = (product: IProductCart) => ({
    productId: product.productId,
    categoryId: product.categoryId,
    title: product.title,
    observation: product.observation,
    imageUrl: product.imageUrl,
    quantity: product.quantity,
    price: product.price,
    total: product.quantity * product.price,
  });

  const saveCart = (product: IProductCart) => {
    const productAlreadyAdded = products.find(
      (prod) => prod.categoryId === product.categoryId && prod.productId === product.productId,
    );

    if (!productAlreadyAdded) {
      const newProduct: IProductCart = createProduct(product);
      setProducts([...products, newProduct]);
    } else {
      const updatedProducts = products.filter((p) => p !== productAlreadyAdded);
      product.quantity += productAlreadyAdded.quantity;
      product.observation = product.observation.concat(' | ', productAlreadyAdded.observation);
      product.total = product.quantity * product.price;
      setProducts([...updatedProducts, product]);
    }
  };

  return <CartContext.Provider value={{ products, saveCart }}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
