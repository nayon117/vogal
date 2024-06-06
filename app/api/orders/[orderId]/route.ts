import Customer from "@/database/models/customer.model";
import Order from "@/database/models/order.model";
import { connectToDatabase } from "@/lib/mongoose";
import { NextRequest, NextResponse } from "next/server";

// get order details
export const GET = async (
  req: NextRequest,
  { params }: { params: { orderId: String } }
) => {
  try {
    await connectToDatabase();

    const orderDetails = await Order.findById(params.orderId);

    if (!orderDetails) {
      return new NextResponse(JSON.stringify({ message: "Order Not Found" }), {
        status: 404,
      });
    }

    const customer = await Customer.findOne({
      clerkId: orderDetails.customerClerkId,
    });

    return NextResponse.json({ orderDetails, customer }, { status: 200 });
  } catch (err) {
    console.log("[orderId_GET]", err);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
};

// delete order
export const DELETE = async (
  req: NextRequest,
  { params }: { params: { orderId: string } }
) => {
  try {
    await connectToDatabase();
    const deletedOrder = await Order.findByIdAndDelete(params.orderId);

    if (!deletedOrder) {
      return new NextResponse(JSON.stringify({ message: "Order Not Found" }), {
        status: 404,
      });
    }

    return new NextResponse(
      JSON.stringify({ message: "Order Deleted Successfully" }),
      { status: 200 }
    );
  } catch (err) {
    console.log("[orderId_DELETE]", err);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
};

export const dynamic = "force-dynamic";
