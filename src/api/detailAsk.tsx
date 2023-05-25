import axios from "axios";

export async function getDetailAsk(id: number) {
  try {
    const data = await axios.get(`https://api.homesool.p-e.kr/alcohol/inquiry/${id}`);

    return data.data.data;
  } catch (error) {
    console.log(error);
  }
}
