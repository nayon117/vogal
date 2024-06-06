import { columns } from "@/components/shared/CustomerColumn";
import { DataTable } from "@/components/shared/DataTable";
import { Separator } from "@/components/ui/separator";
import Customer from "@/database/models/customer.model";
import { connectToDatabase } from "@/lib/mongoose";

const Customers = async () => {
  await connectToDatabase();

  const customers = await Customer.find().sort({ createdAt: "desc" });

  return (
    <div className="px-10 py-5">
      <p className="font-bold text-black">Customers</p>
      <Separator className="my-5 bg-gray-200" />
      <DataTable columns={columns} data={customers} searchKey="name" />
    </div>
  );
};

export const dynamic = "force-dynamic";

export default Customers;
