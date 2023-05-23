export default function CalculateDiscount(price: number, sale: number) {
  const discountedPrice = price - (price * sale) / 100;
  return discountedPrice;
}
