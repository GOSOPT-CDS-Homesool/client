import OrderConfirmation from "../@components/orderPaymentPage/orderConfirmation";
import SuccessModal from "../@components/orderPaymentPage/successModal";

export default function OrderPayment() {
  return (
    <div>
      <SuccessModal />
      <OrderConfirmation />
    </div>
  );
}
