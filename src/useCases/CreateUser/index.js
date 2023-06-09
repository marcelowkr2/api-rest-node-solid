"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserController = exports.createUserUseCase = void 0;
const MailtrapMailProvider_1 = require("../../providers/implementations/MailtrapMailProvider");
const PostgresUsersRepository_1 = require("../../repositories/implementations/PostgresUsersRepository");
const CreateUserController_1 = require("./CreateUserController");
const CreateUserUseCase_1 = require("./CreateUserUseCase");
const postgresUsersRepository = new PostgresUsersRepository_1.PostgresUsersRepository();
const mailtrapMailProvider = new MailtrapMailProvider_1.MailtrapMailProvider();
const createUserUseCase = new CreateUserUseCase_1.CreateUserUseCase(postgresUsersRepository, mailtrapMailProvider);
exports.createUserUseCase = createUserUseCase;
const createUserController = new CreateUserController_1.CreateUserController(createUserUseCase);
exports.createUserController = createUserController;
