import axios, { AxiosResponse } from "axios";

interface PurchaseData {
  result: boolean;
}

interface PurchaseResponse {
  status: number;
}

export async function purchaseSuccess(purchase: PurchaseData): Promise<AxiosResponse<PurchaseResponse>> {
  const purchaseData = {
    result: purchase.result,
  };

  try {
    const response: AxiosResponse<PurchaseResponse> = await axios.post(
      `https://api.homesool.p-e.kr/payment?userId=1&alcoholId=1`,
      purchaseData,
    );
    return response;
  } catch (error) {
    throw error;
  }
}
