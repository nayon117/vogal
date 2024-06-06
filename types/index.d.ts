export interface NavbarLink {
  route: string;
  label: string;
}

export interface OrderColumnType {
  _id: string;
  customer: string;
  products: number;
  totalAmount: number;
  createdAt: string;
}

export interface CustomerType {
  clerkId: string;
  name: string;
  email: string;
}
