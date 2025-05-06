import { NextResponse } from "next/server"

export async function GET() {

  if (error) {
    return NextResponse.json({ message: "기술 스택 조회 실패" }, { status: 500 })
  }

  return NextResponse.json(data)
}
