"use client"

import { useMutation } from "@tanstack/react-query"

export function useCreateUser() {
  return useMutation({
    mutationFn: async (data: any) => {
      const res = await fetch("/api/users/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error("회원가입 실패")
      return res.json()
    },
  })
}
