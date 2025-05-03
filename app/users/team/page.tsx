import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

const dummyTeams = [
  {
    id: 1,
    title: "GPT로 만드는 면접 준비 플랫폼",
    role: "프론트엔드",
    members: [
      "/images/avatar.png",
      "/images/avatar.png",
      "/images/avatar.png",
    ],
    createdAt: "2025.04.20",
  },
  {
    id: 2,
    title: "날씨 기반 음악 추천 서비스",
    role: "백엔드",
    members: [
      "/images/avatar.png",
      "/images/avatar.png",
    ],
    createdAt: "2025.03.05",
  },
]

export default function TeamPage() {
  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold">내 팀 목록</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {dummyTeams.map((team) => (
          <Card key={team.id}>
            <CardHeader>
              <CardTitle className="text-base">{team.title}</CardTitle>
              <p className="text-sm text-gray-500">내 역할: {team.role}</p>
            </CardHeader>
            <CardContent className="flex items-center justify-between">
              <div className="flex -space-x-2">
                {team.members.map((src, i) => (
                  <Image
                    key={i}
                    src={src}
                    alt={`member-${i}`}
                    width={32}
                    height={32}
                    className="rounded-full border-2 border-white"
                  />
                ))}
              </div>
              <span className="text-xs text-gray-400">{team.createdAt}</span>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
