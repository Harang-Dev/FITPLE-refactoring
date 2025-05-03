"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function AnnouncementBanner() {
  const [visible, setVisible] = useState(true)

  if (!visible) return null

  return (
    <Card className="bg-[#FFF9E6] border border-yellow-300 text-yellow-900 rounded-xl p-4 flex items-center justify-between">
      <div>
        <p className="font-semibold">📣 새로운 기능 출시!</p>
        <p className="text-sm">이제 프로젝트를 더 쉽게 관리할 수 있어요.</p>
      </div>
      <div className="flex items-center gap-2">
        <Button variant="outline" size="sm" className="border-yellow-600 text-yellow-900">
          자세히 보기
        </Button>
        <Button variant="ghost" size="icon" onClick={() => setVisible(false)}>
          ✕
        </Button>
      </div>
    </Card>
  )
}
