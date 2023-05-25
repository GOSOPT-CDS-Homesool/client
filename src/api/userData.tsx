import axios from "axios";

export async function getUserData() {
  try {
    const data = await axios.get(`https://api.homesool.p-e.kr/user/1`);

    return data.data.data;
  } catch (error) {
    console.log(error);
  }
}
