"use client"

import { useState } from "react"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"

const dummyPosts = Array(8).fill(0).map((_, i) => ({
  id: (i + 1).toString(),
  title: `모집합니다! ${i + 1}`,
  content: `이 프로젝트는 정말 재미있고 의미가 있습니다. ${i + 1}`,
  username: "하랑이",
  position: "프론트엔드",
  techStack: ["React", "TypeScript", "Next.js"],
  timeAgo: `${i + 1}일 전`,
  likes: 3 + i,
}))

export default function BoardDetailPage({ params }: { params: { id: string } }) {
  const post = dummyPosts.find((p) => p.id === params.id)
  const [likes, setLikes] = useState(post?.likes ?? 0)

  if (!post) return notFound()

  const handleLike = () => setLikes((prev) => prev + 1)
  const handleApply = () => alert("지원 요청이 전송되었습니다!") // TODO: 서버 연동

  return (
    <div className="max-w-3xl mx-auto px-4 py-10 space-y-6">
      <div>
        <h1 className="text-2xl font-bold">{post.title}</h1>
        <div className="text-sm text-gray-500 mt-1">
          {post.username} · {post.position} · {post.techStack.join(", ")} · {post.timeAgo}
        </div>
      </div>

      <hr />

      <p className="text-base leading-relaxed whitespace-pre-wrap">{post.content}</p>

      {/* 버튼 묶음 - 가운데 정렬 */}
      <div className="flex justify-center gap-4 mt-10">
        <Button onClick={handleApply}>지원하기</Button>
        <Button variant="ghost" onClick={handleLike}>
          ❤️ {likes}
        </Button>
      </div>
    </div>
  )
}
