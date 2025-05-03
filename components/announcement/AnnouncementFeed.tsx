import { Card } from "@/components/ui/card"

const notices = [
  { title: "📢 [공지] 5/10 서비스 점검 안내", date: "2025.05.03" },
  { title: "🔥 이달의 인기 프로젝트 선정 안내", date: "2025.05.01" },
  { title: "🆕 새로운 UI 리팩토링 적용 중", date: "2025.04.30" },
]

export default function AnnouncementFeed() {
  return (
    <div className="flex flex-col gap-3">
      {notices.map((notice, i) => (
        <Card key={i} className="p-4">
          <p className="text-sm font-medium">{notice.title}</p>
          <p className="text-xs text-gray-500">{notice.date}</p>
        </Card>
      ))}
    </div>
  )
}
