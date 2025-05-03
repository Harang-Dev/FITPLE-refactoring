"use client"

import { useState } from "react";
import NicknameStep from "@/components/onboard/NicknameStep";
import CareerStep from "@/components/onboard/CareerStep";
import PositionStep from "@/components/onboard/PositionStep";
import SkillStep from "@/components/onboard/SkillStep";

export default function OnboardPage() {
  const [step, setStep] = useState(0)

  const [formData, setFormData] = useState({
    nickname: "",
    career: "",
    position: "",
    skills: [] as string[],
  })

  const next = () => setStep((s) => s + 1)
  const prev = () => setStep((s) => Math.max(0, s - 1))

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-white">
      <div className="w-full max-w-sm flex flex-col gap-4">
        {step === 0 && (
          <NicknameStep
            value={formData.nickname}
            onChange={(nickname) =>
              setFormData((prev) => ({ ...prev, nickname }))
            }
            onNext={next}
          />
        )}
        {step === 1 && (
          <CareerStep
            value={formData.career}
            onChange={(career) =>
              setFormData((prev) => ({ ...prev, career }))
            }
            onNext={next}
          />
        )}
        {step === 2 && (
          <PositionStep
            value={formData.position}
            onChange={(position) =>
              setFormData((prev) => ({ ...prev, position }))
            }
            onNext={next}
          />
        )}
        {step === 3 && (
          <SkillStep
            values={formData.skills}
            onChange={(skills) =>
              setFormData((prev) => ({ ...prev, skills }))
            }
            onNext={() => {
              console.log("🚀 최종 제출 값:", formData)
              // 서버 전송 로직 예정
            }}
          />
        )}

        {/* 뒤로가기 버튼 */}
        {step > 0 && (
          <button
            onClick={prev}
            className="text-sm text-gray-500 underline mt-2 mx-auto"
          >
            이전으로 돌아가기
          </button>
        )}
      </div>
    </div>
  )
}
