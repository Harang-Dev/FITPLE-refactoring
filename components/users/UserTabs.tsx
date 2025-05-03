"use client"

import { usePathname, useRouter } from "next/navigation"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function UserTabs() {
  const router = useRouter()
  const pathname = usePathname()

  // 현재 경로에 따라 탭 상태 결정
  const current = pathname.includes("/users/team")
    ? "team"
    : pathname.includes("/users/activity")
    ? "activity"
    : "info"

  return (
    <Tabs value={current} onValueChange={(value) => router.push(`/users/${value === "info" ? "" : value}`)} className="w-full">
      <TabsList className="grid grid-cols-3 w-full max-w-xl mx-auto mt-6">
        <TabsTrigger value="info">내 정보</TabsTrigger>
        <TabsTrigger value="activity">내 활동</TabsTrigger>
        <TabsTrigger value="team">내 팀</TabsTrigger>
      </TabsList>
    </Tabs>
  )
}
