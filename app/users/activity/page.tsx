"use client"

import { useRouter } from "next/navigation"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

export default function ActivityPage() {
  const router = useRouter()

  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold">내 활동</h2>

      <Tabs defaultValue="posts" onValueChange={(v) => router.push(`/users/activity/${v === "posts" ? "" : v}`)}>
        <TabsList className="w-full grid grid-cols-2">
          <TabsTrigger value="posts">내 게시글</TabsTrigger>
          <TabsTrigger value="bookmarks">찜 목록</TabsTrigger>
        </TabsList>

        <TabsContent value="posts" className="mt-4">
          <p>📌 내가 작성한 게시글이 여기에 보여집니다.</p>
          {/* 실제 게시글 카드 나열 예정 */}
        </TabsContent>
      </Tabs>
    </section>
  )
}
