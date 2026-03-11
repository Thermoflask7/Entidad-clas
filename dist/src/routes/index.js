"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const contactoRoutes_1 = __importDefault(require("./contactoRoutes"));
const empresaRoutes_1 = __importDefault(require("./empresaRoutes"));
const apiRouter = (0, express_1.Router)();
apiRouter.use('/contactos', contactoRoutes_1.default);
apiRouter.use('/empresas', empresaRoutes_1.default);
apiRouter.get('/', (req, res) => {
    res.send('server up!');
});
exports.default = apiRouter;
//# sourceMappingURL=index.js.map