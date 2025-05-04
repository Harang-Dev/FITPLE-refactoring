"use client";

import PostCard from "@/components/PostCard"
import { useEffect, useRef } from "react"

const dummyPosts = Array(10).fill(0).map((_, i) => ({
  username: "하랑이",
  position: "프론트엔드",
  content: "안녕하세요! 프론트엔드 개발자 서현우 입니다",
  avatarUrl: "/images/avatar.png",
  techStack: ["js", "ts", "react", "next"],
  likes: 10 + i,
  timeAgo: `${i + 1}일 전`,
}))

export default function PopularPostCarousel() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    let scrollAmount = 0
    const scrollStep = 1
    const scrollInterval = 20

    const interval = setInterval(() => {
      if (!container) return
      scrollAmount += scrollStep
      container.scrollLeft += scrollStep

      if (container.scrollLeft + container.offsetWidth >= container.scrollWidth) {
        container.scrollLeft = 0
        scrollAmount = 0
      }
    }, scrollInterval)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold">🔥 인기글</h2>
      <div className="overflow-x-auto no-scrollbar" ref={containerRef}>
        <div className="flex gap-4 w-max">
          {dummyPosts.map((post, i) => (
            <PostCard key={i} {...post} />
          ))}
        </div>
      </div>
    </section>
  )
}
