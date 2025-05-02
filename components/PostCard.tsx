import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

interface PostCardProps {
    username: string
    position: string
    content: string
    avatarUrl: string
    techStack: string[]
    likes: number
    timeAgo: string
    tag?: string
}

export default function PostCard({
    username,
    position,
    content,
    avatarUrl,
    techStack,
    likes,
    timeAgo,
    tag = "프로필",
}: PostCardProps) {
    return (
        <Card className="w-full max-w-[320px] h-auto rounded-xl px-4 py-3 shadow-sm relative">
            <CardContent className="p-0 flex flex-col gap-3">

                {/* 아바타 - 우측 중앙 고정, 더 크게 */}
                <Image
                    src={avatarUrl}
                    alt="avatar"
                    width={64}
                    height={64}
                    className="rounded-full object-cover absolute right-4 top-1/2 -translate-y-1/2"
                />

                {/* 상단 태그 */}
                <Badge className="bg-[#FFA726] text-white rounded-full text-[10px]">
                    🥲 프로필
                </Badge>

                {/* 닉네임 + 포지션 */}
                <div className="text-sm font-bold pr-[80px]">
                    {username} <span className="text-gray-400 text-xs font-normal">{position}</span>
                </div>

                {/* 소개글 */}
                <p className="text-md pr-[80px] overflow-hidden text-ellipsis whitespace-nowrap">
                    {content}
                </p>

                {/* 기술 스택 */}
                <div className="flex gap-1 mt-1 pr-[80px]">
                    {techStack.map((tech, i) => (
                        <Image key={i} src={`/icons/${tech}.svg`} alt={tech} width={20} height={20} />
                    ))}
                </div>

                {/* 좋아요 + 시간 */}
                <div className="flex justify-between items-center mt-2 text-xs text-gray-500">
                    <span>❤️ {likes}</span>
                    <span>{timeAgo}</span>
                </div>

            </CardContent>
        </Card>
    )
}
