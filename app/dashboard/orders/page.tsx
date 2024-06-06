"use client";

import { DataTable } from "@/components/shared/DataTable";
import Loader from "@/components/shared/Loader";
import { columns } from "@/components/shared/OrderColumns";
import { Separator } from "@/components/ui/separator";

import { useEffect, useState } from "react";

const Orders = () => {
  const [loading, setLoading] = useState(true);
  const [orders, setOrders] = useState([]);

  const getOrders = async () => {
    try {
      const res = await fetch(`/api/orders`);
      const data = await res.json();
      setOrders(data);
      setLoading(false);
    } catch (err) {
      console.log("[orders_GET", err);
    }
  };

  useEffect(() => {
    getOrders();
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <div className="px-10 py-5">
      <p className="font-bold text-gray-700">Orders</p>
      <Separator className="my-5 bg-gray-400" />
      <DataTable columns={columns} data={orders} searchKey="_id" />
    </div>
  );
};

export const dynamic = "force-dynamic";

export default Orders;
