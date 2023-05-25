import axios from "axios";

export async function getDetailReview(id: number) {
  try {
    const data = await axios.get(`https://api.homesool.p-e.kr/alcohol/review/${id}`);

    return data.data.data;
  } catch (error) {
    console.log(error);
  }
}