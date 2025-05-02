"use client"

import { Button } from "@/components/ui/button"

interface Props {
  value: string
  onChange: (value: string) => void
  onNext: () => void
}

const positions = ["프론트엔드", "백엔드", "디자이너", "기획자"]

export default function PositionStep({ value, onChange, onNext }: Props) {
  return (
    <>
      <h1 className="text-xl font-semibold text-center">포지션 선택</h1>
      <p className="text-sm text-gray-500 text-center mb-4">당신의 역할을 선택해주세요</p>

      <div className="grid grid-cols-2 gap-3">
        {positions.map((position) => (
          <Button
            key={position}
            variant={value === position ? "default" : "outline"}
            onClick={() => onChange(position)}
          >
            {position}
          </Button>
        ))}
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
