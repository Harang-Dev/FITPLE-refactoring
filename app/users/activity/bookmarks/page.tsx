"use client"

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

export default function BookmarksPage() {
  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold">내 활동</h2>

      <Tabs defaultValue="bookmarks">
        <TabsList className="w-full grid grid-cols-2">
          <TabsTrigger value="posts" asChild>
            <a href="/users/activity">내 게시글</a>
          </TabsTrigger>
          <TabsTrigger value="bookmarks">찜 목록</TabsTrigger>
        </TabsList>

        <TabsContent value="bookmarks" className="mt-4">
          <p>⭐ 내가 찜한 프로젝트 또는 게시글 목록이 여기에 표시됩니다.</p>
          {/* 찜한 항목 카드 나열 예정 */}
        </TabsContent>
      </Tabs>
    </section>
  )
}
