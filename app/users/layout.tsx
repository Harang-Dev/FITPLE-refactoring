import UserTabs from "@/components/users/UserTabs"

export default function UsersLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white px-4 py-6">
      <UserTabs />
      <div className="mt-8">{children}</div>
    </div>
  )
}
