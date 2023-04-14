"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostgresUsersRepository = void 0;
class PostgresUsersRepository {
    constructor() {
        this.users = [];
    }
    async findByEmail(email) {
        const user = this.users.find(user => user.email === email);
    }
    async save(user) {
        this.users.push(user);
    }
}
exports.PostgresUsersRepository = PostgresUsersRepository;
