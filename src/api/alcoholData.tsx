import axios from "axios";
import { ProductDataType } from "../type/productDataType";

export async function getAlcoholData(id: number): Promise<ProductDataType> {
  try {
    const response = await axios.get(`https://api.homesool.p-e.kr/alcohol/${id}`);
    const data = response.data.data;
    return data as ProductDataType;
  } catch (error) {
    console.error("알콜 데이터 패치 중 오류 발생:", error);
    throw error;
  }
}
