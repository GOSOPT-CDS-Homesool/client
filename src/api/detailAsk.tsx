import axios from "axios";

export async function getDetailAsk(id: number) {
  try {
    const data = await axios.get(`http://3.35.9.115:8080/alcohol/inquiry/${id}`);

    return data.data.data;
  } catch (error) {
    console.log(error);
  }
}
