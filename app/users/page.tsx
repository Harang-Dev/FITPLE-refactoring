"use client"

import { useUserStore } from "@/hooks/useUserStore"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function UsersPage() {
  const user = useUserStore((state) => state.user)

  console.log("user", user);

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        로그인 정보가 없습니다.
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <Card className="w-full max-w-md p-6 shadow-md space-y-6">
        <CardContent className="flex flex-col items-center space-y-3">
          <Image
            src={user.avatarUrl || "/images/avatar.png"}
            alt="avatar"
            width={80}
            height={80}
            className="rounded-full object-cover"
          />
          <h2 className="text-2xl font-bold">{user.nickname}</h2>
          <p className="text-sm text-gray-500">
            {user.position} · {user.career}
          </p>
          <div className="flex gap-2 flex-wrap justify-center">
            {user.techStack?.map((tech, i) => (
              <Image key={i} src={`/icons/${tech}.svg`} alt={tech} width={24} height={24} />
            ))}
          </div>
        </CardContent>

        <CardFooter className="justify-center">
          <Link href="/profile/edit" className="w-full">
            <Button className="w-full">수정하기</Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  )
}
