"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const CreateUser_1 = require("./useCases/CreateUser");
const router = (0, express_1.Router)();
exports.router = router;
router.post('/user', (request, response) => {
    return CreateUser_1.createUserController.handle(request, response);
});
