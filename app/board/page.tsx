"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Input } from "@/components/ui/input"
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select"

const dummyPosts = Array(8).fill(0).map((_, i) => ({
  id: i + 1,
  title: `모집합니다! ${i + 1}`,
  username: "하랑이",
  position: "프론트엔드",
  techStack: ["React", "TypeScript"],
  timeAgo: `${i + 1}일 전`,
}))

export default function BoardPage() {
  const router = useRouter()
  const [search, setSearch] = useState("")
  const [sort, setSort] = useState("latest")

  const filteredPosts = dummyPosts
    .filter((post) => post.title.includes(search))
    .sort((a, b) => sort === "latest" ? b.id - a.id : a.id - b.id)

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-6">
      <h1 className="text-2xl font-bold">게시판</h1>

      {/* 검색 및 정렬 */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <Input
          placeholder="제목으로 검색"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full sm:w-1/2"
        />
        <Select onValueChange={setSort} defaultValue="latest">
          <SelectTrigger className="w-[150px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="latest">최신순</SelectItem>
            <SelectItem value="oldest">오래된순</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* 게시글 목록 */}
      <ul className="divide-y">
        {filteredPosts.map((post) => (
          <li
            key={post.id}
            className="py-4 flex justify-between items-center cursor-pointer hover:bg-gray-50 px-2 rounded"
            onClick={() => router.push(`/board/${post.id}`)}
          >
            <div>
              <h2 className="text-base font-semibold text-gray-900">{post.title}</h2>
              <p className="text-sm text-gray-500 mt-1">
                {post.username} · {post.position} · {post.techStack.join(", ")}
              </p>
            </div>
            <span className="text-xs text-gray-400 whitespace-nowrap">{post.timeAgo}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
