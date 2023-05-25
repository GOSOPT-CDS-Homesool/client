import axios from "axios";
import { OrderOptionProps } from "../type/OrderOptionType";

export async function getAlcoholData(id: number): Promise<OrderOptionProps> {
  try {
    const response = await axios.get(`https://api.homesool.p-e.kr/alcohol`);
    const data = response.data.data;
    console.log(data);
    return data as OrderOptionProps;
  } catch (error) {
    console.error("알콜 데이터 패치 중 오류 발생:", error);
    throw error;
  }
}
