"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteEmpresa = exports.modifyEmpresa = exports.getEmpresasById = exports.getAllEmpresas = exports.createEmpresa = void 0;
const empresa_1 = require("../models/empresa");
//Create new empresa 
const createEmpresa = (req, res) => {
    //Validate request 
    if (!req.body) {
        return res.status(400).json({
            status: "error",
            message: "El body no puede estar vacio",
            payload: null,
        });
    }
    // Save empresa in the database 
    const empresa = Object.assign({}, req.body);
    empresa.create(empresa)
        .then((data) => {
        res.status(200).json({
            status: "success",
            message: "objeto empresa creado exitosamente",
            payload: data,
        });
    })
        .catch((err) => {
        res.status(500).json({
            status: "error",
            message: "Un error ocurrio a la hora de intentar crear la empresa " + err.message,
            payload: null,
        });
    });
};
exports.createEmpresa = createEmpresa;
// Get all empresas using Promises
const getAllEmpresas = (req, res) => {
    //Calling the Sequelize findAll method. This is the same that a SELECT * FROM EMPRESA in a SQL query. 
    empresa_1.empresa.findAll()
        .then((data) => {
        return res.status(200).json({
            status: "conseguido",
            message: "Empresas obtenidas exitosamente",
            payload: data,
        });
    })
        .catch((err) => {
        return res.status(500).json({
            status: "error",
            message: "un error ocurrio al intentar obtener als empresas. " + err.message,
            payload: null,
        });
    });
};
exports.getAllEmpresas = getAllEmpresas;
/// Get Empresas by Id 
const getEmpresasById = (req, res) => {
    //convierte el id que vuelve como string a number y confirma que sea un numero
    const id = Number(req.params.id);
    if (isNaN(id)) {
        return res.status(400).json({
            status: "error",
            message: "El id debe ser un número válido",
            payload: null,
        });
    }
    empresa_1.empresa.findByPk(id)
        .then((data) => {
        return res.status(200).json({
            status: "success",
            message: "Empresa obtenida exitosamente",
            payload: data,
        });
    })
        .catch((err) => {
        return res.status(500).json({
            status: "error",
            message: "un error ocurrio al intentar obtener la Empresa " + err.message,
            payload: null,
        });
    });
};
exports.getEmpresasById = getEmpresasById;
///Modify empresa 
const modifyEmpresa = (req, res) => {
    // Validate request 
    if (!req.body) {
        return res.status(400).json({
            status: "error",
            message: "Content can not be empty.",
            payload: null,
        });
    }
    // Save empresa in the database 
    empresa_1.empresa.update(Object.assign({}, req.body), { where: { id: req.params.id } })
        .then((isUpdated) => {
        if (isUpdated) {
            return res.status(200).json({
                status: "success",
                message: "Empresa actualizado exitosamente",
                payload: Object.assign({}, req.body),
            });
        }
        else {
            return res.status(500).json({
                status: "error",
                message: "Ocurrio un error al actualizar el empresa ",
                payload: null,
            });
        }
    })
        .catch((err) => {
        res.status(500).json({
            status: "error",
            message: "Ocurrio un error al actualizar la empresa" + err.message,
            payload: null,
        });
    });
};
exports.modifyEmpresa = modifyEmpresa;
///Delete empresa
const deleteEmpresa = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = Number(req.params.id);
    try {
        yield empresa_1.empresa.destroy({ where: { id } });
        res.status(200).json({ message: "Empresa eliminado" });
    }
    catch (error) {
        res.status(500).json({
            message: "Error al eliminar empresa",
            error,
        });
    }
});
exports.deleteEmpresa = deleteEmpresa;
//# sourceMappingURL=empresaControler.js.map