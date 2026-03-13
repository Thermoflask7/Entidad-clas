"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const contactoControler_1 = require("../controllers/contactoControler");
const contactoRouter = (0, express_1.Router)();
contactoRouter.get('/', contactoControler_1.getAllContactos);
contactoRouter.get('/:id', contactoControler_1.getContactosById);
contactoRouter.post('/', contactoControler_1.createContacto);
contactoRouter.patch('/:id', contactoControler_1.modifyContacto);
contactoRouter.delete('/:id', contactoControler_1.deleteContacto);
exports.default = contactoRouter;
//# sourceMappingURL=contactoRoutes.js.map