"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get("/health", (req, res) => {
  return res.json({ status: "UP" });
});
router.get("/about", (req, res) => {
  return res.json({
    name: "Sistema de Gerenciamento de Eventos Academicos",
    objective:
      "Centralizar e automatizar todo o ciclo de vida de eventos educacionais.",
    license: "MIT",
  });
});
exports.default = router;
//# sourceMappingURL=public.route.js.map
