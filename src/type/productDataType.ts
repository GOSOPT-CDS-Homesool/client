export interface ProductDataType {
  id: number;
  name: string;
  tags?: [];
  soldOut?: boolean;
  like: boolean;
  sale: number;
  price: number;
  image?: string;
  detailImage?: string;
  stock?: number;
  subscribe: boolean;
  twinkle: boolean;
}
