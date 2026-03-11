"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const empresaRouter = (0, express_1.Router)();
empresaRouter.get('/', (req, res) => {
    res.send('devuelve lista de emrpesas');
});
empresaRouter.get('/:id', (req, res) => {
    res.send(`Devuelve una empresa ${req.params.id}`);
});
empresaRouter.post('/', (req, res) => {
    res.send(`Crea nueva empresa con ID: ${req.body.id}`);
});
empresaRouter.patch('/:id', (req, res) => {
    res.send(`Actualiza datos de la empresa ${req.params.id} con los valores: ${req.body.nombre} and ${req.body.descripcion}`);
});
empresaRouter.delete('/', (req, res) => {
    res.send(`Borra objeto empresa de id ${req.body.id}`);
});
exports.default = empresaRouter;
//# sourceMappingURL=empresaRoutes.js.map