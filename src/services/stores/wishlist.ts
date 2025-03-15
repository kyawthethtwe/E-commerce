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
    // isWishlisted: (id: number) => boolean;
    addWishlist: (item: WishlistItem) => void;
    removeWishlist: (id: number) => void;
    clearWishlist: () => void;
}
// Create a store named useWishlistStore and will modify with the api when api is ready
export const useWishlistStore = create<WishlistStore>()(
    persist(
        (set) => ({
            wishlist: [], // initialize the wishlist with an empty array
            // isWishlisted: (id) => { // check if item is wishlisted
            //     return Boolean(get().wishlist.find((item) => item.id === id));    
            // },
            addWishlist: (item) => // add item to wishlist
                set((state) => {
                    const existingItem = state.wishlist.find((i) => i.id === item.id);
                    if (existingItem) {
                        return state;   // if the item already exists, return the current state
                    }
                    return { wishlist: [...state.wishlist, item] };  // if it doesn't, add it to the wishlist
                }),
            removeWishlist: (id) =>  // remove item from wishlist
                set((state) => ({
                    wishlist: state.wishlist.filter((item) => item.id !== id),
                }),
            ),
            clearWishlist: () =>  // clear the wishlist
                set({ wishlist: [] }),
        }) ,
        {
            name: "wishlist-storage",
        },
    )
)
