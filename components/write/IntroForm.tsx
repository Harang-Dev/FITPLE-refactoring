"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select"

const allStacks = ["React", "TypeScript", "Next.js", "Node.js", "Django", "Express", "Vue", "Spring", "Unity"]

export default function IntroForm() {
  const [position, setPosition] = useState("")
  const [headline, setHeadline] = useState("")
  const [bio, setBio] = useState("")
  const [mainStack, setMainStack] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log({ position, headline, bio, mainStack })
    // TODO: 서버로 제출 예정
  }

  return (
    <form className="space-y-4 mt-4" onSubmit={handleSubmit}>
      {/* 포지션 선택 */}
      <Select onValueChange={setPosition}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="포지션 선택" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="프론트엔드">프론트엔드</SelectItem>
          <SelectItem value="백엔드">백엔드</SelectItem>
          <SelectItem value="디자이너">디자이너</SelectItem>
          <SelectItem value="기획자">기획자</SelectItem>
        </SelectContent>
      </Select>

      {/* 한 줄 소개 */}
      <Input
        placeholder="한 줄 소개"
        value={headline}
        onChange={(e) => setHeadline(e.target.value)}
      />

      {/* 자기소개 */}
      <Textarea
        placeholder="자기소개를 입력해주세요"
        rows={6}
        maxLength={500}
        value={bio}
        onChange={(e) => setBio(e.target.value)}
      />

      {/* 주 기술 스택 선택 */}
      <Select onValueChange={setMainStack}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="주 기술 스택 선택" />
        </SelectTrigger>
        <SelectContent>
          {allStacks.map((tech) => (
            <SelectItem key={tech} value={tech}>
              {tech}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {/* 제출 */}
      <Button type="submit" className="w-full">작성하기</Button>
    </form>
  )
}
