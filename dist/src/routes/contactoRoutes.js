"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const contactoRouter = (0, express_1.Router)();
contactoRouter.get('/', (req, res) => {
    res.send('devuelve lista de contactos');
});
contactoRouter.get('/:id', (req, res) => {
    res.send(`Devuelve un contacto ${req.params.id}`);
});
contactoRouter.post('/', (req, res) => {
    res.send(`Crea nuevo contacto con ID: ${req.body.id}`);
});
contactoRouter.patch('/:id', (req, res) => {
    res.send(`Actualiza datos del contacto ${req.params.id} con los valores: ${req.body.idEmpresa}, ${req.body.tipo} and ${req.body.contacto}`);
});
contactoRouter.delete('/', (req, res) => {
    res.send(`Deleting the product ${req.body.id}`);
});
exports.default = contactoRouter;
//# sourceMappingURL=contactoRoutes.js.map