import { IUsersRepository } from "../IUsersRepository";
import { User } from "../../entities/User";

export class PostgresUsersRepository implements IUsersRepository {
    private users: User[] = [];

    async findByEmail(email: string): Promise<void> {
        const user = this.users.find(user => user.email === email);
      
    }
    async save(user: User): Promise<void> {
        this.users.push(user);
    }
}