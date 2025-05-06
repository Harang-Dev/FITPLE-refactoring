"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface Props {
  skills: string[]
  values: string[]
  onChange: (values: string[]) => void
  onNext: () => void
  loading: boolean
}

export default function SkillStep({ skills, values, onChange, onNext, loading }: Props) {
  const toggleSkill = (skill: string) => {
    if (values.includes(skill)) {
      onChange(values.filter((s) => s !== skill))
    } else {
      onChange([...values, skill])
    }
  }

  return (
    <>
      <h1 className="text-xl font-semibold text-center">기술 스택 선택</h1>
      <p className="text-sm text-gray-500 text-center mb-4">사용할 수 있는 기술을 선택해주세요</p>

      {loading ? (
        <p className="text-center text-gray-400">기술 스택을 불러오는 중...</p>
      ) : (
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => {
            const selected = values.includes(skill)
            return (
              <Badge
                key={skill}
                variant={selected ? "default" : "outline"}
                className="cursor-pointer"
                onClick={() => toggleSkill(skill)}
              >
                {skill}
              </Badge>
            )
          })}
        </div>
      )}

      <Button
        onClick={onNext}
        disabled={values.length === 0 || loading}
        className="w-full mt-6"
      >
        다음
      </Button>
    </>
  )
}
