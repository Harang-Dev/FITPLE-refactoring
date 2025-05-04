import { createClient } from "@/lib/server"
import { User } from "../../domain/entities/User"
import { UserRepository } from "../../domain/repositories/UserRepository"

export class SbUserRepository implements UserRepository {
  private supabase = createClient()

  async findById(id: string): Promise<User | null> {
    const { data, error } = await this.supabase
      .from("users")
      .select("*")
      .eq("id", id)
      .single()

    if (error || !data) return null

    // user_skills 조인해서 skill 배열 포함
    const { data: skillRows } = await this.supabase
      .from("user_skills")
      .select("skills(name)")
      .eq("user_id", id)

    const skills = skillRows?.map((row) => row.skills.name) || []

    return {
      ...data,
      avatarUrl: data.avatar_url,
      createdAt: new Date(data.created_at),
      skills,
    }
  }

  async create(user: User): Promise<User> {
    const { id, email, nickname, position, career, avatarUrl, createdAt, skills } = user

    // 1. users 테이블에 insert
    const { error } = await this.supabase.from("users").insert({
      id,
      email,
      nickname,
      position,
      career,
      avatar_url: avatarUrl,
      created_at: createdAt,
    })

    if (error) throw new Error("유저 저장 실패")

    // 2. skill 이름으로 id 매핑
    const { data: skillRows } = await this.supabase
      .from("skills")
      .select("id, name")
      .in("name", skills)

    if (!skillRows) throw new Error("기술 스택 조회 실패")

    // 3. user_skills에 insert
    const userSkillsData = skillRows.map((skill) => ({
      user_id: id,
      skill_id: skill.id,
    }))

    const { error: skillInsertError } = await this.supabase
      .from("user_skills")
      .insert(userSkillsData)

    if (skillInsertError) throw new Error("기술 스택 저장 실패")

    return user
  }

  async update(user: Partial<User>): Promise<User> {
    throw new Error("Not implemented yet")
  }
}
