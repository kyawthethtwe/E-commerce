import { persist } from "zustand/middleware";
import { create } from "zustand";

interface UserProfile{
    id: string
    name: string
    email: string
    avatar?: string
    phone?: string
    address?: {
        street: string
        city: string
        state: string
        zipCode: string
        country: string
    }
}

interface UserStore{
    user: UserProfile | null
    setUser: (user: UserProfile | null) => void
    updateProfile: (data : Partial<UserProfile>) => void
}


export const useUserStore = create<UserStore>()(
    persist(
        (set) => ({
            user : null,
            setUser: (user) => set({user}),
            updateProfile: (data) =>
                set((state) => ({
                    user: state.user? {...state.user,  ...data} : null
                }))
        }), 
        {
            name: "user-storage",
        }
    )
)