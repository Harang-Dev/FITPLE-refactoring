"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"

export default function LoginCallbackPage() {
  const router = useRouter()
  const supabase = createClientComponentClient()

  useEffect(() => {
    const handleRedirect = async () => {
      const { data: { user } } = await supabase.auth.getUser()

      if (!user) {
        return router.push("/login")
      }

      const { data, error } = await supabase
        .from("users")
        .select("id")
        .eq("id", user.id)
        .single()

      if (data) {
        router.push("/")
      } else {
        router.push("/login/onboard")
      }
    }

    handleRedirect()
  }, [router, supabase])

  return <p className="text-center py-12">로그인 중입니다...</p>
}
