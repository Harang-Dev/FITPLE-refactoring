"use client"

import { useState } from "react"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import NicknameStep from "@/components/onboard/NicknameStep"
import CareerStep from "@/components/onboard/CareerStep"
import PositionStep from "@/components/onboard/PositionStep"
import SkillStep from "@/components/onboard/SkillStep"
import { useCreateUser } from "@/hooks/useCreateUser"

export default function OnboardPage() {
  const [step, setStep] = useState(0)
  const { mutate: createUser } = useCreateUser()
  const supabase = createClientComponentClient()

  const [formData, setFormData] = useState({
    nickname: "",
    career: "",
    position: "",
    skills: [] as string[],
  })

  const next = () => setStep((s) => s + 1)
  const prev = () => setStep((s) => Math.max(0, s - 1))

  const handleSubmit = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
      alert("로그인이 필요합니다.")
      return
    }

    const newUser = {
      id: user.id,
      email: user.email,
      nickname: formData.nickname,
      position: formData.position,
      career: formData.career,
      avatarUrl: user.user_metadata?.avatar_url || "",
      createdAt: new Date(),
    }

    createUser(newUser, {
      onSuccess: () => {
        window.location.href = "/users"
      },
      onError: () => {
        alert("회원가입에 실패했습니다.")
      },
    })
  }

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
            onNext={handleSubmit}
          />
        )}

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
