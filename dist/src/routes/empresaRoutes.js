"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const empresaControler_1 = require("../controllers/empresaControler");
const empresaRouter = (0, express_1.Router)();
empresaRouter.get('/', empresaControler_1.getAllEmpresas);
empresaRouter.get('/:id', empresaControler_1.getEmpresasById);
empresaRouter.post('/', empresaControler_1.createEmpresa);
empresaRouter.patch('/:id', empresaControler_1.modifyEmpresa);
empresaRouter.delete('/:id', empresaControler_1.deleteEmpresa);
exports.default = empresaRouter;
//# sourceMappingURL=empresaRoutes.js.map