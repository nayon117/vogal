"use client";

import { Button } from "@/components/ui/button";
import useCart from "@/lib/hooks/useCart";

import { useUser } from "@clerk/nextjs";
import { MinusCircle, PlusCircle, Trash } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Cart = () => {
  const router = useRouter();
  const { user } = useUser();
  const cart = useCart();

  const total = cart.cartItems.reduce(
    (acc, cartItem) => acc + cartItem.price * cartItem.quantity,
    0
  );
  const totalRounded = parseFloat(total.toFixed(2));

  const customer = {
    clerkId: user?.id,
    email: user?.emailAddresses[0].emailAddress,
    name: user?.fullName,
  };

  const handleCheckout = async () => {
    try {
      if (!user) {
        router.push("sign-in");
      } else {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/checkout`, {
          method: "POST",
          body: JSON.stringify({ cartItems: cart.cartItems, customer }),
        });
        const data = await res.json();
        window.location.href = data.url;
        console.log(data);
      }
    } catch (err) {
      console.log("[checkout_POST]", err);
    }
  };

  return (
    <div className="flex gap-20 px-10 py-16 max-lg:flex-col max-sm:px-3">
      <div className="w-2/3 max-lg:w-full">
        <p className="font-bold">Shopping Cart</p>
        <hr className="my-6" />

        {cart.cartItems.length === 0 ? (
          <p className="font-bold">No item in cart</p>
        ) : (
          <div>
            {cart.cartItems.map((cartItem) => (
              <div
                key={cartItem._id}
                className="flex w-full items-center justify-between px-4 py-3 hover:bg-gray-100 max-sm:flex-col max-sm:items-start max-sm:gap-3"
              >
                <div className="flex items-center">
                  <Image
                    src={cartItem.imgSrc}
                    width={100}
                    height={100}
                    className="size-32 rounded-lg object-cover"
                    alt="product"
                  />
                  <div className="ml-4 flex flex-col gap-3">
                    <p className="font-bold">{cartItem.title}</p>

                    <p className="font-medium">${cartItem.price}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <MinusCircle
                    className="cursor-pointer hover:text-red-100"
                    onClick={() => cart.decreaseQuantity(cartItem._id)}
                  />
                  <p className="font-bold">{cartItem.quantity}</p>
                  <PlusCircle
                    className="cursor-pointer hover:text-red-100"
                    onClick={() => cart.increaseQuantity(cartItem._id)}
                  />
                </div>

                <Trash
                  className="cursor-pointer hover:text-red-100"
                  onClick={() => cart.removeItem(cartItem._id)}
                />
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="flex w-1/3 flex-col gap-8 rounded-lg bg-gray-100 px-4 py-5 max-lg:w-full">
        <p className="pb-4 font-bold">
          Summary{" "}
          <span>{`(${cart.cartItems.length} ${
            cart.cartItems.length > 1 ? "items" : "item"
          })`}</span>
        </p>
        <div className="flex justify-between font-semibold">
          <span>Total Amount</span>
          <span>$ {totalRounded}</span>
        </div>
        <Button className="w-full rounded-lg border " onClick={handleCheckout}>
          Proceed to Checkout
        </Button>
      </div>
    </div>
  );
};

export default Cart;
