import { create } from "zustand";
import { persist } from "zustand/middleware";

interface CartItem {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartStore {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
  getTotal: () => number;
}

// Create a store named useCartStore
export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [], // initialize the cart with an empty array
      addItem: (
        item // add item to cart
      ) =>
        set((state) => {
          const existingItem = state.items.find((i) => i.id === item.id); // Check if item already exists
          if (existingItem) {
            // If item exists, add the new quantity to existing quantity
            // Use item.quantity if provided, otherwise default to 1
            const quantityToAdd = item.quantity || 1;
            return {
              items: state.items.map((i) =>
                i.id === item.id
                  ? { ...i, quantity: i.quantity + quantityToAdd }
                  : i
              ),
            };
          }
          // If item doesn't exist, add it with the provided quantity or default to 1
          return {
            items: [...state.items, { ...item, quantity: item.quantity || 1 }],
          };
        }),
      removeItem: (
        id // remove item from cart
      ) =>
        set((state) => ({
          items: state.items.filter((item) => item.id !== id),
        })),
      updateQuantity: (
        id,
        quantity // update quantity of item in cart
      ) =>
        set((state) => ({
          items: state.items.map((item) =>
            item.id === id ? { ...item, quantity } : item
          ), // find the item and update the quantity
        })),
      clearCart: () => set({ items: [] }), // clear the cart
      getTotal: () => {
        // get the total price of all items in the cart
        const items = get().items;
        return items.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        );
      },
    }),
    {
      name: "cart-storage", // name of the storage
    }
  )
);
