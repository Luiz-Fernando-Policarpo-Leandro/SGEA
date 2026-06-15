"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAuthRouter = void 0;
const express_1 = require("express");
const auth_controller_1 = require("../controllers/auth.controller");
const createAuthRouter = (repository) => {
    const router = (0, express_1.Router)();
    const controller = new auth_controller_1.AuthController(repository);
    router.post("/login", controller.login);
    return router;
};
exports.createAuthRouter = createAuthRouter;
//# sourceMappingURL=auth.route.js.map