import PostCard from "@/components/PostCard";

export default function Home() {
  return (
    <div>
      <PostCard
        username="하랑이"
        position="프론트엔드"
        content="안녕하세요! 프론트엔드 개발자 서현우 입니다"
        avatarUrl="/images/avatar.png"
        techStack={["js", "ts", "react", "next"]}
        likes={10}
        timeAgo="1일 전"
      />
    </div>
  );
}