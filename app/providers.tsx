"use client"

import { ReactNode, useEffect, useState } from "react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { useUserStore } from "@/hooks/useUserStore"

export default function Providers({ children }: { children: ReactNode }) {
  const [queryClient] = useState(() => new QueryClient())
  const setUser = useUserStore((state) => state.setUser)
  const supabase = createClientComponentClient()

  useEffect(() => {
    const fetchUser = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) return

      const { data: userInfo } = await supabase
        .from("users")
        .select("*")
        .eq("id", user.id)
        .single()

      if (userInfo) {
        setUser({
          id: user.id,
          email: user.email!,
          nickname: userInfo.nickname,
          position: userInfo.position,
          career: userInfo.career,
          avatarUrl: userInfo.avatarUrl,
        })
      }
    }

    fetchUser()
  }, [setUser])

  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}
