import Link from "next/link"

export default function Footer() {
  return (
    <footer className="w-full border-t bg-[#f9fafb] text-gray-500 text-sm">
      <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* 왼쪽: 브랜드명 */}
        <div className="font-semibold text-gray-600">
          © 2025 FITPLE
        </div>

        {/* 오른쪽: 간단한 링크 */}
        <div className="flex gap-4">
          <Link href="/privacy" className="hover:text-black transition">
            개인정보처리방침
          </Link>
          <Link href="/terms" className="hover:text-black transition">
            이용약관
          </Link>
        </div>

      </div>
    </footer>
  )
}
