"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = void 0;
const authMiddleware = (req, res, next) => {
  const { authorization } = req.headers;
  print(authorization);
  if (!authorization) {
    return res.status(401).json({ error: "token não fornecido" });
  }
};
exports.authMiddleware = authMiddleware;
//# sourceMappingURL=auth.js.map
