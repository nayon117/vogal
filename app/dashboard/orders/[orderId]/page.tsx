import OrderActions from "@/components/shared/OrderActions";

const OrderDetails = async ({ params }: { params: { orderId: string } }) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/orders/${params.orderId}`
  );
  const { orderDetails, customer } = await res.json();

  return (
    <OrderActions
      orderDetails={orderDetails}
      customer={customer}
      orderId={params.orderId}
    />
  );
};

export default OrderDetails;
