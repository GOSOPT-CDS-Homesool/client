export interface ProductDataType {
  id: number;
  name: string;
  tags: Array<string>;
  soldOut: boolean;
  like: boolean;
  sale: number;
  price: number;
  image: string;
  stock: number;
  detailImage: string;
  subscribe?: boolean;
  twinkle?: boolean;
}
