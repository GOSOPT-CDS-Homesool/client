import { useEffect, useState } from "react";
import { getDetailAsk } from "../../api/detailAsk";
import { DetailAskType } from "../../type/detailAsk";

export default function DetailAsk() {
  const [detailAsks, setDetailAsks] = useState<DetailAskType>();

  async function fetchDetailAsk() {
    const response = await getDetailAsk(1);
    setDetailAsks(response);
  }

  useEffect(() => {
    fetchDetailAsk();
  }, []);

  console.log(detailAsks);

  return <></>;
}
