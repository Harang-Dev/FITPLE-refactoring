"use client"

import { useRouter } from "next/navigation"
import { Pencil } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function FloatingWriteButton() {
  const router = useRouter()

  return (
    <Button
      onClick={() => router.push("/write")}
      className="fixed bottom-6 right-6 md:bottom-10 md:right-10 lg:bottom-14 lg:right-14 z-50 rounded-full w-14 h-14 p-0 shadow-lg bg-brand hover:bg-brand/90"
    >
      <Pencil className="w-5 h-5" />
    </Button>
  )
}
