import axios from "axios";

export async function getUserData(id: string) {
  try {
    const data = await axios.get(`https://api.homesool.p-e.kr/user/${id}`);

    return data.data.data;
  } catch (error) {
    console.log(error);
  }
}
