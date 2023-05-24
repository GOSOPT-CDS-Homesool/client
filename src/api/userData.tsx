import axios from "axios";

export async function getUserData() {
  try {
    const data = await axios.get(`http://3.35.9.115:8080/user/1`);

    return data.data.data;
  } catch (error) {
    console.log(error);
  }
}
