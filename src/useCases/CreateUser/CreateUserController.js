"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserController = void 0;
class CreateUserController {
    constructor(createUserUseCase) {
        this.createUserUseCase = createUserUseCase;
    }
    async handle(request, response) {
        const { name, email, password } = request.body;
        try {
            await this.createUserUseCase.execute({
                name,
                email,
                password
            });
            return response.status(201).send();
        }
        catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected error.'
            });
        }
    }
}
exports.CreateUserController = CreateUserController;
