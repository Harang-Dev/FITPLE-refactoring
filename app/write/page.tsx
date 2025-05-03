"use client"

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import IntroForm from "@/components/write/IntroForm"
import RecruitForm from "@/components/write/RecruitForm"

export default function WritePage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-6 space-y-4">
      <h1 className="text-xl font-bold text-center">글쓰기</h1>

      <Tabs defaultValue="intro" className="w-full">
        <TabsList className="grid grid-cols-2 w-full">
          <TabsTrigger value="intro">소개글 작성</TabsTrigger>
          <TabsTrigger value="recruit">모집글 작성</TabsTrigger>
        </TabsList>

        <TabsContent value="intro">
          <IntroForm />
        </TabsContent>

        <TabsContent value="recruit">
          <RecruitForm />
        </TabsContent>
      </Tabs>
    </div>
  )
}
