"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserUseCase = void 0;
const User_1 = require("../../entities/User");
class CreateUserUseCase {
    constructor(usersRepository, mailProvider) {
        this.usersRepository = usersRepository;
        this.mailProvider = mailProvider;
    }
    async execute(data) {
        const userAlreadyExists = await this.usersRepository.findByEmail(data.email);
        if (userAlreadyExists) {
            throw new Error('User already exists.');
        }
        const user = new User_1.User(data);
        await this.usersRepository.save(user);
        this.mailProvider.sendMail({
            to: {
                name: data.name,
                email: data.email,
            },
            from: {
                name: 'Equipe do meu app',
                email: 'infosystema@gmail.com',
            },
            subject: 'Seja bem-vindo à plataforma',
            body: '<p>Você já pode fazer login em nossa plataforma.</p>'
        });
    }
}
exports.CreateUserUseCase = CreateUserUseCase;
