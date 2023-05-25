import axios from "axios";

export async function getAllReview() {
  try {
    const data = await axios.get(`https://api.homesool.p-e.kr/alcohol/review`);
    console.log(data);
    console.log(data.data);
    console.log(data.data.data);
    return data.data.data;
  } catch (error) {
    console.log(error);
  }
}
