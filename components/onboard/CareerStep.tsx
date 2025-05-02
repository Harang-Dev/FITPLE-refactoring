"use client"

import { Button } from "@/components/ui/button"

interface Props {
  value: string
  onChange: (value: string) => void
  onNext: () => void
}

export default function CareerStep({ value, onChange, onNext }: Props) {
  return (
    <>
      <h1 className="text-xl font-semibold text-center">커리어 선택</h1>
      <p className="text-sm text-gray-500 text-center mb-4">당신의 커리어 상태를 선택해주세요</p>

      <div className="flex flex-col gap-3">
        <Button
          variant={value === "신입" ? "default" : "outline"}
          onClick={() => onChange("신입")}
        >
          신입
        </Button>
        <Button
          variant={value === "경력" ? "default" : "outline"}
          onClick={() => onChange("경력")}
        >
          경력
        </Button>
      </div>

      <Button
        onClick={onNext}
        disabled={!value}
        className="w-full mt-6"
      >
        다음
      </Button>
    </>
  )
}
