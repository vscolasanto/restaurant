export const formatPrice = (price: number) => {
  const formattedPrice = price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
  return formattedPrice.replace(String.fromCharCode(160), ' ');
};

export const formatToNumber = (price: string) => {
  console.log('price', price);
  return Number(price.replace('R$ ', '').replace(',', '.'));
};
