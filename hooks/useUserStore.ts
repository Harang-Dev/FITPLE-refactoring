import { create } from "zustand"

type UserData = {
  id: string
  nickname: string
  position: string
  career: string
  avatarUrl: string
  email: string
  skills: string[]
}

interface UserStore {
  user: UserData | null
  setUser: (user: UserData) => void
  clearUser: () => void
}

export const useUserStore = create<UserStore>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  clearUser: () => set({ user: null }),
}))
