"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.roleMiddleware = roleMiddleware;
function roleMiddleware(allowedRoles) {
    return (req, res, next) => {
        if (!req.user) {
            return res.status(401).json({ error: "Nao autenticado" });
        }
        if (!allowedRoles.includes(req.user.tipo)) {
            return res.status(403).json({ error: "Acesso negado" });
        }
        return next();
    };
}
//# sourceMappingURL=role.middleware.js.map