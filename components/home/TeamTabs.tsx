"use client"

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import PostCard from "@/components/PostCard"
import { useState } from "react"
import { Button } from "@/components/ui/button"

const dummyTeams = Array(20).fill(0).map((_, i) => ({
  username: "하랑이",
  position: "백엔드",
  content: `팀원 ${i + 1}을 찾고 있습니다!`,
  avatarUrl: "/images/avatar.png",
  techStack: ["react", "ts", "node"],
  likes: 5 * i,
  timeAgo: `${i + 1}일 전`,
}))

export default function TeamTabs() {
  const [currentTab, setCurrentTab] = useState("get")
  const [page, setPage] = useState(1)
  const itemsPerPage = 8

  const filteredContent = currentTab === "get"
    ? dummyTeams.map((team, i) => (
        <PostCard key={"get" + i} {...team} />
      ))
    : dummyTeams.map((team, i) => (
        <PostCard key={"join" + i} {...team} content={`저 ${i + 1}명 받아주세요!`} />
      ))

  const totalPages = Math.ceil(filteredContent.length / itemsPerPage)
  const pagedContent = filteredContent.slice((page - 1) * itemsPerPage, page * itemsPerPage)

  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold">🚀 팀원 모집</h2>
      <Tabs defaultValue="get" onValueChange={(val) => { setCurrentTab(val); setPage(1); }} className="w-full">
        <TabsList className="grid grid-cols-2 w-full">
          <TabsTrigger value="get">데려가요</TabsTrigger>
          <TabsTrigger value="join">어서와요</TabsTrigger>
        </TabsList>
        <TabsContent value={currentTab} className="mt-4 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
          {pagedContent}
        </TabsContent>
        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: totalPages }).map((_, i) => (
            <Button
              key={i}
              variant={page === i + 1 ? "default" : "outline"}
              size="sm"
              onClick={() => setPage(i + 1)}
            >
              {i + 1}
            </Button>
          ))}
        </div>
      </Tabs>
    </section>
  )
}
