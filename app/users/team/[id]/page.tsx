"use client"

import Image from "next/image"
import { useParams } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState } from "react"

const dummyMembers = [
  {
    id: 1,
    nickname: "하랑이",
    position: "프론트엔드",
    avatarUrl: "/images/avatar.png",
    techStack: ["react", "ts", "nextjs"],
  },
  {
    id: 2,
    nickname: "백엔디",
    position: "백엔드",
    avatarUrl: "/images/avatar2.png",
    techStack: ["nodejs", "express"]
  }
]

export default function TeamDetailPage() {
  const { id } = useParams()
  const [messages, setMessages] = useState<string[]>([])
  const [input, setInput] = useState("")

  const handleSend = () => {
    if (!input.trim()) return
    setMessages([...messages, input])
    setInput("")
  }

  return (
    <div className="space-y-6">
      <h1 className="text-xl font-bold">팀 정보 - ID: {id}</h1>

      {/* 팀원 섹션 */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold">👥 팀원</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {dummyMembers.map((member) => (
            <Card key={member.id}>
              <CardContent className="flex gap-4 p-4 items-center">
                <Image
                  src={member.avatarUrl}
                  alt={member.nickname}
                  width={48}
                  height={48}
                  className="rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold">{member.nickname}</p>
                  <p className="text-sm text-gray-500">{member.position}</p>
                  <div className="flex gap-1 mt-1">
                    {member.techStack.map((tech, i) => (
                      <Image key={i} src={`/icons/${tech}.svg`} alt={tech} width={16} height={16} />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* 채팅창 */}
      <section className="space-y-2">
        <h2 className="text-lg font-semibold">💬 팀 채팅</h2>
        <div className="border rounded-lg h-[300px] p-4 overflow-y-auto bg-gray-50 flex flex-col gap-2">
          {messages.map((msg, i) => (
            <div key={i} className="bg-white rounded-md p-2 shadow text-sm max-w-[70%]">
              {msg}
            </div>
          ))}
        </div>
        <div className="flex gap-2 mt-2">
          <Input value={input} onChange={(e) => setInput(e.target.value)} placeholder="메시지를 입력하세요" />
          <Button onClick={handleSend}>전송</Button>
        </div>
      </section>
    </div>
  )
}