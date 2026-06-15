"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const usuario_use_cases_1 = require("../../domain/use-cases/usuario.use-cases");
class AuthController {
    repository;
    constructor(repository) {
        this.repository = repository;
    }
    login = async (req, res) => {
        try {
            const { email, senha } = req.body;
            if (!email || !senha) {
                return res
                    .status(400)
                    .json({ error: "Email e senha sao obrigatorios" });
            }
            const useCase = new usuario_use_cases_1.LoginUseCase(this.repository);
            const result = await useCase.execute(email, senha);
            return res.json(result);
        }
        catch (error) {
            if (error.message === "Credenciais invalidas") {
                return res.status(401).json({ error: error.message });
            }
            return res.status(500).json({ error: error.message });
        }
    };
}
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map