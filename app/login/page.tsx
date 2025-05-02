"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f9fafb] px-4">
      <Card className="w-full max-w-sm p-6 shadow-md space-y-6">
        <CardHeader>
          <CardTitle className="text-2xl text-center">로그인</CardTitle>
        </CardHeader>

        <CardContent className="flex flex-col gap-4">
          {/* 카카오 로그인 버튼 */}
          <Button
            variant="outline"
            className="w-full bg-[#FEE500] hover:bg-[#ffd900] text-black font-semibold py-6"
            onClick={() => {
              alert("카카오 로그인 연동 예정입니다.")
              // 나중에: window.location.href = KAKAO_AUTH_URL
            }}
          >
            <div className="flex items-center justify-center gap-2">
              <Image src="/icons/kakao.svg" alt="kakao" width={24} height={24} />
              <span>카카오로 로그인</span>
            </div>
          </Button>

          <p className="text-center text-sm text-gray-500">
            소셜 로그인만 지원됩니다.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
