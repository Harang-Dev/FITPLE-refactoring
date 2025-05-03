import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

const dummyUser = {
  nickname: "하랑이",
  position: "프론트엔드",
  career: "신입",
  avatarUrl: "/images/avatar.png",
  techStack: ["react", "ts", "next", "node", "django", "express", "spring", "vue", "unity"],
}

export default function UsersPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <Card className="w-full max-w-md p-6 shadow-md space-y-6">
        <CardContent className="flex flex-col items-center space-y-3">
          <Image
            src={dummyUser.avatarUrl}
            alt="avatar"
            width={80}
            height={80}
            className="rounded-full object-cover"
          />
          <h2 className="text-2xl font-bold">{dummyUser.nickname}</h2>
          <p className="text-sm text-gray-500">{dummyUser.position} · {dummyUser.career}</p>
          <div className="flex gap-2">
            {dummyUser.techStack.map((tech, i) => (
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
