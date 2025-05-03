"use client"

import { Button } from "@/components/ui/button"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import Link from "next/link"

export default function Header() {
    return (
        <header className="w-full border-b shadow-sm bg-[#59C2FF] text-white sticky top-0 z-50">
            <div className="max-w-6xl mx-auto px-6 py-4 min-h-[64px] flex items-center justify-between">
                
                <Link href="/" className="text-2xl font-bold text-brand">
                    FITPLE
                </Link>

                {/* 데스크탑 메뉴 */}
                <nav className="hidden md:flex space-x-8 text-base font-medium">
                    <Link href="/board" className="hover:text-brand transition">
                        게시판
                    </Link>
                    <Link href="/users" className="hover:text-brand transition">
                        마이페이지
                    </Link>
                    <Link href="/login" className="hover:text-brand transition">
                        로그인
                    </Link>
                </nav>

                {/* 모바일 메뉴 */}
                <div className="md:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon">
                                <Menu />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-64">
                            <nav className="flex flex-col gap-6 mt-10 text-lg font-medium">
                                <Link href="/board">게시판</Link>
                                <Link href="/mypage">마이페이지</Link>
                                <Link href="/login">로그인</Link>
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>

    )
}
