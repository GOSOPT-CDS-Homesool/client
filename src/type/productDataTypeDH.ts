import { TagsDataType } from "./tagsDataType";

export interface ProductDataType {
  id: number;
  name: string;
  tags: TagsDataType;
  soldOut: boolean;
  like: boolean;
  sale: number;
  price: string;
  salePrice: string;
  image: string;
  detailImage: string;
  imageInfoImage: string;
  stock: number;
  subscribe: boolean;
  twinkle: boolean;
}
