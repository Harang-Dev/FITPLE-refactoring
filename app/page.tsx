"use client"

import AnnouncementBanner from "@/components/announcement/AnnouncementBanner"
import AnnouncementFeed from "@/components/announcement/AnnouncementFeed"
import FloatingWriteButton from "@/components/FloatingWriteButton"
import PopularPostCarousel from "@/components/home/PopularPostCarousel"
import TeamTabs from "@/components/home/TeamTabs"

export default function RootPage() {
  return (
    <div className="min-h-[calc(100vh-120px)] max-w-6xl mx-auto px-6 space-y-10 py-8">
      <AnnouncementBanner />

      <PopularPostCarousel />

      <section>
        <h2 className="text-lg font-semibold mb-2">📌 공지사항</h2>
        <AnnouncementFeed />
      </section>

      {/* 팀원 모집 탭 */}
      <TeamTabs />
      <FloatingWriteButton />
    </div>
  )
}