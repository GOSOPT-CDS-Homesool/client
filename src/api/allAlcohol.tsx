import axios from "axios";

export async function getAllAlcohol() {
  try {
    const data = await axios.get(`https://api.homesool.p-e.kr/alcohol`);

    console.log(data);
    console.log(data.data);
    console.log(data.data.data);
    return data.data.data;
  } catch (error) {
    console.log(error);
  }
}
