import { create } from "zustand";
import { toast } from "react-hot-toast";
import { persist, createJSONStorage } from "zustand/middleware";

interface CartItem {
  _id: string;
  title: string;
  price: number;
  quantity: number;
  imgSrc: string;
}

interface CartStore {
  cartItems: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (idToRemove: string) => void;
  increaseQuantity: (idToIncrease: string) => void;
  decreaseQuantity: (idToDecrease: string) => void;
  clearCart: () => void;
}

const useCart = create<CartStore>()(
  persist(
    (set, get) => ({
      cartItems: [],
      addItem: (data: CartItem) => {
        const { _id, title, imgSrc, price } = data;
        const currentItems = get().cartItems;
        const isExisting = currentItems.find(
          (cartItem) => cartItem._id === _id
        );

        if (isExisting) {
          return toast("Item already in cart");
        }

        set((state) => ({
          cartItems: [...state.cartItems, { _id, title, price, imgSrc, quantity: 1 }],
        }));
        toast.success("Item added to cart", { icon: "🛒" });
      },
      removeItem: (idToRemove: string) => {
        set((state) => {
          const newCartItems = state.cartItems.filter(
            (cartItem) => cartItem._id !== idToRemove
          );
          return { cartItems: newCartItems };
        });
        toast.success("Item removed from cart");
      },
      increaseQuantity: (idToIncrease: string) => {
        set((state) => {
          const newCartItems = state.cartItems.map((cartItem) =>
            cartItem._id === idToIncrease
              ? { ...cartItem, quantity: cartItem.quantity + 1 }
              : cartItem
          );
          return { cartItems: newCartItems };
        });
        toast.success("Item quantity increased");
      },
      decreaseQuantity: (idToDecrease: string) => {
        set((state) => {
          const newCartItems = state.cartItems.map((cartItem) =>
            cartItem._id === idToDecrease
              ? { ...cartItem, quantity: Math.max(cartItem.quantity - 1, 0) }
              : cartItem
          );
          return { cartItems: newCartItems };
        });
        toast.success("Item quantity decreased");
      },
      clearCart: () => {
        set((state) => {
          if (state.cartItems.length === 0) return state;
          return { cartItems: [] };
        });
        toast.success("Cart cleared");
      },
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useCart;
