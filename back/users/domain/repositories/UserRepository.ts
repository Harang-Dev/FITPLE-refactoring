import { User } from '../entities/User';

export interface UserRepository {
    findById(id: string): Promise<User | null>;
    update(user: Partial<User>): Promise<User>;
    create(user: User): Promise<User>;
}