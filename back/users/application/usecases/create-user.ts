import { User } from "@/back/users/domain/entities/User"
import { UserRepository } from "@/back/users/domain/repositories/UserRepository"

export class CreateUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute(user: User): Promise<User> {
    return this.userRepository.create(user)
  }
}
