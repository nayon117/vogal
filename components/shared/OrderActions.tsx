"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-hot-toast";

// Confirmation Modal Component
const ConfirmationModal = ({ isOpen, onClose, onConfirm }: any) => {
  return (
    isOpen && (
      <div className="fixed inset-0 flex items-center justify-center  ">
        <div className="rounded-lg bg-white p-5">
          <p className="mb-3">Are you sure you want to delete this order?</p>
          <div className="flex justify-end">
            <button
              className="mr-3 rounded bg-red-500 px-4 py-2 text-white"
              onClick={onConfirm}
            >
              Yes
            </button>
            <button className="rounded bg-gray-300 px-4 py-2" onClick={onClose}>
              No
            </button>
          </div>
        </div>
      </div>
    )
  );
};

const OrderActions = ({ orderDetails, customer, orderId }: any) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  const handleDelete = async () => {
    try {
      const res = await fetch(`/api/orders/${orderId}`, {
        method: "DELETE",
      });

      if (res.ok) {
        toast.success("Order deleted successfully.");
        router.push("/dashboard/orders");
      } else {
        toast.error("Failed to delete the order.");
      }
    } catch (error) {
      console.error("Error deleting order:", error);
      toast.error("Failed to delete the order.");
    } finally {
      setIsModalOpen(false); 
    }
  };

  const { street, city, state, postalCode, country } =
    orderDetails.shippingAddress;

  return (
    <div className="flex flex-col gap-5 p-10 text-black">
      <p className="font-bold">
        Order ID: <span className="font-medium">{orderDetails._id}</span>
      </p>
      <p className="font-bold">
        Customer name: <span className="font-medium">{customer.name}</span>
      </p>
      <p className="font-bold">
        Shipping address:{" "}
        <span className="font-medium">
          {street}, {city}, {state}, {postalCode}, {country}
        </span>
      </p>
      <div className="font-bold">
        Product Name & Quantity:
        <span className="font-medium">
          {orderDetails.products.map((item: any) => (
            <div key={item.name}>
              <p>
                {item?.name}, quantity: {item.quantity}
              </p>
            </div>
          ))}
        </span>
      </div>
      <p className="font-bold">
        Total Paid:{" "}
        <span className="font-medium">${orderDetails.totalAmount}</span>
      </p>
      <p className="font-bold">
        Shipping rate ID:{" "}
        <span className="font-medium">{orderDetails.shippingRate}</span>
      </p>

      <div className="mt-5 gap-3">
        <button
          onClick={() => setIsModalOpen(true)}
          className="rounded bg-red-500 px-4 py-2 text-white hover:bg-red-700"
        >
          Delete
        </button>
      </div>

      {/* Confirmation Modal */}
      <ConfirmationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleDelete}
      />
    </div>
  );
};

export default OrderActions;
