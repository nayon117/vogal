import mongoose, { Schema, Document, model } from 'mongoose';

interface IOrderItem {
  productId: mongoose.Types.ObjectId;
  productName: string;
  quantity: number;
  price: number;
}

interface IOrder extends Document {
  userName: string;
  userEmail: string;
  items: IOrderItem[];
  sessionId: string;
}

const orderSchema: Schema = new Schema({
  userName: { type: String, required: true },
  userEmail: { type: String, required: true },
  items: [
    {
      productId: { type: mongoose.Types.ObjectId, ref: 'Product', required: true },
      productName: { type: String, required: true },
      quantity: { type: Number, required: true },
      price: { type: Number, required: true },
    },
  ],
  sessionId: { type: String, required: true },
});

const Order = mongoose.models.Order || model<IOrder>('Order', orderSchema);

export default Order;
