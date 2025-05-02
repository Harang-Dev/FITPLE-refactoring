"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState } from "react"

interface Props {
  value: string
  onChange: (value: string) => void
  onNext: () => void
}

export default function NicknameStep({ value, onChange, onNext }: Props) {
  const [status, setStatus] = useState<"idle" | "checking" | "available" | "duplicate">("idle")

  const checkNickname = () => {
    setStatus("checking")
    setTimeout(() => {
      if (value === "harang") {
        setStatus("duplicate")
      } else {
        setStatus("available")
      }
    }, 1000)
  }

  return (
    <>
      <h1 className="text-xl font-semibold text-center">닉네임 입력</h1>
      <Input
        placeholder="사용할 닉네임"
        value={value}
        onChange={(e) => {
          onChange(e.target.value)
          setStatus("idle")
        }}
      />
      <Button onClick={checkNickname} disabled={!value}>
        중복 확인
      </Button>
      {status === "available" && (
        <p className="text-green-600 text-sm">사용 가능한 닉네임입니다 ✅</p>
      )}
      {status === "duplicate" && (
        <p className="text-red-500 text-sm">이미 사용 중입니다 ❌</p>
      )}
      <Button
        onClick={onNext}
        disabled={status !== "available"}
        className="w-full mt-2"
      >
        다음
      </Button>
    </>
  )
}
