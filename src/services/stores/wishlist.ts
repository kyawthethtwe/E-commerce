import { create } from "zustand";
import { persist } from "zustand/middleware";

interface WishlistItem {
  id: number;
  title: string;
  price: number;
  image: string;
}
interface WishlistStore {
  wishlist: WishlistItem[];
  addWishlist: (item: WishlistItem) => void;
  removeWishlist: (id: number) => void;
  clearWishlist: () => void;
}

export const useWishlistStore = create<WishlistStore>()(
  persist(
    (set) => ({
      wishlist: [],
      // add item to wishlist
      addWishlist: (item) =>
        set((state) => {
          const existingItem = state.wishlist.find((i) => i.id === item.id);
          if (existingItem) {
            return state; // if the item already exists, return the current state
          }
          return { wishlist: [...state.wishlist, item] }; // if it doesn't, add it to the wishlist
        }),
      // remove item from wishlist
      removeWishlist: (id) =>
        set((state) => ({
          wishlist: state.wishlist.filter((item) => item.id !== id),
        })),
      // clear the wishlist
      clearWishlist: () => set({ wishlist: [] }),
    }),
    {
      name: "wishlist-storage",
    }
  )
);
