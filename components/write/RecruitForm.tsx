"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

const allRoles = ["프론트엔드", "백엔드", "디자이너", "기획자"]
const allStacks = ["React", "TypeScript", "Next.js", "Node.js", "Django", "Express", "Vue", "Spring", "Unity"]

export default function RecruitForm() {
  const [title, setTitle] = useState("")
  const [selectedRoles, setSelectedRoles] = useState<string[]>([])
  const [selectedStacks, setSelectedStacks] = useState<string[]>([])
  const [description, setDescription] = useState("")

  const toggleSelection = (list: string[], setList: (v: string[]) => void, value: string) => {
    setList(
      list.includes(value)
        ? list.filter((v) => v !== value)
        : [...list, value]
    )
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log({
      title,
      roles: selectedRoles,
      stacks: selectedStacks,
      description
    })
  }

  return (
    <form className="space-y-4 mt-4" onSubmit={handleSubmit}>
      {/* 제목 */}
      <Input
        placeholder="프로젝트 제목"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      {/* 모집 분야 다중 선택 */}
      <div>
        <p className="text-sm font-medium mb-2">모집 분야</p>
        <div className="flex flex-wrap gap-2">
          {allRoles.map((role) => (
            <Button
              key={role}
              type="button"
              variant={selectedRoles.includes(role) ? "default" : "outline"}
              onClick={() => toggleSelection(selectedRoles, setSelectedRoles, role)}
              className="text-sm"
            >
              {role}
            </Button>
          ))}
        </div>
      </div>

      {/* 기술 스택 다중 선택 */}
      <div>
        <p className="text-sm font-medium mb-2">기술 스택</p>
        <div className="flex flex-wrap gap-2">
          {allStacks.map((tech) => (
            <Button
              key={tech}
              type="button"
              variant={selectedStacks.includes(tech) ? "default" : "outline"}
              onClick={() => toggleSelection(selectedStacks, setSelectedStacks, tech)}
              className="text-sm"
            >
              {tech}
            </Button>
          ))}
        </div>
      </div>

      {/* 설명 */}
      <Textarea
        placeholder="모집 내용을 입력해주세요"
        rows={6}
        maxLength={1000}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      {/* 제출 */}
      <Button type="submit" className="w-full">작성하기</Button>
    </form>
  )
}
