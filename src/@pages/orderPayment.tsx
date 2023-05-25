import { useLocation } from "react-router-dom";
import OrderConfirmation from "../@components/orderPaymentPage/orderConfirmation";

export default function OrderPayment() {
  const { state } = useLocation();

  return (
    <div>
      <OrderConfirmation id={state} />
    </div>
  );
}
