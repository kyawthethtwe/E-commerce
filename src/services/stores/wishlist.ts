import { create } from "zustand";
import { persist } from "zustand/middleware";


interface WishlistItem {
  id: string;
  name: string;
  price: number;
  image: string;
}

interface WishlistStore {
    wishlist: WishlistItem[];
    isWishlisted: (id: string) => boolean;
    addWishlist: (item: WishlistItem) => void;
    removeWishlist: (id: string) => void;
    clearWishlist: () => void;
}
// Create a store named useWishlistStore and will modify with the api when api is ready
export const useWishlistStore = create<WishlistStore>()(
    persist(
        (set, get) => ({
            wishlist: [],
            isWishlisted: (id) => {
                return Boolean(get().wishlist.find((item) => item.id === id));    
            },
            addWishlist: (item) =>
                set((state) => {
                    const existingItem = state.wishlist.find((i) => i.id === item.id);
                    if (existingItem) {
                        return {
                            wishlist: state.wishlist.filter((i) => i.id !== item.id),
                        };
                    }
                    return { wishlist: [...state.wishlist, item] };
                }),
            removeWishlist: (id) => 
                set((state) => ({
                    wishlist: state.wishlist.filter((item) => item.id !== id),
                }),
            ),
            clearWishlist: () => 
                set({ wishlist: [] }),
        }) ,
        {
            name: "wishlist-storage",
        },
    )
)
