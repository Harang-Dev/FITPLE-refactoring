"use client"

import { useEffect, useState } from "react"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import NicknameStep from "@/components/onboard/NicknameStep"
import CareerStep from "@/components/onboard/CareerStep"
import PositionStep from "@/components/onboard/PositionStep"
import SkillStep from "@/components/onboard/SkillStep"
import { useCreateUser } from "@/hooks/useCreateUser"

export default function OnboardPage() {
  const [step, setStep] = useState(0)
  const [allSkills, setAllSkills] = useState<string[]>([])
  const [loading, setLoading] = useState(true) // ✅ 로딩 상태

  const { mutate: createUser } = useCreateUser()
  const supabase = createClientComponentClient()

  const [formData, setFormData] = useState({
    nickname: "",
    career: "",
    position: "",
    skills: [] as string[],
  })

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const res = await fetch("/api/skills")
        const data = await res.json()
        setAllSkills(data.map((skill: any) => skill.name))
      } catch (e) {
        alert("기술 스택을 불러오지 못했습니다.")
      } finally {
        setLoading(false)
      }
    }

    fetchSkills()
  }, [])

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
      skills: formData.skills,
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
            skills={allSkills}
            values={formData.skills}
            onChange={(skills) =>
              setFormData((prev) => ({ ...prev, skills }))
            }
            onNext={handleSubmit}
            loading={loading}
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
