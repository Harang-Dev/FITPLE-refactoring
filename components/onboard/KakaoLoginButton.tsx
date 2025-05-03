"use client"

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function KakaoLoginButton() {
  const supabase = createClientComponentClient()

  const handleLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "kakao",
    })
  }

  return (
    <Button
      onClick={handleLogin}
      className="bg-[#FEE500] text-black hover:bg-[#fada00] w-full py-6 text-lg font-bold rounded-lg flex items-center justify-center gap-2"
    >
      <Image src="/kakao.svg" alt="Kakao" width={24} height={24} />
      카카오로 로그인
    </Button>
  )
}
